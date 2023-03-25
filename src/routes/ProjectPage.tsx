import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';

import { useDisclosure, SIZES } from '@/hooks';
import {
  Icon,
  projects,
  Smartphone,
  Monitor,
  OscillatingLine,
  ThemeSwitchButton,
  Logo,
} from '@/components';
import { nextArrElement } from '@/utility';

export function ProjectPage() {
  const [isMobilePreview, setIsMobilePreview] = useState(
    window.matchMedia(`(min-width: ${SIZES.sm}px)`).matches
  );
  const { isOpen: isTextOpen, open: openText } = useDisclosure(false);
  const navigate = useNavigate();

  const page = 'Bloggy';

  const project = projects.find((project) => project.name.toLowerCase() === page.toLowerCase());

  if (!project) return null;

  return (
    <main className="main-layout py-5 [&_*]:select-none">
      <Link to="" />
      <nav className="flex justify-between items-center h-8 mt-2 mb-16">
        <button onClick={() => navigate(-1)} className="h-4/6 cursor-pointer">
          <Icon
            type="long-arrow"
            className="h-full hover:text-accent-400 text-default transition-colors duration-300"
          />
        </button>
        <Link to="/">
          <Logo className="h-16" />
        </Link>
        <ThemeSwitchButton className="w-6 h-6" />
      </nav>

      <div className="flex flex-col items-center gap-5">
        {isMobilePreview ? (
          <Smartphone src={project.demo.mobile} className="max-w-full h-[600px]" />
        ) : (
          <Monitor src={project.demo.desktop} className="max-w-full h-[600px]" />
        )}
        <div className="space-x-6 mb-5">
          <button
            onClick={() => setIsMobilePreview(false)}
            className={clsx(
              'border-b border-main-0 dark:border-main-reverse-0 transition-all duration-300 text-default',
              isMobilePreview
                ? 'border-opacity-0 dark:border-opacity-0 hover:border-opacity-50'
                : 'border-opacity-100'
            )}
          >
            Desktop
          </button>
          <button
            onClick={() => setIsMobilePreview(true)}
            className={clsx(
              'border-b border-main-0 dark:border-main-reverse-0 transition-all duration-300 text-default',
              isMobilePreview
                ? 'border-opacity-100'
                : 'border-opacity-0 dark:border-opacity-0 hover:border-opacity-50'
            )}
          >
            Mobile
          </button>
        </div>
        <OscillatingLine />
      </div>

      <div className="flex justify-between items-center mt-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-righteous">
          {project.name}
        </h2>
        <span className="italic text-sm text-right">{project.type}</span>
      </div>

      <div className="mt-8">
        <h3 className="text-lg mb-2 font-righteous">Technologies used</h3>
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li key={technology} className="skill-item">
              {technology}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="text-lg mb-2 font-righteous">What I've built and have learned</h3>
        <ul className="list-disc ml-4 text-sm">
          {project.description.map((item) => (
            <li key={item} className="hover:text-accent-300">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="my-8 flex justify-evenly">
        <a
          href={project.urls.deploy}
          className="font-righteous tracking-wide font-bold text-xl gradient-text hover:gradient-text-animation transition-all duration-300 hover:scale-105"
          target="_blank"
        >
          Deploy
        </a>
        <a
          href={project.urls.repo}
          className="font-righteous tracking-wide font-bold text-xl gradient-text hover:gradient-text-animation transition-all duration-300 hover:scale-105"
          target="_blank"
        >
          Repository
        </a>
      </div>

      {project.essay && (
        <>
          {isTextOpen || (
            <button
              onClick={openText}
              className="flex gap-1.5 items-center mt-12 mb-10 mx-auto first-letter"
            >
              <div className="animated-arrows">
                <span></span>
                <span></span>
              </div>
              <span className="text-xl font-bold">Learn more</span>
              <div className="animated-arrows">
                <span></span>
                <span></span>
              </div>
            </button>
          )}

          <div
            className={clsx(
              'overflow-hidden transition-all xs:duration-[2000ms] duration-1000',
              isTextOpen ? 'mb-10 mt-12 max-h-[3000px] xs:max-h-[1000px]' : 'my-0 max-h-0'
            )}
          >
            <div className="transition-colors duration-300 text-default text-justify">
              <h3 className="text-lg font-righteous mb-2">My general thoughts</h3>
              {project.essay}
            </div>
          </div>
        </>
      )}

      <OscillatingLine className="" />
      <div className="mt-8">
        <Link
          to={`/project/${nextArrElement(projects, project).name}`}
          className="h-full ml-auto max-w-max flex flex-wrap items-center text-lg group"
        >
          <span className="group-hover:-translate-x-2.5 transition-all duration-300 text-default mr-1.5">
            Next Project:
          </span>
          <div className="flex ml-auto gap-2.5 items-center">
            <span className="font-righteous gradient-text group-hover:gradient-text-animation group-hover:-translate-x-2">
              {nextArrElement(projects, project).name}
            </span>
            <Icon
              type="long-arrow"
              className="h-4 2xs:h-5 rotate-180 group-hover:text-accent-500 transition-colors duration-300 text-default"
            />
          </div>
        </Link>
      </div>
    </main>
  );
}
