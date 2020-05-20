---
title: Push vs Pull in Software Development
heroUrl: push-me-pull-you/ashley-jurius-1ZvFTjgEodk-unsplash.jpg
heroCaption: Photo by Ashley Jurius on Unsplash
description:
  I've been thinking a lot recently about Push vs Pull in software development;
  two terms that refer to how work is moved through the development life cycle,
  from planning in to production.
published: 2020-05-20
tags:
  - agile
  - software development
  - push pull
---

Push vs Pull is not an argument solely reserved for Software Development. It is
actually a concept that comes from a manufacturing background. In fact, pull is
a key component of Kanban, a system born of the Toyota Production System.

## [Push](#push)

Push is often characterised by 2 statements:

- Tasks are moved to development based on an assumed or forecast need for them;
- Tasks are _assigned_ to people;

Tasks are created, planned and implemented ahead of when they are strictly
needed. In manufacturing terms this would be the generation of stock before it
has been purchased as opposed to manufacturing equipment on demand.

Push is intended to have the benefit of stock being available as soon as the
need for it arises. When you place an order on Amazon, for instance, it is
almost always in stock and therefore deliverable immediately (literally the same
day in some cases).

Along with this, push allows for managers to see how much work each member of
the team has for the foreseeable future. Because each task is assigned to a
developer when it is planned, you can theoretically tell who will be able to
complete the task by it's due date.

I say theoretically because, as we all know, software estimates are fickle
beasts and never right. Therefore the issue with managing schedules in this way
is allowing for the variance between estimated and actual time to complete. This
results in team members often being over/under loaded with a reaction from PM
required.

Push is (at least from my experience) the de-facto method of working. Most teams
I've worked in adopt the stance of managers (be they line management or project
management) assigning tasks directly to developers.

## [Pull](#pull)

Pull is characterised in the opposite way:

- Tasks are created and prioritised based on a need for them to exist;
- Tasks are then _pulled_ forward through the development cycle when there is
  capacity to work on them;

With pull, tasks are created, planned and implemented when they are needed. In
comparison to push: this would be after an order has been placed in a
manufacturing context.

Pull intends to reduce the amount of surplus stock by only ever creating that
which is required, preventing a buildup of stock along the manufacturing
process.

Within a pull system, you are only able to pick up work when you have capacity
to do so. And you only have capacity when work streams further down the line
_pull_ your work forward away from yourself. This means that not only must your
work be complete, but the work further down stream must also be complete.

Because of this, pull is fantastic at ensuring work is _completed_ as opposed to
simply started.

A driving concept behind pull-based systems is the removal of bottlenecks. In a
push system, work has a tendency to do 1 of two things:

1. Pile up behind part of the work stream due to it operating slower than that
   of the processes before it;
1. Run out at work stations due to them operating at a higher pace than that of
   process before it;

Either of these situations is highly undesirable and need identifying as soon as
possible, as waiting at any stage in the process is highly wasteful. Pull
systems are designed to highlight these issues early, and once highlighted it is
then up to the team to improve their processes to remove the bottleneck.

Pull is a big part of Kanban, where developers have a Work in Progress (WIP)
limit and pick tasks up from the "To Do" queue when they are out of work. If
there is no work to be picked up then they must help to remove any impediments
that are preventing work from reaching them.

I once explained this to a manager who responded: "But what if I need to start
other work?" Which is often the argument I hear against pull (and WIP limits in
particular).

The counter argument I present back is a simple one:

What is more important: starting work or finishing it?

With pull, new work cannot be started until in-progress work is finished. A
common way Kanban teams employ this is to have a team WIP limit less than the
number of members in the team itself. This means that, should a team of 5 have 4
tasks in progress, then the "spare" team member should be helping to bring other
tasks to a conclusion before any new work is picked up.

This ensures that the most important work is picked up and _completed_ ahead of
other work that is, by definition, not as important.

However, this is a fairly strict implementation of pull and isn't necessary to
get benefits from it.

## Example

Say you have a simple development process consisting of 4 stages:

1. To Do
1. In Development
1. QA
1. Done

A developer pulls forward an item from To Do and works on it. Once complete a
test engineering pulls it forward to QA. This gives the developer new capacity
to pull from the top of To Do and work on a new task.

The developer then finishes the new task but the test engineer hasn't finished
theirs yet. Therefore the test engineer can't pull forward the 2nd task, which
results in the developer being blocked from picking up new work. This may seem
like an issue with pull, but really it's an issue with your process. In push,
the work would continue to build up in QA because developers would continue to
push work over to them, happily work away at To Do. However, nothing would ever
be completed.

Eventually the work items in To Do would run out, you'd have nothing left for
developers to pick up but be left wondering why the product hadn't been
delivered. The likelihood is that you would notice only too late that QA is
causing work to hold up and move to address this.

With pull, however, the bottleneck is immediately apparent. 2 tasks in and you
already have the developers complaining that they're blocked. Why is this? Is QA
taking longer than expected? Is the task hard to test or is it simply poorly
defined and therefore untestable? All things can you can address immediately
with upcoming work.

It feels counter-intuitive that pull can actually ensure work gets done quicker,
you're actively encouraging work to be blocked so surely that will slow the
process down? However, if you're willing and able to change your process _as
soon_ as a bottleneck occurs, you will quickly see that it is a much more
efficient and speedy way to develop products.

## [Comparing the two](#comparing-the-two)

It's important to realise that, other than Kanban which is strictly pull, no one
development model is entirely push or pull. Indeed pull isn't a concept created
from the Agile manifesto, instead it is from something called Lean
Manufacturing. Agile and Lean are often confused as they share a lot of what
they aim to achieve. However, the main focus of lean is the reduction of waste
in any productive process.

For instance: Scrum is often described as a push system, due to the fact work
items are "pushed" in to a sprint with a self-imposed due date (the end of the
sprint). Tasks are then pushed further along the board with little concern for
the capacity at the next stage of the process. It is also not unheard of for
scrum teams to actively assign tasks to developers at the planning phase. So
whilst it is true that elements of scrum are push-based, scrum can still utilise
the benefits of pull.

Even Waterfall, for instance, can still implement a pull-based system to task
assignment and flow. The most important tenant of pull systems is that
developers pick up work only when the work is required and they have capacity.

We must also remember that software development is a multi-step process. Push
continually produces work at the earliest phase and _pushes_ the output in to
the next step. In my opinion it is here that the biggest weakness of push lies.

Push forces work in to the higher work streams, regardless of whether the higher
work streams have capacity for the work being pushed towards them. This then
builds a false view of how much is being accomplished. It doesn't matter how
much development you get done if everything then stalls in QA or UAT.

Another issue I take with push is it has little to no regard for the highest
priority work. If one developer (Developer A) is smashing through the stack of
tasks assigned to them, yet another (Developer B) is meandering along slowly,
then the tasks at the bottom of developer A's will get done ahead of the tasks
at the top of Developer B's. This then becomes highly difficult to manage the
order in which tasks are completed and results in lower priority work going out
head of other, more important, work.

Pull is also a much easier system to manage. Other than maintaining the to do
queue, managers have little to do. The don't have to search out which developer
has capacity, who is a best fit or who should pick it up. As opposed to push
which not only requires managers to still maintain some form of priority list,
but also directly assigning the tasks to developers. At this point, any
responsible manager will take in to account how much work each developer is
assigned and if they have the time to get this done by the due date. Hello
management overhead!

## [Software development is a team-sport](#software-development-is-a-team-sport)

Don't forget that we're talking about software teams here. No matter how
successful one developer is, if all developers don't clear their queue then the
entire team has failed. This lends to argue against push, which can easily
become a system which praises the individuals results over that of the team.

Added to that, push _creates_ silos. Managers will push work on to the developer
who is most "appropriate" (often the developer who has most knowledge of the
system or task in question). This stifles knowledge sharing and prevents the
_team_ being able to operate at a high level _together_.

Pull, however, promotes teamwork amongst developers as it requires each and
every person understand the tasks in the queue and be able to undertake the work
at hand. This is achieved via joint planning and immediate communication of
issues and blockers. And because each member of the team is held to account for
the team's output, not just their own, collaboration tends to increase and the
product benefits as a whole.

Conversely, push based systems can easily lead to fostering an environment where
developers focus on completing their own work ahead of that of the team.

## [Reacting to change](#reacting-to-change)

Push does have benefits. Those very silos I mentioned previously can be a
positive when an urgent bug comes in. In those instances "pushing" the task on
to the developer who will be the quickest to fix it makes sense right? Right.

Except for the fact that developer is currently fully loaded with their own to
do list! So what are you to do? If you put this task on them immediately then it
will push back _all_ the work they currently have in their to do list or require
the PM to reassign it to another developer. Remember that management overhead we
previously said hello to? Well say hello again!

However, in a _pull_ system, the task goes to the top of to-do and is then
picked up when the next developer has availability. The rest of the tasks still
get tackled in priority order and there is minimal to no impact on the rest of
the team.

But what if we're adamant that this task _needs_ to be done by one specific
developer? Well that's alright, break WIP. No "rules" are so strict that they
can't be bent, and if the bug is truly that important and this developer is
truly that key to it's completion, then allowing that developer to break WIP and
move on to this task before moving back to finish their previous task is OK,
indeed it's encouraged. The key difference with pull here is that no other work
is effected. Only the current task that developer is subsequently ignoring is
delayed. The rest of the to do queue is untouched and will be picked up by the
next available developer.

## [To conclude](to-conclude)

It's easier to push. In the immediate future it gives you a sense of security
that stuff is getting done and a feeling of control over what can otherwise be a
relatively unpredictable endeavour: software development.

Pull is a harder slog to begin. You _have_ to be committed to continually
improving your work flow. Pull is designed to expose bottlenecks; in the first
instance of working with pull you will likely observe a temporary reduction in
output due to the bottlenecks being exposed. And this is where I see most
attempts at pull systems fail.

The team either get scared because of the temporary reduction, or they simply
aren't willing to address the impediments that are preventing work from flowing
optimally.

The thing is though: once you do commit to it and push forward with the
appropriate improvements, you will see a marked improvement in team
collaboration, investment in project success by the entire team and, finally,
output. Add to this the vast reduction in the amount of work required to manage
your team's individuals due to teams becoming highly self-sufficient and
self-organised, and you can see why this post isn't quite as unbiased as I had
previously intended.
