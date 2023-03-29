# My Projects

## Bloggy

**Type:** a Blog/Social media Application

**Technologies used:** React, Typescript, Node.js, Express, MongoDB + Mongoose, Tailwind, Redux, RTK Query, Cypress, JWT, Docker

**Deploy:** https://bloggy-kirill-cherepanov.netlify.appyarn

**Repository:** https://github.com/Kirill-Cherepanov/bloggy

### What I've built and have learned

- Developed a Social media app that is focused on posting.
- Adopted an exceedingly scalable feature-based architecture for the front-end and a simplified "Clean architecture" on the back-end.
- Designed a highly intuitive and responsive user interface that enables most pleasant user experience.
- Set up a secure authentification/authorization process that was enabled by using dual JWT tokens and email verification.
- Added surface-level end-to-end tests with Cypress.
- Deployed the API on fly.io with Docker.

### My general thoughts

**Please do keep in mind that the time that it took me to create the project is very inflated by the fact that I was learning a lot of things on the go.**

When I started the project I didn't have a full picture of what I was building. The only things I knew for sure were that I wanted a social media app that focused on posts. Therefore, the model is similar to YouTube but with posts instead of videos. The second one was that I wanted a landing page with cool section transitions, the ones that you can see right now. And that's basically it. In retrospect, this landing page doesn't fit the model at all, since all the section types are static by design, and they don't represent the actual content posted on the platform.

The first thing for me was design. While I'm familiar with Figma, I still prefer drawing designs on paper for some reason. It took me two weeks to write and implement the initial design for the front-end. Although I had to make a few adjustments later on, overall it hasn't changed much since then.

Then I started working on the API. Unfortunately I do not recall the whole process, as it was rather straightforward. It took me a while to learn MongoDB, JWT, how to add email verification, and refresh my memories of Express. There is plenty of information on all of that on the internet, so I finished the API in one and a half weeks.

And that's when the refactoring began. I found a very helpful learning source that is [bulletproof react](https://github.com/alan2207/bulletproof-react), fell in love with it and rewrote the entire front-end architecture to be feature-based.

At that moment though, I didn't have any logic on the front-end, only static pages. So I installed Redux for global state management and RTK Query for server interactions. I added logic, as well as a few other things that came to me, such as the Edit page, the Likes feature, and optimistic updates, during the next two weeks.

And here I realized that having clean front-end code and a messy back-end wouldn't do, so I set out to learn about back-end architectures. The one that I initially settled on was "Clean Architecture" by Robert Martin. But no matter how hard I tried to implement it as close to the book as possible, it always led me to overengineer the entire API. So I chose to make a simplified, probably oversimplified, variation of the architecture, which you can see now. Overall it took me around a week.

Somewhere around this time I also decided to add a few tests. Initially I wanted to cover as much as I could, but had to settle on only surface-level E2E tests with Cypress, due to how much time it would've taken otherwise.

At this point, I knew I was mostly satisfied with what I had, so I moved on to deploying the application and fixing bugs. There is nothing to say about fixing bugs other than that it was a headache. Regarding deployment, though, it was a pain on a whole other level, considering that my previous hosting platform of choice, Heroku, abandoned its free tier. So I had to research a lot of platforms, before realizing that I wouldn't be able to do much without knowing Docker. Overall, the whole process took a week.
I also added a notification feature to notify users of errors and whatever else, when needed, and debounced a few forms.

<!-- ############################################### -->

## Tic-tac-toe Multiplayer

**Type:** a Multiplayer + AI game

**Technologies used:** React, Typescript, Node.js, Socket.io, Sass

**Deploy:** https://tic-tac-toe-kirill-cherepanov.netlify.app/

**Repository:** https://github.com/Kirill-Cherepanov/tic-tac-toe-multiplayer-react

### What I've built and have learned

- Developed a fully responsive web application that is a Singleplayer + Multiplayer + AI game.
- Utilized websockets to enable bi-directional communication between clients and the server.
- Designed a minimalistic yet intuitive opponent search feature.
- Applied the mini-max algorithm to add Artificial Intelligence to keep players entertained even in the absence of other players.

### My general thoughts

First of all, don't be deceived. While this project is based on tic-tac-toe which is a very simple game, my main focus was on developing a multiplayer that could be transferred to any other game and this project is meant to be centered mostly around it. Although, in retrospect, it's still quite improvable.

I began this project in the spring of 2022. At the time I didn't yet know React and didn't consider learning it for this project. So everything was written in vanilla TypeScript.

At first it was just a single-player game that you can find [here](https://github.com/Kirill-Cherepanov/tic-tac-toe-game). Then, I decided that stopping would be pointless, so I added multiplayer as well as AI.

I didn't know much about the back-end and didn't even know what I needed to complete the project. Having improvised on the go, I built much of what I have at this point, except for the timer, search with settings and AI. But my code became very convoluted and I had a lot of vulnerabilities on the back-end - anyone could easily cheat and even crush the server. So I couldn't proceed without rewriting the whole codebase. So I gave up. I didn't upload the project at the time because it was incomplete, but decided to do it now anyway a couple months later. You can take a look at it [here](https://github.com/Kirill-Cherepanov/tic-tac-toe-multiplayer).

And I rewrote everything from scratch, making the code much more maintainable and scalable. I used React for it and decided to stick with the same stack on the back-end (though I had to rewrite it anyways to keep up with the changes on the front-end).

Initially I had a database in the form of a JSON file. But soon realized that there were many problems with working with such a thing. It was mainly about concurrent file writes. It requires some heavy lifting to manage it and that's why I should have used one of the many databases that do it automatically (most of the popular ones). But since I didn't really need a database in that project all that much, I opted against it, and instead decided to keep all the data in a variable.

<!-- ############################################### -->

## Meme generator

**Type:** an Image Editor

**Technologies used:** React, Sass, Canvas API, Imgflip API

**Deploy:** https://Kirill-Cherepanov.github.io/meme-generator/

**Repository:** https://github.com/Kirill-Cherepanov/meme-generator

### What I've built and have learned

- Created a fully responsive web application to edit images, mostly focused on adding text to them, as well as applying basic image filters.
- Used canvas to imprint changes onto a given image on the client side. This made the experience much smoother than alternative web apps, albeit at the expense of accuracy of image generation.
- Bootstrapped the application with an API for popular meme images.
- Designed an eye-pleasing user interface.

### My general thoughts

#### About this project

The application uses the Imgflip API to fetch popular meme templates, or allows uploading a client's image. After that, it employs the Canvas API to render an image.
It stores information on all the changes to the original template: positioning, font, color and other settings for all the text boxes and filters applied to an image.
After that using the Canvas API it consumes all the data and applies the changes.
There is a margin of error in rendering since the Canvas API can't exactly use CSS data.
There were major hurdles that I ran across while making this project. More on that below.

#### Issues I've run across

First and foremost, the Imgflip API is terrible.
Initially I didn't intend to use the Canvas API. I hoped that the Imgflip API could do all the rendering since it promises to be able to do so.
But the reality is that the API they provide for rendering is fatally imprecise and the documentation is so lacking that it's almost nonexistent.
I thought of abandoning the project entirely but I just couldn't throw away everything that I had already done at the time.
Although at this point there is almost nothing left of what it was originally.
Also I should note that the Canvas API is quite quirky. I had to think of many workarounds to make the rendered image at least similar to what it should be. And now that I think of it, it might have been easier to just try taking a screenshot of an element on the page. I'm sure I've seen a library for this.

<!-- ############################################### -->

## Website Portfolio

**Type:** Portfolio, 3D website

**Technologies used:** React, Typescript, Three.js + fiber + drei, vite, Tailwind, Canvas API (except three.js)

**Deploy:** https://kirill-cherepanov.netlify.app/

**Repository:** https://github.com/Kirill-Cherepanov/Portfolio

### What I've built and have learned

- Created a fully responsive web portfolio with a lot of 3D components.
- Used a lot of optimization techniques to prevent the website from being unusable on low-end devices.
- Designed the website in two pleasing color themes: light and dark, made a seamless transition between them (on higher-end devices).
- Used a variety of 3D components and unique 2D animations and effects to make a stunning impression on a user.

### My general thoughts

The idea was to make a 3D website or a website with a lot of 3D features, and here we are right now. It much longer than it should've taken. I had to think of how I would implement whatever I wanted to without react first, than think of how to do it in react. The second part often took much longer than the first, due to react/fiber and react/drei not having comprehensive documentation.

Also, I never really thought that three.js could be so demanding in terms of CPU and GPU, that's why I was pretty shocked when I realized that the website lags quite a bit even on my high-end laptop. Perhaps I went overboard with all the stuff that I added. I just wanted a cool first impression, and now it could be even worse than the most simple website if the person I'm trying to impress uses a slow device.

You may notice that the repository doesn't have many commits and most of them are done within a span of a few days. The reason is simple, it feels very tedious to think about when to commit, how to name a commit, whether to reset a previous commit due to it not being big enough, or being too large or reverting most of it's changes. In other words, I don't like git all that much, so I prefer doing work without it, when possible.

## Others

_..._
