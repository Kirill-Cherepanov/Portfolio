import { ProjectType } from '@/types/Project.type';

import memeGeneratorPCDemo from '@/assets/videos/Meme Generator DEMO PC.mp4';
import ticTacToePCDemo from '@/assets/videos/Tic-tac-toe DEMO PC.mp4';
import bloggyPCDemo from '@/assets/videos/Bloggy DEMO PC.mp4';
import memeGeneratorMobileDemo from '@/assets/videos/Meme Generator DEMO MOBILE.mp4';
import ticTacToeMobileDemo from '@/assets/videos/Tic-tac-toe DEMO MOBILE.mp4';
import bloggyMobileDemo from '@/assets/videos/Bloggy DEMO MOBILE.mp4';

export const BloggyInfo = (
  <div className="project-info">
    <p>
      <i>
        Please do keep in mind that the time that it took me to create the project is very inflated
        by the fact that I was learning a lot of things on the go.
      </i>
    </p>
    <p>
      When I started the project I didn&#39;t have a full picture of what I was building. The only
      things I knew for sure were that I wanted a social media app that focused on posts. Therefore,
      the model is similar to YouTube but with posts instead of videos. The second one was that I
      wanted a landing page with cool section transitions, the ones that you can see right now. And
      that&#39;s basically it. In retrospect, this landing page doesn&#39;t fit the model at all,
      since all the section types are static by design, and they don&#39;t represent the actual
      content posted on the platform.
    </p>
    <p>
      The first thing for me was design. While I&#39;m familiar with Figma, I still prefer drawing
      designs on paper for some reason. It took me two weeks to write and implement the initial
      design for the front-end. Although I had to make a few adjustments later on, overall it
      hasn&#39;t changed much since then.
    </p>
    <p>
      Then I started working on the API. Unfortunately I do not recall the whole process, as it was
      rather straightforward. It took me a while to learn MongoDB, JWT, how to add email
      verification, and refresh my memories of Express. There is plenty of information on all of
      that on the internet, so I finished the API in one and a half weeks.
    </p>
    <p>
      And that&#39;s when the refactoring began. I found a very helpful learning source that is{' '}
      <a target="_blank" href="https://github.com/alan2207/bulletproof-react">
        bulletproof react
      </a>
      , fell in love with it and rewrote the entire front-end architecture to be feature-based.
    </p>
    <p>
      At that moment though, I didn&#39;t have any logic on the front-end, only static pages. So I
      installed Redux for global state management and RTK Query for server interactions. I added
      logic, as well as a few other things that came to me, such as the Edit page, the Likes
      feature, and optimistic updates, during the next two weeks.
    </p>
    <p>
      And here I realized that having clean front-end code and a messy back-end wouldn&#39;t do, so
      I set out to learn about back-end architectures. The one that I initially settled on was
      &quot;Clean Architecture&quot; by Robert Martin. But no matter how hard I tried to implement
      it as close to the book as possible, it always led me to overengineer the entire API. So I
      chose to make a simplified, probably oversimplified, variation of the architecture, which you
      can see now. Overall it took me around a week.
    </p>
    <p>
      Somewhere around this time I also decided to add a few tests. Initially I wanted to cover as
      much as I could, but had to settle on only surface-level E2E tests with Cypress, due to how
      much time it would&#39;ve taken otherwise.
    </p>
    <p>
      At this point, I knew I was mostly satisfied with what I had, so I moved on to deploying the
      application and fixing bugs. There is nothing to say about fixing bugs other than that it was
      a headache. Regarding deployment, though, it was a pain on a whole other level, considering
      that my previous hosting platform of choice, Heroku, abandoned its free tier. So I had to
      research a lot of platforms, before realizing that I wouldn&#39;t be able to do much without
      knowing Docker. Overall, the whole process took a week. I also added a notification feature to
      notify users of errors and whatever else, when needed, and debounced a few forms.
    </p>
  </div>
);

export const TicTacToeInfo = (
  <div className="project-info">
    <p>
      First of all, don&#39;t be deceived. While this project is based on tic-tac-toe which is a
      very simple game, my main focus was on developing a multiplayer that could be transferred to
      any other game and this project is meant to be centered mostly around it. Although, in
      retrospect, it&#39;s still quite improvable.
    </p>
    <p>
      I began this project in the spring of 2022. At the time I didn&#39;t yet know React and
      didn&#39;t consider learning it for this project. So everything was written in vanilla
      TypeScript.
    </p>
    <p>
      At first it was just a single-player game that you can find{' '}
      <a target="_blank" href="https://github.com/KissMyUSSR/tic-tac-toe-game">
        here
      </a>
      . Then, I decided that stopping would be pointless, so I added multiplayer as well as AI.
    </p>
    <p>
      I didn&#39;t know much about the back-end and didn&#39;t even know what I needed to complete
      the project. Having improvised on the go, I built much of what I have at this point, except
      for the timer, search with settings and AI. But my code became very convoluted and I had a lot
      of vulnerabilities on the back-end - anyone could easily cheat and even crush the server. So I
      couldn&#39;t proceed without rewriting the whole codebase. So I gave up. I didn&#39;t upload
      the project at the time because it was incomplete, but decided to do it now anyway a couple
      months later. You can take a look at it{' '}
      <a target="_blank" href="https://github.com/KissMyUSSR/tic-tac-toe-multiplayer">
        here
      </a>
      .
    </p>
    <p>
      And I rewrote everything from scratch, making the code much more maintainable and scalable. I
      used React for it and decided to stick with the same stack on the back-end (though I had to
      rewrite it anyways to keep up with the changes on the front-end).
    </p>
    <p>
      Initially I had a database in the form of a JSON file. But soon realized that there were many
      problems with working with such a thing. It was mainly about concurrent file writes. It
      requires some heavy lifting to manage it and that&#39;s why I should have used one of the many
      databases that do it automatically (most of the popular ones). But since I didn&#39;t really
      need a database in that project all that much, I opted against it, and instead decided to keep
      all the data in a variable.
    </p>
  </div>
);

export const projects: ProjectType[] = [
  {
    name: 'Bloggy',
    type: 'a Blog/Social media Application',
    technologies: [
      'React',
      'Typescript',
      'Node.js',
      'Express',
      'MongoDB & Mongoose',
      'Tailwind',
      'Redux',
      'RTK Query',
      'Cypress',
      'JWT',
      'Docker',
    ],
    urls: {
      deploy: 'https://bloggy-kirill-cherepanov.netlify.app',
      repo: 'https://github.com/KissMyUSSR/bloggy',
    },
    demo: {
      mobile: bloggyMobileDemo,
      desktop: bloggyPCDemo,
    },
    description: [
      'Developed a Social media app that is focused on posting.',
      'Adopted an exceedingly scalable feature-based architecture for the front-end and a simplified "Clean architecture" on the back-end.',
      'Designed a highly intuitive and responsive user interface that enables most pleasant user experience.',
      'Set up a secure authentification/authorization process that was enabled by using dual JWT tokens and email verification.',
      'Added surface-level end-to-end tests with Cypress.',
      'Deployed the API on fly.io with Docker.',
    ],
    essay: BloggyInfo,
  },
  {
    name: 'Tic-tac-toe Multiplayer',
    type: 'a Multiplayer + AI game',
    technologies: ['React', 'Typescript', 'Node.js', 'Socket.io', 'Sass'],
    urls: {
      deploy: 'https://tic-tac-toe-kirill-cherepanov.netlify.app/',
      repo: 'https://github.com/KissMyUSSR/tic-tac-toe-multiplayer-react',
    },
    demo: {
      mobile: ticTacToeMobileDemo,
      desktop: ticTacToePCDemo,
    },
    description: [
      'Developed a fully responsive web application that is a Singleplayer + Multiplayer + AI game.',
      'Utilized websockets to enable bi-directional communication between clients and the server.',
      'Designed a minimalistic yet intuitive opponent search feature.',
      'Applied the mini-max algorithm to add Artificial Intelligence to keep players entertained even in the absence of other players.',
    ],
    essay: TicTacToeInfo,
  },
  {
    name: 'Meme Generator',
    type: 'an Image Editor',
    technologies: ['React', 'Sass', 'Canvas API', 'Imgflip API'],
    urls: {
      deploy: 'https://kissmyussr.github.io/meme-generator/',
      repo: 'https://github.com/KissMyUSSR/meme-generator',
    },
    demo: {
      mobile: memeGeneratorMobileDemo,
      desktop: memeGeneratorPCDemo,
    },
    description: [
      'Created a fully responsive web application to edit…to them, as well as applying basic image filters.',
      'Used canvas to imprint changes onto a given image …t at the expense of accuracy of image generation.',
      'Bootstrapped the application with an API for popular meme images.',
      'Designed an eye-pleasing user interface.',
    ],
  },
];
