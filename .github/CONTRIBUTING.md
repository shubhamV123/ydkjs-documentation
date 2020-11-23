Thanks for looking to help 👋. Have a nice time contributing to this project.
If you've any queries regarding setup or contributing, feel free to open an issue.
I'll try my best to answer as soon as I can.

## Running locally

1. Simply clone this project.
2. Install dependencies using `yarn install`
3. Start via `yarn` start

## How can I contribute?

### Improve documentation

Currently documentation is not refined. There is scope of improvement in docs

### Add new feature

If you feel like this module lacking some feature and you know how to do it. Feel free to raise the PR!

### Adding another book

The reference of this site is from [this](https://github.com/getify/You-Dont-Know-JS). Currently its not completed. So if you want to add another chapter in this project. Simple go to `docs` folder and check book folder name exisit or not.

Currently this project using this pattern:

1. Inside `docs` folder all books documentation added.
2. If you added `book` or `chapter`. Make sure add markdown configuration like this:

```md
---
id: bigger-picture
title: The Bigger Picture
hide_title: true
---
```

and after that also add in `sidebar.js` . This will let know `docusaurus` to add in side bar. For example:

```js

"bookName":[...,'get-started/bigger-picture'] <- It means add document which is inside `docs/get-started`

```

Also `sidebarjs` array also works as pagination so make sure you added as per original book source

Also in bottom of footer also add orial author source like this:

```
### Original Source

You can read original author source from [here](ChapterURl)
```
