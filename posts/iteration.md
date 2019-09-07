---
title: Iterate and be damned!
headlineImage: /img/iteration/iteration.webp
description: >-
  Pushing out features when they're ready to be learnt from is a good thing. But
  not at the expense of technical debt.
date: 2019-06-29T10:50:19.069Z
tags:
  - Software development
  - agile
  - rant
---

> That's fine. We'll iterate on this and improve it later.

Sweet! Iteration is good. It helps us take Minimum Viable Products and grow them in to fully fledged products that brings joy and money to users and creators (preferably in that order). Iteration is one of the main tenets of Agile software development, requiring us to deliver customer value as soon as it is available and continually add small increments of functionality.

This means that sometimes features aren't perfect, maybe we take a performance hit or we have to add a "not fully featured" yet message to highlight that something is essentially in beta testing. But does it mean we suffer on code quality?

The thing with iteration is that we should constantly be adding customer value with each iteration, this means we add the missing features or improve performance. The purpose of smaller iterations is to _learn_, to get a feature in front of users quickly so as to decide their worth to end users, not simply to rush.

```javascript
for (const i of things) {
	// will neaten this up later, for now it works
	if (i === 'something') {
		doAThing();
		break;
	}

	if (i % 2 === 0) {
		const z = await DO_SOMETHING_ELSE().then(async x => return await y());

		// not sure why this works but it does :shrug:
		if (z) {
			global.THING = i--;
		}
	}
}

```

<figcaption>We've all seen code like this before</figcaption>

What iteration does **not** mean, is compromise on code quality. What it does not mean is rush out sub-par features or user experience then write up a "technical cleanup" task to be undertaken at the end of the unit of work.

## [Technical Debt](#technical-debt)

Technical Debt is accrued through the creation of poor code. Poor in terms of maintainability, in terms of performance, in terms of style and simplicity.

Technical Debt is bugs, is code that is hard to add further features to, is ticking time-bombs waiting in the code base.

I once saw a programmer develop an incredibly complex system using Quaternions simply because he wanted to learn them. Great. Except no body could maintain the damn thing apart from him.

Oh and it never worked right, in fact it ruined several weeks-worth of data collection because the issues were not noticed until in-depth analysis on the results!

Technical Debt should be repaid as soon as possible, as soon as it is highlighted.

Paying back technical debt when it is discovered keeps the amount of work smaller. As with financial debt, delaying technical debt results in interest being added to the account.

The trick is that technical cleanup tasks often get pushed to the back of every backlog. You have to remember these tasks add little value to the end user; in fact more often than not they offer no value at all.

## [Caveat](#caveat)

OBVIOUSLY you can't spend weeks perfecting code. As programmers we all know that we can spend a lifetime on the simplest of tasks. Constantly making things prettier and prettier.

I'm not advocating for perfectionism within your code: good enough is, by definition, good enough. And eventually we have to ship the thing, we can't tinker forever.

But putting off good improvements to code in the interest of "getting it done" just pushes the proverbial can down the road until one day, you'll come to maintain the system and think "who on Earth wrote this garbage!?"

## [Rule of Thumb](#rule-of-thumb)

As a personal rule of thumb: Iteration should always improve on the **user's** experience; not the developer's.
