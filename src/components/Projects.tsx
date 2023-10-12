import { FC, useRef } from 'react';

import project1 from '../assets/project-1.webp';
import project2 from '../assets/project-2.webp';
import project3 from '../assets/project-3.webp';
import project4 from '../assets/project-4.webp';
import project5 from '../assets/project-5.webp';

const PROJECTS = [
  {
    id: 'project-card-1',
    img: project1,
    url: 'https://vaibhav1324.github.io/quotes-generator/',
    gh_url: 'https://github.com/vaibhav1324/quotes-generator',
    title: 'Random Quotes Generator',
  },
  {
    id: 'project-card-2',
    img: project2,
    url: 'https://vaibhav1324.github.io/melodoodle/',
    gh_url: 'https://github.com/vaibhav1324/melodoodle',
    title: 'MeloDoodle - Create Music (WIP)',
  },
  {
    id: 'project-card-3',
    img: project3,
    url: 'https://vaibhav1324.github.io/cosmic-wonder/',
    gh_url: 'https://github.com/vaibhav1324/cosmic-wonder',
    title: 'Cosmic Wonder - Explore the Universe (WIP)',
  },
  {
    id: 'project-card-4',
    img: project4,
    url: '',
    gh_url: 'https://github.com/vaibhav1324/mymarvels',
    title: 'My Marvels Mobile App',
  },
  {
    id: 'project-card-5',
    img: project5,
    url: '',
    gh_url: 'https://github.com/vaibhav1324/ChatApp',
    title: 'Simple Chat Mobile App',
  },
];
const Projects: FC = () => {
  const indexRef = useRef(1);

  return (
    <div className="p-5 md:px-10 md:py-20 gap-10  flex flex-1 flex-col justify-center items-center">
      <h3 className="text-4xl">Projects</h3>

      <div className="w-full max-w-[500px] h-[350px] carousel gap-10 rounded-box relative shadow-xl scale-100 hover:cursor-pointer">
        {PROJECTS.map((item, index) => {
          return (
            <div
              id={item.id}
              key={item.title}
              className="card bg-white carousel-item w-full relative before:content-['``'] before:bg-gradient-to-b from-[transparent] to-[#00000080] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-[0]">
              <img
                src={item.img}
                alt={`project-${index + 1}`}
                className={`${
                  index > 2 ? 'object-contain' : 'object-cover'
                } h-full w-full object-center`}
              />
              <div className="block absolute bottom-5 left-5 max-w-md">
                <p className="mb-1 text-xl text-white font-bold">
                  {item.title}
                </p>
                <div className="flex gap-4">
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary btn-sm">
                      go to site
                    </a>
                  )}

                  <a
                    href={item.gh_url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-info btn-sm">
                    go to github
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-10">
        <button
          className="btn btn-circle btn-primary"
          onClick={() => {
            if (indexRef.current <= 1) {
              return;
            }

            const el = document.getElementById(
              `project-card-${indexRef.current - 1}`,
            );

            if (!el) {
              return;
            }

            el.scrollIntoView({ behavior: 'smooth' });

            indexRef.current--;
          }}>
          ❮
        </button>
        <button
          className="btn btn-circle  btn-primary"
          onClick={() => {
            if (indexRef.current >= 5) {
              return;
            }

            const el = document.getElementById(
              `project-card-${indexRef.current + 1}`,
            );

            if (!el) {
              return;
            }

            el.scrollIntoView({ behavior: 'smooth' });

            indexRef.current++;
          }}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Projects;
