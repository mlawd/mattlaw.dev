---
title: GraphQL with .NET
heroUrl: graphql-with-dotnet/graph.jpg
heroCaption: <span>Photo by <a href="https://unsplash.com/@isaacmsmith?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Isaac Smith</a> on <a href="https://unsplash.com/@isaacmsmith?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
description: Creating a GraphQL API using DotNet Core 3 and graphql-dotnet
published: 2019-11-03T00:00:00Z
tags:
  - graphql
  - dotnet
  - c-sharp
---

So the other day I stumbled across
[The Movie Database](https://www.themoviedb.org/), and more interestingly,
[The Movie Database API](https://developers.themoviedb.org/3).

It provides a REST API to retrieve and search Movies, TV Shows, Actors etc. as
well as adding reviews and such. I stumbled across it on the
[Made with VueJS twitter feed](https://twitter.com/MadeWithVueJS) (unfortunately
I can't find the exact tweet now), where someone had tweeted them to show off a
VueJS front-end they had built for it.

"A great idea!" I thought. I've been looking for something to build in React and
this gave me something tangible to create with an extremely rich API behind it
to give it some fat.

So I created the bare bones React app and started on my journey.

But then I thought "wait! REST is dead! GraphQL FTW" (REST isn't really dead,
but GraphQL is much cooler). Luckily I'd _also_ been looking for a project to
create using [graphql-dotnet](https://github.com/graphql-dotnet/graphql-dotnet)
so I decided to start with that. Then create a React front-end and finally
create a VueJS front-end with their new composition API.

Thus I have now committed myself to quite an amount of work. But it's all
interesting so here we go!

You can find all the source code for the server
[on GitHub](https://github.com/np-matt/gql-movies) (don't hate me too much for
the lack of Tests. WIP).

## [Creating the server](#creating-the-server)

So I started out with a basic dotnet core 3 WebAPI app, stripped out the
WeatherForecast stuff and added in a new `GraphQlController` with a single
HttpPost endpoint.

I then used [dotnet-graphql](https://github.com/graphql-dotnet/graphql-dotnet)
to create the schema and execute the queries.

The endpoint itself is very simple. The entire controller is just 39 lines:

```dotnet
using Microsoft.AspNetCore.Mvc;
using GraphQL;
using Newtonsoft.Json;
using GqlMovies.Api.Schemas;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace GqlMovies.Api.Controllers
{
	public class GraphQLQuery
	{
		public string OperationName { get; set; }
		public string Query { get; set; }
		public JObject Variables { get; set; }
	}

	[ApiController]
	[Route("[controller]")]
	public class GraphQLController : ControllerBase
	{
		private MainSchema _schema;

		public GraphQLController(MainSchema schema)
		{
			_schema = schema;
		}

		[HttpPost]
		public async Task<IActionResult> PostAsync([FromBody] GraphQLQuery query)
		{
			var json = await _schema.ExecuteAsync(_ =>
			{
				_.Query = query.Query;
				_.Inputs = query.Variables.ToInputs();
			});

			return new JsonResult(JsonConvert.DeserializeObject(json));
		}
	}
}
```

The `DeserializeObject` call is required to enable the magic setting of the
content-type header to application/json. Possibly not the most performant thing
to be doing, ripping a string to object to go back to string for transmission,
but for now it works and is the kind of thing that can be improved upon later.

## [Types](#types)

Type required a little bit of boilerplate. You first have to create a basic
class to encapsulate the data that describes your object, then use this to
extend `ObjectGraphType` and describe the fields you wish to publish.

The Movie class for instance:

```dotnet
using Newtonsoft.Json;

namespace GqlMovies.Api.Models
{
	public class Movie
	{
		public int Id { get; set; }
		public bool Adult { get; set; }
		public int Budget { get; set; }
		public string Title { get; set; }
		public string Tagline { get; set; }
		public double Popularity { get; set; }

		[JsonProperty(PropertyName = "vote_average")]
		public double VoteAverage { get; set; }

		[JsonProperty(PropertyName = "poster_path")]
		public string PosterPath { private get; set; }

		[JsonProperty(PropertyName = "release_date")]
		public string ReleaseDate { private get; set; }

		[JsonProperty(PropertyName = "imdb_id")]
		public string ImdbId { private get; set; }
	}
}
```

This then gets passed in to a `MovieType`:

```dotnet
using GqlMovies.Api.Models;
using GraphQL.Types;

namespace GqlMovies.Api.Types
{
	public class MovieType : ObjectGraphType<Movie>
	{
		public MovieType()
		{
			Field(m => m.Id);
			Field(m => m.Adult);
			Field(m => m.Budget);
			Field(m => m.Title);
			Field(m => m.Tagline);
			Field(m => m.Popularity);
			Field(m => m.VoteAverage);
			Field(m => m.PosterPath);
			Field(m => m.ReleaseDate);
		}
	}
}
```

The `ObjectGraphType` accepts a type for the object underneath it. This types
the parameter in the callback function of `Field`. You use this to describe the
GraphQL object that can be queried. It derives the type from the type of the
property that you return.

You can also do more complex things to type properties explicitly and add
members that don't exist on the underlying object.

The `ResultsType` for instance defines a field for the `results` array. This is
so that I can nest types and have a Result class with `List<Movie>` and return a
`ListGraphType<MovieType>` from the GraphQL query.

## [Query](#query)

Queries are defined much the same way that fields are. There can be only one
query object, but this doesn't mean you can't split that query object up.

For this I created the `Query` class which uses the `MovieQuery` to nest the
queries.

```dotnet
using GqlMovies.Api.Models;
using GqlMovies.Api.Types;
using GqlMovies.Api.Services;
using GraphQL.Types;

namespace GqlMovies.Api.Query
{
	public class MovieQuery : ObjectGraphType
	{
		public MovieQuery(IMovieService service)
		{
			FieldAsync<MovieType, Movie>(
				"single",
				arguments: new QueryArguments(
					new QueryArgument<IntGraphType> { Name = "id" }
				),
				resolve: context =>
				{
					var id = context.GetArgument<int>("id");
					return service.GetAsync(id);
				}
			);

			FieldAsync<ResultsType<MovieType, Movie>, Results<Movie>>(
				"search",
				arguments: new QueryArguments(
					new QueryArgument<StringGraphType> { Name = "query" }
				),
				resolve: context =>
				{
					var query = context.GetArgument<string>("query");
					return service.ListAsync(query);
				}
			);
		}
	}
}
```

```dotnet
using GraphQL.Types;

namespace GqlMovies.Api.Schemas
{
	public class Query : ObjectGraphType
	{
		public Query()
		{
			Name = "Query";

			Field<MovieQuery>( "movie", resolve: context => new{ });
		}
	}
}
```

According to the docs the key to this kind of nesting is the returning of
`new{ }` in the resolver.

However, this does mean that we end up queries that look like this:

```graphql
query {
  movies {
    search(query: "Star Wars") {
      page
      results {
        title
      }
    }
  }
}
```

Which I'm not 100% sure about but I think I like it :shrug:

## [The Schema Itself](#the-schema-itself)

The Schema class is simple:

```dotnet
using GraphQL;
using GraphQL.Types;

namespace GqlMovies.Api.Schemas
{
	public class MainSchema : Schema
	{
		public MainSchema(IDependencyResolver resolver): base(resolver)
		{
			Query = new Query();
		}
	}
}
```

The cool thing here is the injection of the `IDependencyResolver`. Have a look
in the `Startup.cs` class which shows the service configuration. I don't use it
explicitly in the Schema, but injecting it allows me to inject dependencies
further down the line, such as the `MovieService` being injected in to the
`MovieType` class.

In the Schema all I'm setting up is a `Query` object. This would also be where I
set up Mutations and such, but for the purposes of this example I won't be
updating anything.
