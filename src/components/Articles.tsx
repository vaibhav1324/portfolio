import { FC, useRef } from 'react';

import article1 from '../assets/article-1.webp';
import article2 from '../assets/article-2.webp';
import article3 from '../assets/article-3.webp';
import article4 from '../assets/article-4.webp';

const ARTICLES = [
  {
    id: 'article-card-1',
    img: article1,
    url: 'https://medium.com/stackademic/achieving-type-safety-with-usenavigation-in-react-navigation-cb96ccc5b9e3',
    title: 'Achieving Type-Safety with useNavigation in React Navigation',
  },
  {
    id: 'article-card-2',
    img: article2,
    url: 'https://medium.com/@vaib1324/harness-the-power-of-useimperativehandle-in-react-9995f53fe149',
    title: 'Harness the Power of useImperativeHandle in React',
  },
  {
    id: 'article-card-3',
    img: article3,
    url: 'https://medium.com/@vaib1324/handling-state-in-react-with-zustand-and-typescript-454464a07eed',
    title: 'Handling State in React with Zustand and TypeScript',
  },
  {
    id: 'article-card-4',
    img: article4,
    url: 'https://medium.com/@vaib1324/enhancing-code-readability-with-chakrastyled-in-chakra-ui-9c656219a924',
    title: 'Enhancing Code Readability with chakraStyled in Chakra-UI',
  },
];

const Articles: FC = () => {
  const indexRef = useRef(1);

  return (
    <div className="p-5 md:px-10 md:py-20 gap-10 flex flex-1 flex-col min-w-[250px] md:min-w-[400px] justify-center items-center">
      <h3 className="text-4xl">Articles</h3>

      <div className="w-full max-w-[500px] h-[350px] carousel gap-10 rounded-box relative shadow-xl scale-100 hover:cursor-pointer hover:scale-110 transition-all ease-in-out active:scale-100">
        {ARTICLES.map((item, index) => {
          return (
            <div
              id={item.id}
              key={item.title}
              className="card bg-white carousel-item w-full relative before:content-['``'] before:bg-gradient-to-b from-[transparent] to-[#00000050] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-[0]"
              onClick={() => {
                window.open(item.url, '_blank');
              }}>
              <img
                src={item.img}
                alt={`article-${index + 1}`}
                className="object-cover h-full w-full object-center"
              />
              <p className="text-xl text-white font-bold absolute bottom-5 left-5 max-w-sm">
                {item.title}
              </p>
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
              `article-card-${indexRef.current - 1}`,
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
            if (indexRef.current >= 4) {
              return;
            }

            const el = document.getElementById(
              `article-card-${indexRef.current + 1}`,
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

export default Articles;
