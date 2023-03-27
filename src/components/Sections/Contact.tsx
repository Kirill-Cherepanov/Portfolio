import { ContactLinks, EyeOfHorus, Icon, NavigationLinks } from '@/components';

import resume from '@/assets/misc/Kirill Cherepanov Resume.pdf';

import handshake from '@/assets/images/handshake.svg';

export function Contact() {
  return (
    <section id="contact" className="main-layout mt-20">
      <div className="flex justify-between flex-col xs:flex-row">
        <div className="flex flex-col justify-between gap-8 xs:gap-0 mb-12 xs:mb-0">
          <a
            href="mailto:cherkirr@gmail.com"
            className="text-[2.5rem] leading-[1] 2xs:text-5xl xs:text-[3.25rem] md:text-7xl xl:text-7.5xl lg:mt-16 xl:mt-0 font-black font-righteous block relative uppercase tracking-wide gradient-text hover:gradient-text-animation"
          >
            Let's work
            <br />
            together
            <img
              src={handshake}
              alt=""
              className="inline absolute bottom-0 ml-2 translate-y-[12%] h-16 2xs:h-20 sm:h-24 md:h-28 xl:h-32 animate-hueRotate"
            />
          </a>
          <div>
            <div className="text-xl font-semibold">Check out my</div>
            <a
              target="_blank"
              href={resume}
              className="text-3xl 2xs:text-4xl sm:text-5xl font-extrabold flex items-center group w-max"
            >
              <Icon
                type="long-arrow"
                className="rotate-180 h-5 sm:h-6 inline mr-3 mb-1.5 2xs:mb-2 text-default group-hover:text-accent-500 group-hover:mr-4 group-hover:ml-1 transition-default"
              />
              <div className="flex flex-col gap-1.5 2xs:gap-2">
                <span>Resume</span>
                <span className="w-full h-0.5 bg-main-0 dark:bg-main-reverse-0 transition-default group-hover:bg-accent-500 group-hover:ml-4" />
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="grow flex flex-col xl:flex-row gap-16 justify-end">
            <EyeOfHorus className="h-72 w-min grow ml-auto hidden lg:block" />
            <ContactLinks
              classNames={{
                list: 'flex xs:flex-col lg:flex-row xl:flex-col xl:h-full items-end justify-center xs:justify-end xl:justify-between gap-6 sm:gap-8',
                icon: 'h-12 sm:h-16 hover:text-accent-500 hover:scale-110 transition-default text-default',
              }}
            />
          </div>
          <NavigationLinks
            classNames={{
              list: 'mt-16 hidden lg:flex justify-end gap-10 xl:gap-16 text-lg uppercase tracking-widest',
              item: 'hover:text-accent-500 transition-colors duration-300 text-default',
            }}
          />
        </div>
      </div>

      <NavigationLinks
        classNames={{
          list: 'mt-16 hidden xs:flex lg:hidden justify-center gap-7 sm:gap-10 sm:text-lg uppercase tracking-widest',
          item: 'hover:text-accent-500 transition-colors duration-300 text-default',
        }}
      />

      <div className="flex justify-between text-2xl 2xs:text-3xl xs:text-4xl font-righteous mb-10 mt-8 lg:mt-14">
        <span>2023</span>
        <span>Kirill Cherepanov</span>
      </div>
    </section>
  );
}
