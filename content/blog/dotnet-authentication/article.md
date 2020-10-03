---
title: Basic Custom Cookie Authentication with .Net Core 3.1
heroUrl: dotnet-authentication/randalyn-hill-zZ2E8RUL-DA-unsplash.jpg
heroCaption:
  <span>Photo by <a
  href="https://unsplash.com/@randalynhill?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Randalyn
  Hill</a> on <a
  href="https://unsplash.com/s/photos/cookie?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
description:
  Adding simple custom cookie-based authentication to a .NET core 3.1 app
published: 2020-09-21T00:00:00Z
tags:
  - authentication
  - dotnet
  - c-sharp
---

I'm engaged! Not often the start you see to a blog/tutorial about how to develop
some code but there you go.

I say it because it provides context as to where this tutorial comes from. My
Fiance and I are wanting a website so that guests can RSVP & select their meal
choices. There are many options out there for pre-made websites (some even free)
but I decided that I was going to make it myself.

Not only that, but I was going to push myself out of my comfort zone a little.
My CSS skills aren't what I want them to be, and often I rely heavily on
[Vue](https://vuejs.org/), [Vuetify](https://vuetifyjs.com/en/) and
[Gridsome](https://gridsome.org/) to build sites. So I decided to use .Net core
(admittedly still within my comfort zone) but without any JS or CSS libraries
(within reason, this project is to skill up, not to re-invent the wheel).

So the idea is to have a website that is password protected. However, instead of
a generic password that means the guests then have to enter their details (name
etc.), we wanted a guest (or invite)-specific password that would then enable
the site to identify guests and store their RSVP directly against them.

Eventually I'll be able to build an "organiser" interface to view all the
responses, most likely powered by a GraphQL API! (I have a tutorial on
[how to create a .NET GraphQL API](/blog/graph-ql-with-net/) if you wish to
learn how to do that!)

To achieve this I don't want to have to identify users via email then check a
provided password; I neither know everyone's emails nor want to type them in. So
the "out the box" authentication in .NET core won't suffice.

Therefore we can now move on to the crux of the tutorial... Custom cookie
authentication in .NET core!

Assuming you already have a .NET core web-app of some form I'll jump straight to
the parts that matter.

In `Startup.cs` you'll need to include the code that adds authentication (and
specifically cookie-based authentication).

```dotnet
namespace Wedding.Web
{
  public class Startup
  {
    public void ConfigureServices(IServiceCollection services)
    {
      // .. bunch of other stuff

      services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
      .AddCookie(o =>
      {
        o.LoginPath = "/access";
      });
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      app.UseRouting(); // Should already be present

      app.UseAuthentication();
      app.UseAuthorization();

      app.UseEndpoints(eps => {}) // Should already be present
    }
  }
}
```

For this code to compile you'll also need to include the
"Microsoft.AspNetCore.Authentication.Cookies" NuGet package and add it to your
usings at the top of the file.

So what does this do? Well:

- In `ConfigureServices` it tells .NET to include authentication services that
  handle the requests, and that it should use the `CookieAuthentication` scheme.
- Then the `AddCookie` call allows you to set your own parameters such as the
  `LoginPath`. By default, the login path will take you to `/Account/Login` with
  a query parameter for the `ReturnUrl`.
  - I wanted to customise this as there isn't really the concept of an "Account"
    on this site. Everything is tied to an "Invite" instead.
- In `Configure` it adds two lines: `app.UseAuthentication()` &
  `app.UseAuthorization()`. These add the actual middlewares to the request
  pipeline that process the requests themselves.

To test this, simply add the `[Authorize]` attribute to one of your controller
actions and it should redirect you to the login route you configured above
(which will likely 404 as it doesn't exist yet).

Next, we need to handle the login!

For this, I created a new controller called "AccessController". It had two
action handlers: `public IActionResult Index()` and
`public IActionResult Index(string passphrase)`.

The parameterless handler has a HttpGet attribute added to it (so that it is
only accessible on GET requests) and the HttpPost attribute was added to the
other.

The GET handler is simple: it returns a view with a form containing a single
input (for the "passphrase").

The POST handler is a little more complex: It calls off to a Repository (I'm
using the Repository pattern) to retrieve an "Invite" using the passphrase.
Then, if an invite is returned, it creates a new "ClaimsPrincipal" with some
basic details of the invite. Finally it "signs in" the user and redirects them
back to the home page (this is where you would use the "ReturnUrl" parameter,
but as there's only one place for the user to go at the moment, that's a later
improvement)

And what does all this look like?

```dotnet
namespace Wedding.Web.Controllers
{
  public class AccessController : Controller
  {
    private readonly IInviteRepository _inviteRepository;

    public AccessController(IInviteRepository inviteRepository)
    {
      _inviteRepository = inviteRepository;
    }

    [HttpGet]
    public IActionResult Index()
    {
      return View(new LoginViewModel());
    }

    [HttpPost]
    public async Task<IActionResult> Index(string passphrase)
    {
      var invite = await _inviteRepository.GetInviteAsync(passphrase);

      if (invite == null)
      {
        return View(new LoginViewModel
        {
          Error = "Incorrect passphrase"
        });
      }

      var identity = new ClaimsIdentity(CookieAuthenticationDefaults.AuthenticationScheme);
      identity.AddClaim(new Claim(ClaimTypes.NameIdentifier, invite.Id.ToString()));

      var principal = new ClaimsPrincipal(identity);
      await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal);

      return RedirectToAction("Index", "Home");
    }
  }
}
```

And that's it! Simple right? The ID is stored against the claims principal so
that I can use this to retrieve the Invite quickly and easily in any subsequent
requests.

As an extra win, to do this you can simply use
`HttpContext.User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Email)` in any
handler method within a controller.

Next up will be how I've set up .NET core with [ParcelJS](https://parceljs.org/)
to handle my frontend build (hint: it's a short one as it's amazingly simple to
get working).
