---
title: Get Reviewing
heroUrl: graphql-with-dotnet/graph.jpg
heroCaption: <span>Photo by <a href="https://unsplash.com/@isaacmsmith?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Isaac Smith</a> on <a href="https://unsplash.com/@isaacmsmith?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
description: I've seen a few places now that don't "enforce" code reviews for all changes. Personally I think you're missing out on a fantastic opportunity. Hint: it's not just about catching errors
published: 2019-11-03T00:00:00Z
tags:
  - process 
  - software development 
  - programming
---

I've worked with a couple of clients that just don't see the benefit of code
reviews. "Who's going to pay for that?" they say... Truth is that, if you don't
peer review code changes, everyone pays for it in the long run; both in terms of
technical dept and a team that doesn't have a clue how to maintain the software
in question.

To be fair: code reviews aren't always important. If you can guarantee that the
person who creates the code will be around forever to maintain it and answer
questions; then maybe, just maybe, you don't need them.

## How to code review

Code reviewing is a skill. Admittedly it is one that I'm aware I need to get
better at.

It takes a keen eye to trawl through someone else's code and spot areas that may
potentially spell trouble. This is especially true where code-reviews are
unstructured. Where there is no guidance over what to look for in code reviews,
it can be easy to start nit-picking every technical detail that is different to
how you would implement the solution. Likewise it can be just as easy to worry
that you're picking up too much and therefore leave key details out of the
review.

Therefore it is benefitial to both individual developers and team cohesion to
lay some guidance on what you, as a team, are looking for in your code reviews.

Common areas include:

- Poorly performant code: do you really need nested loops that never break
  early?
- Hard to read code, or as I've heard it called: the wtf metric
- Genuine errors such as `=+` instead of `+=`
- Overly complex code
- Breakages from the style guides

This is by no means an exhaustive list but is certainly the areas I try to
concern myself with when dealing with other peoples code. However, it can still
be hard to separate convention from personal preference. I'll be the first to
admit it takes a certain level of maturity to code review and be code reviewed.

For me though, the biggest part of code reviewing is the learning. I've learnt
so much from code reviewing better devs than I ever did at University.

Everyone has different ways of approaching work, and without gathering opinions
on your how, how will you ever improve? Sure, what you've developed works. But
does it work as well as it could do? Is it performant? Does it do in 10 lines
what could be simplified down to 5? Is there a native method that handles your
well-written-yet-totall-yunecessary inline function? And is that library you
always reach for really necessary in this context? (_cough_ lodash _cough_)
