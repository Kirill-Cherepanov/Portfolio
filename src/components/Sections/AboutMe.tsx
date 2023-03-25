import { HashLink } from 'react-router-hash-link';

import { AboutMeCanvas } from '@/components';

export function AboutMe() {
  return (
    <section className="main-layout" id="about-me">
      {/* Initially I wanted to have the height of this component to be 90vh. But this makes projects section below very ustable */}
      {/* It seems to doesn't like viewheights of anything other than 100vh. WHY??? */}
      <div className="w-full px-6 2xs:px-8 lg:px-0 relative lg:h-screen rounded-3xl lg:rounded-none flex flex-col bg-main-reverse-1 dark:bg-main-1 text-default transition-colors duration-300 lg:bg-transparent lg:dark:bg-transparent">
        <div className="max-h-[calc(100vh_-_400px)] lg:max-h-max lg:h-full lg:ml-[500px] lg:z-10 pt-8 pb-4 relative flex flex-col gap-4">
          <h2 className="shrink-0 text-4xl 2xs:text-5xl sm:text-6xl uppercase font-righteous text-center lg:text-left">
            About me
          </h2>
          <div className="shrink sm:text-lg grow space-y-2 overflow-auto pb-6 hide-scrollbar highlight-links">
            <p>
              Hello there, my name is Kirill Cherepanov, and I'm a junior full stack web developer
              with an emphasis on front-end and MERN plus Typescript stack. Here is my{' '}
              <HashLink smooth to="/#skills">
                full list of skills
              </HashLink>{' '}
              and{' '}
              <HashLink smooth to="/#projects">
                projects
              </HashLink>
              .
            </p>
            <p>
              I'm a junior (3rd year) at Belarussian State University studying theoretical mechanics
              and mathematical modeling. Despite that I have quite a lot of time on my hands -
              thanks to the very flexible curriculum - that I put into studying web development. It
              is my entrepreneurial mindset and drive for constant improvement that propel me
              forward and motivate me to take on increasingly challenging projects. Be it software,
              data science, or mathematics - I enjoy learning all of it by solving related problems.
            </p>
            <p>
              As a child, I was fascinated by all the technological advances around me, often
              finding myself dreaming for hours about the endless possibilities that technology
              provides. I've stayed true to that childhood dream, and even now the sincerest desire
              I harbor is to observe the evolution of human technology and improve myself alongside
              it. I'm very excited about what the future might bring to us, and I want to witness
              and experience the most of that myself.
            </p>
            <p>
              About 6 years ago, I decided to take a serious approach to studying English. Since
              then, I have been constantly studying through periods of active and passive learning
              via self-exposure to western media and book reading, all of which I grew accustomed to
              and they became my favorite pastimes at this point. Although my lack of experience in
              the speech department is inevitable, since I have not yet had enough opportunities to
              communicate with native speakers, I still take great pride in my relatively abundant
              vocabulary (for a non-native, that is) and a knack for writing English texts. I also
              tried learning other languages, such as Japanese. For now, though, I decided to double
              down on learning English to finally get rid of the remnants of my accent and improve
              my ability to read more difficult books (e.g. Lovecraft).
            </p>
            <p>
              Regarding my past times, I can't imagine myself without music. I love listening to
              almost every kind of music - in fact I probably listen to it too much - ranging from
              hard rock to classical music, and from country to technological to{' '}
              <a target="_blank" href="https://en.wikipedia.org/wiki/A_cappella">
                A cappella
              </a>
              . I also enjoy playing rhythm games at times.
            </p>
            <p>
              To keep myself in touch with the world I regularly read and listen to news articles,
              as well as literature on many different fields of study such as economics, physics,
              psychology, history, and many others.
            </p>
            <p>
              I also enjoy reading - mainly novels, but not exclusively - having read over 60
              volumes of them in 2021.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink">
            <button>
              <div className="scroll-down-mouse" />
            </button>
            <div className="uppercase font-bold shrink-0">Scroll text</div>
          </div>
        </div>
        <div className="h-[360px] lg:absolute lg:left-[calc(-100%_+_10em)] lg:w-[200%] lg:h-full">
          <AboutMeCanvas />
        </div>
      </div>
    </section>
  );
}
