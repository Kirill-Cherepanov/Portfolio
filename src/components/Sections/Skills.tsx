import clsx from 'clsx';
import { useState } from 'react';

import { Icon, IconType } from '@/components';
import { objectEntriesTyped, objectKeysTyped } from '@/utility';

const skillCategories = {
  primary: {
    icon: 'num-1' as IconType,
    skills: [
      'Javascript',
      'Typescript',
      'React',
      'Node.js',
      'Express',
      'Mongodb',
      'HTML5',
      'CSS3',
      'sass',
      'tailwind',
    ],
  },
  secondary: {
    icon: 'num-2' as IconType,
    skills: [
      'Python',
      'C++',
      'Webpack',
      'Socket.io/Websockets',
      'git',
      'figma',
      'redux',
      'Docker',
      'Cypress',
      'Markdown',
      'Three.js',
      'SolidWorks',
    ],
  },
  deployment: {
    icon: 'cloud-computing' as IconType,
    skills: ['Render.com', 'fly.io', 'Heroku', 'Netlify', 'Local'],
  },
  languages: {
    icon: 'languages' as IconType,
    skills: [
      ['English', 'B2-C1'],
      ['Russian', 'Native'],
      ['Japanese', 'N-5'],
    ],
  },
};
type SkillsType = keyof typeof skillCategories;

export function Skills() {
  const [currentTab, setCurrentTab] = useState<SkillsType>(objectKeysTyped(skillCategories)[0]);

  return (
    <section
      id="skills"
      className="relative text-lg px-8 xs:px-10 sm:px-12 xs:py-12 py-16 mt-24 mb-20 transition-colors duration-300 bg-main-reverse-1 dark:bg-main-1 text-default"
    >
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16 w-full">
        <h2 className="uppercase text-6xl font-righteous leading-[0.8] md:hidden">Skills</h2>
        <ul className="md:basis-[calc(50%_-_32px)] md:shrink-0 flex flex-col gap-y-2 h-64 md:h-80 lg:h-64">
          {objectEntriesTyped(skillCategories).map((skill) => {
            const skillType = skill[0];
            const icon = skill[1].icon;
            return (
              <li
                key={skillType}
                className={clsx(
                  'grow w-full flex align-center rounded-lg transition-default bg-main-reverse-2 dark:bg-main-2 hover:bg-main-reverse-3 dark:hover:bg-main-3',
                  skillType === currentTab ? 'grow-[1.3] text-accent-500' : 'text-default'
                )}
              >
                <button
                  className="w-full h-full px-8 uppercase text-lg font-black flex items-center justify-between"
                  onClick={() => setCurrentTab(skillType)}
                >
                  <div className="flex items-center w-full justify-between md:w-auto">
                    <span className="w-8 text-left order-2 md:order-none">
                      <Icon type={icon} className="w-5 inline" />
                    </span>
                    <span className="relative top-[1px] order-1 md:order-none">{skillType}</span>
                  </div>
                  {skillType === currentTab && (
                    <Icon type="long-arrow" className="h-5 rotate-180 hidden md:block" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="md:w-[calc(50%_-_32px)] md:grow-0 relative">
          <div className="relative z-10">
            <h2 className="uppercase text-6xl font-righteous mb-8 leading-[0.8] hidden md:block">
              Skills
            </h2>
            {currentTab === 'languages' ? (
              <ul className="space-y-2">
                {skillCategories[currentTab].skills.map(([language, level]) => (
                  <li key={language} className="text-lg group">
                    <span className="font-bold mr-2">{language}:</span>
                    <span className="group-hover:text-accent-600 transition-all duration-200">
                      {level}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="flex flex-wrap gap-2">
                {skillCategories[currentTab].skills.map((skill) => (
                  <li key={skill} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Icon
            type={skillCategories[currentTab].icon}
            className="absolute right-0 top-0 h-full text-accent-600 dark:text-accent-300 opacity-[12%] transition-colors duration-300"
          />
        </div>
      </div>
    </section>
  );
}
