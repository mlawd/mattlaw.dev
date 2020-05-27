---
title: JAMStack saved our butts
heroUrl: jamstack-conf/toa-heftiba-U_zIfKfEoRM-unsplash.jpg
heroCaption: Photo by Toa Heftiba on Unsplash
description:
  JAMStack is an architectural paradigm that is gaining popularity amongst
  developers, particularly front-end developers. Here are some of my biggest
  takeaways from the recent JAMStack conference.
published: 2020-05-27
tags:
  - conference
  - jamstack
  - infrastructure
---

I'm a big fan of the JAMStack. Particularly I'm a massive fan of Netlify and
Headless Content Management Systems (CMS) in general.

For those of you who haven't heard of either these:

## [Netlify](#netlify)

[Netlify](https://netlify.com) is a hosting platform that allows you to easily
host static websites and so much more (for free!).

They offer Serverless functions, Identity management, Analytics & super-simple
form integrations; all with a free tier to get you started.

For me, the biggest pull of Netlify is their seamless integration with your
repository. As soon as you create a site and hook it up to your repository, it
will build and deploy it. You can also set up deployment previews on Pull
Requests, so you get a free & easy to manage QA/UAT environment to go along with
your production environment.

## [Headless CMS](#headless-cms)

Headless CMS' provide an easy-to-use environment for content creators to manage
the information that is displayed on their websites: blog posts, contact
information, galleries etc.

Unlike the traditional CMS, which would serve the content and the website
itself, Headless CMS' provide an API with which to retrieve the content
information for a front-end application to then display.

Examples of Headless CMS' include: [Prismic](https://prismic.io),
[Contentful](https://www.contentful.com/), [Kontent](https://kontent.ai/) &
[Strapi](https://strapi.io/).

Headless CMS' are great because you get full freedom to choose your stack with
which to build your application. Take Kentico, for instance. To build a full
Kentico site you are forced to use .NET and deploy to some form of windows-based
machine somewhere. You end up with a huge application with a lot of source code
and effort to get a basic site deployed. Not to mention the costs of deploying
it under recommended specs.

_Kontent_ however (the Headless CMS offering from Kentico) allows you to create
a website or application with _any_ technology you wish. My own site, for
instance, built with Gridsome & deployed to Netlify, once was integrated easily
and quickly with Kontent. This technology-agnostic approach to providing content
then can extend to native applications, giving you one source of truth and
consistent data across all platforms.

---

So due to my unbridled love of JAMStack, I decided to book a half day away from
work and join the remote JAMStack conference and write about some of my key
takeaways.

## [Not a fad](#not-a-fad)

JAMStack is here to stay. It's also been here for a while. JAMStack essentially
boils down to serving static files and pushing out processing to the browser as
opposed to a server-side rendering of MVC-style applications.

This was highlighted in a talk early-on in the conference that summarised the
"State of JAMStack" survey. The talk had some very interesting insights and I
would recommend checking out the
[slides](https://slides.com/seldo/jamstack-survey-2020) if you wish to see the
detail.

It's interesting as an architectural "trend" because, really, it's nothing new.
It's no secret that if you need to access a database or some other API/data
store via a network which then renders your HTML on the fly in the backend, you
are adding latency to the delivery of your page and content. JAMStack concerns
itself with that first meaningful paint, getting some form of content out to the
user, as quickly as possible. You can then get personalised data for the user
via an AJAX request.

What's more interesting is the rise of Static Site Generators (SSGs) as a way to
have your cake and eat it. SSGs allow you to pre-render your HTML with data from
your database, generating those static files that are then served through to
users super-fast. This aids with both speed and Search Engine Optimisation, as
it makes it easier for bots to crawl your website and index it.

There's some real cool work going on for SSGs which, again, I won't cover here.
But watch this space for a post bestowing the virtues of Gridsome.

## [Netlify](#netlify-1)

### [Build Plugins](#build-plugins)

[Netlify build plugins](https://www.netlify.com/products/build/plugins/) are now
in general availability!

Build plugins allow you to write pieces of code that are executed on each build
of your site. Some intriguing use cases for this include:

- Running automated tests and preventing the build if they do not pass
- Creating Site Maps & RSS feeds
- Push notifications on deployment

These are just 3 examples of plugins that have been created and exist for you to
use already!

I find the idea behind this very exciting. Especially the running of automated
tests and stopping any push to production if something is broken. This is
particularly interesting to me as it is something I have been touting a lot at
work and, well, we all know I'm keen on
[talking about testing](https://mattlaw.dev/blog/test-driven-development-an-opinion/).

Something I'd be very interested in seeing (and given the time I may look in to
creating) is Syndicated Content publishing, whereby you access the git log to
figure out what has been created and post out to Twitter, LinkedIn, Facebook,
Medium etc.

### [Edge Handlers](#edge-handlers)

[Edge handlers](https://www.netlify.com/blog/2020/05/27/introducing-edge-handlers-in-preview/)
allow you to write middleware that runs on each request to a defined endpoint.
Unfortunately you can't play with it today, but I'm excited to get my hands on
this.

It really brings about the best of both worlds: JAMStack static hosting with
Netlify's CDN and easy deployment with the security of server-side logic and
handling.

It does feel like a _slight_ departure from the purpose of JAMStack, and I must
say I feel that if this is used heavily then is Netlify really the hosting
platform for you? If you find yourself writing handlers for every route then you
essentially have an MVC application that might be better off in .NET or NodeJS.

That said, it's still early days and there's not a tonne of information to go on
yet. Even with all that, it looks awesome and I can't wait to give it a go.

## [Prismic](#prismic)

[Prismic](https://prismic.io/) is one of the aforementioned Headless Content
Management Systems. It's another one that I have integrated with my website (I
don't use multiple CMS' like a crazy-man, I just like to experiment with these
things and try out as much as I can).

I'm not going to go in to a list of reasons why I already like Prismic, it's
pretty sweet, but I plan on doing a comparison between Prismic and Kontent at
some point in the near future.

The exciting new thing coming from Prismic however, is
[Slice Machine](https://www.slicemachine.dev/).

Prismic organises content using Slices, which are repeatable sections of website
structure such as Rich Text elements, images, code blocks, calls to action,
really anything that you want to create.

When working with slices currently, you have to configure the slice in the
Prismic application and add it to a content type. Then, in your front-end code,
switch on the slice type and render it as required with the data provided.

Slice Machine is a new way of working with slices. It allows you to configure
your slice types within your source code, which it then syncs up with the
Prismic front-end so that you can add the slices in to different content types.

Not only does it allow you to configure your slices in your repository, but it
then allows you to keep your component code right next to the slice
configuration. Hey presto, you have super-reusable content elements you can
reuse on any site.

This is awesome.

It also brings a `<slice-zone>` component which takes a Content Type parameter
and UID which then magically renders all of your slices. Nothing ground breaking
here, as it's basically replicating the switch statement that has already been
written by those of us who have worked with slices previously. However, this
component does stop you having to extend your switch every time a new slice is
created; which is, admittedly, pretty handy.

Not only that but it comes with a default
[library of components](https://vue-essential-slices.netlify.app/?path=/story/introduction-%F0%9F%91%8B--wip)
that you can jump in and start using straight away or customise to fit with your
own app. So long as your app is built with VueJS & Nuxt that is, which is all it
supports currently.

I haven't had chance to play about with it yet, but I'd be interested in seeing
if you can exclude the default library to avoid conflicts with any that you wish
to create. But this really does present a super-fast way of scaffolding a brand
new site _with_ CMS integration essentially out of the box!

## [Afterwards](#afterwards)

There were some other, really interesting, talks that bestowed the virtues of
JAMStack (and particularly Netlify). This included a talk by
[Erin Kissane](https://incisive.nu/) one of the creators of the COVID-19
tracking site. Whilst there were many awesome parts of her presentation (a lot
of them related to the USA tracking of COVID cases), the main JAMStack-related
quote I took away was "JAMStack saved our butts".

JAMStack truly is a moniker that is going to stick with the web development
community. Despite it being "created" to address website performance, the
tooling that companies such as Netlify have built around the concept are quickly
becoming the biggest pull in to the scene for developers across the spectrum of
web applications.
