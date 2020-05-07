---
title: Test Driven Development - An Opinion
heroUrl: test-driven-development/tdd.jpg
heroCaption: <span>Photo by <a href="https://unsplash.com/@antoine1003?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Antoine Dautry</a> on <a href="/s/photos/test?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
description:
  I've seen a lot of hate recently for TDD. People seems to think it's either
  completely crazy or massively inefficient. However, done right I think it is
  an invaluable tool for software developers
published: 2019-11-07T00:00:00Z
tags: 
  - process
  - tdd
  - testing
---

I recently read an article proclaiming Test-Driven Development (TDD) to be
"[fundamentally wrong](https://hackernoon.com/test-driven-development-is-fundamentally-wrong-hor3z4d)".
It was quite an interesting article, although I believe the author may have been
a little narrow in their understanding of what TTD is & aims to achieve.

## [Bad Designs and TDD](#bad-designs-and-tdd)

In the article the author states a changing design to be a reason for completely
disregard. He states that clients designs are vague and that planning is
basically non existent in modern software development.

> So were I to follow the TDD architecture I would have to constantly revisit my
> tests, review all of them, revising them to match my discoveries.

Now this sets me straight off thinking that the article has a very narrow view
of software development as a whole, not just TDD. The reasons for why TDD is "no
good" appear to be centered entirely around front end creation.

To be honest, if the author of the article is talking specifically about TDD on
the UI, I'm inclined to agree with him; to an extent.

I'll be the first to admit that TDD on the front end is _difficult_. Coming from
almost an entirely web-based front end experience, it means I need to know
selectors and HTML structure before writing any code. This means that with every
change to the UI the tests need updating, and not necessarily because of broken
functionality, but because of broken selectors in the tests. Too much of this
and the benefits of TDD start to slip away to the drawbacks.

However, the UI is just one part of software development. When creating APIs I
find TDD to be **absolutely** invaluable. It allows me to create a test that
says "Given an object, when I post, then it is mutated in to the Database and a
201 is returned". I can then write the code that implements it and
**immediately** validate my implementation.

No external software required. No postman. No curl. Event no database if I'm
being smart with my setup.

Just because designs are fluid though doesn't mean that TDD should be completely
abandoned. The author claims to be diligent in his collation of requirements and
functional specifications, and if these are really that well written then there
is no reason TDD can't help you. To write up tests for what you know, then
change the cases as you discover new/different functions.

Which brings me on to my next point

## [Writing tests up-front](#writing-tests-up-front)

The author states the following:

> Here is what TDD looks like to me:
>
> 1. write the TDD tests
> 1. begin implementation
> 1. discover an unanticipated consideration
> 1. rewrite the tests
> 1. continue implementation
> 1. goto 3 over and over and over …
> 1. (actually more like item 150) all tests pass
> 1. send to QA

I may be being a little pedantic here but the fact that the word "tests" is
pluralised is another sign to me that TDD is being used incorrectly.

The best practise isn't to write _all_ your tests upfront and then start writing
implementation code. Not only does this play in to the lack of flexibility on
discovery, you're removing one of the biggest benefits (as I see it) of TDD
which is that the resulting code is inherently simpler. No, the best way to TDD
is to write a _single_ failing test and immediately fix it.

This means that you're forced to only solve the problem in front of you.
Speaking from experience, we developers tend to be problem solvers, and we
occasionally get a little over excited when there is something we just _know_
needs doing.

Is all boils down to the
[YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it) principle. We
software developers are adamant that we will need that abstraction layer we
built around the object mutation function, because we just know that this is
going to be the best generic framework that ever was created and will serve
customer's needs for the next decade.

However, this invariably end ups with more complex code that accounts for a host
of possibilities that may (usually) never actually happen!

Disciplined TDD helps keep you focused in on what is actually necessary for the
code _now_ as opposed to a potential future that may never occur.

This also allows for more discovery, as realising new or ambiguous requirements
doesn't require a rewrite of a whole host of tests, just the ones ahead of you
now.

## [Don't test your own code!](#dont-test-your-own-code)

Well, kinda. The author argues that developers writing their own tests is
"supremely ridiculous" (genuine quote).

The author unfortunately completely forgets the
[Testing Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html).

Absolutely yes, the developer should write their own unit tests. Unless of
course you're pairing, in which case get the test case written & hand over the
keyboard to your pair!

When you get to end to end (E2E) testing then it really depends as to whether
the developer should be testing the system themselves. Usually it is best to
have someone else test it, because (as quite rightly stated in the article) we
developers know the happy path and will follow it religiously. We used to call
this "monkey testing" in my old job, just sit in front of the screen and hit
things until it breaks. But this isn't necessarily always possible.

If anything, E2E testing by a third party is an argument _for_ TDD not against
it. The third party should write those tests against the specification without
seeing a single pixel of how it has been implemented. Otherwise aren't those
tests just going to fall in to the same trap as developers testing their own
code anyway? And when it comes down to it, isn't this all that TDD is saying?
Test without seeing the code? And for the developer, the only way to achieve
this is to write the tests first.

## [To surmise](#to-surmise)

The article in question finishes off with the following:

> Read any advocacy of TDD and it will always boil down to an argument for
> testing itself, which nobody argues against. It never makes a case for writing
> tests before implementation.
>
> There is no rationale for writing tests before implementation.
>
> That is absurd.

Well I'd like to think I've at least disproved those first 2 sentences, if
nothing else. I have stated just a couple of reasons why I believe writing tests
_before_ implementation is actually beneficial, not just why we should test at
all.

As for my opinion on the subject? The great Master Kenobi said it best: only the
Sith deal in absolutes.

TDD isn't always appropriate, but it is _often_ a useful tool and a good idea.
Especially at the unit test level.

But feel free to disagree.
