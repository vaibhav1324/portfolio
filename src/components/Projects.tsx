import { FC } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

const PROJECTS = [
  {
    id: 'project-card-1',
    url: 'https://vaibhav1324.github.io/quotes-generator/',
    title: 'Random Quotes Generator',
  },
  {
    id: 'project-card-2',
    url: 'https://vaibhav1324.github.io/melodoodle/',
    title: 'MeloDoodle - Create Music (WIP)',
  },
  {
    id: 'project-card-3',
    url: 'https://vaibhav1324.github.io/cosmic-wonder/',
    title: 'Cosmic Wonder - Explore the Universe (WIP)',
  },
  {
    id: 'project-card-4',
    url: 'https://github.com/vaibhav1324/mymarvels',
    title: 'My Marvels Mobile App',
  },
  {
    id: 'project-card-5',
    url: 'https://github.com/vaibhav1324/ChatApp',
    title: 'Simple Chat Mobile App',
  },
];

const getAnimationConfig = (index: number) => ({
  initial: {
    opacity: 0,
    x: -100,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  transition: {
    delay: index * 0.3,
    duration: 0.6,
    type: 'spring',
  },
  viewport: { once: true },
});

const Projects: FC = () => {
  return (
    <div className="p-5 md:px-10 md:py-20 gap-10 flex flex-1 flex-col min-w-[250px] md:min-w-[400px]">
      <h3 className="text-4xl text-center">Projects</h3>

      <motion.ul className="grid gap-10 pl-10" style={{ listStyle: 'inside' }}>
        <AnimatePresence mode="wait">
          {PROJECTS.map((project, index) => (
            <motion.li key={project.id} {...getAnimationConfig(index)}>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="text-lg md:text-2xl hover:text-secondary border-b-2 border-slate-100 hover:border-secondary"
                style={{ transition: '0.3s' }}>
                {project.title}
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
};

export default Projects;
