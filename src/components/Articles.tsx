import { FC } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

const ARTICLES = [
  {
    id: 'article-card-1',
    url: 'https://medium.com/stackademic/achieving-type-safety-with-usenavigation-in-react-navigation-cb96ccc5b9e3',
    title: 'Achieving Type-Safety with useNavigation in React Navigation',
  },
  {
    id: 'article-card-2',
    url: 'https://medium.com/@vaib1324/harness-the-power-of-useimperativehandle-in-react-9995f53fe149',
    title: 'Harness the Power of useImperativeHandle in React',
  },
  {
    id: 'article-card-3',
    url: 'https://medium.com/@vaib1324/handling-state-in-react-with-zustand-and-typescript-454464a07eed',
    title: 'Handling State in React with Zustand and TypeScript',
  },
  {
    id: 'article-card-4',
    url: 'https://medium.com/@vaib1324/enhancing-code-readability-with-chakrastyled-in-chakra-ui-9c656219a924',
    title: 'Enhancing Code Readability with chakraStyled in Chakra-UI',
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

const Articles: FC = () => {
  return (
    <div className="p-5 md:px-10 md:py-20 gap-10 flex flex-1 flex-col min-w-[250px] md:min-w-[400px]">
      <h3 className="text-4xl text-center">Articles</h3>

      <motion.ul className="grid gap-10 pl-10" style={{ listStyle: 'inside' }}>
        <AnimatePresence mode="wait">
          {ARTICLES.map((article, index) => (
            <motion.li key={article.id} {...getAnimationConfig(index)}>
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="text-lg md:text-2xl hover:text-primary border-b-2 border-slate-100 hover:border-primary"
                style={{ transition: '0.3s' }}>
                {article.title}
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
};

export default Articles;
