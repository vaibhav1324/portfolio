import { FC, useState } from 'react';

import val from '../assets/val.jpeg';
import gaston from '../assets/gaston.jpeg';

import { AnimatePresence, motion } from 'framer-motion';
import { OpenQuoteSvg, CloseQuoteSvg } from 'components';

const itemAnimationConfig = {
  initial: { opacity: 0, x: 200 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -200 },
  transition: { duration: 0.5, type: 'tween', ease: 'easeInOut' },
};

const ITEMS = [
  {
    name: 'Gastón Marcó',
    img: gaston,
    title: 'Operation/Project Manager',
    message:
      "Having had the privilege of working closely with Vaibhav for two years, I wholeheartedly recommend him as an exceptional developer. Vaibhav's technical prowess, combined with his proactivity, sets him apart in his field. He has an impressive ability to absorb new knowledge, is an excellent collaborator, and consistently brings creativity and innovation to every project. With his help, our team successfully delivered multiple MVPs, and his proactive approach not only streamlined processes but also significantly contributed to productivity. If you're seeking a dedicated, intelligent, and creative developer who consistently exceeds expectations, Vaibhav is the ideal candidate for your team.",
    color: '#875FFA',
    url: 'https://www.linkedin.com/in/gast%C3%B3n-marc%C3%B3-127b93129/',
  },
  {
    name: 'Derys Valentina Sevilla',
    img: val,
    title:
      'Lead Designer | User Experience, User Interface | Illustrator & Prompt Designer',
    message:
      "Working closely with Vaibhav has been an exceptional experience. Vaibhav's outstanding skills in Front-End development not only afford me creative freedom as a UX/UI designer but also ensure the delivery of top-notch quality work. Beyond the professional realm, Vaibhav is a beautiful person to collaborate with, making our projects enjoyable and our teamwork highly effective. His proactive approach to improving processes and unwavering dedication to enhancing our projects make him an invaluable asset to any team.",
    color: '#db2777',
    url: 'https://www.linkedin.com/in/valseville/',
  },
];

const Recommendations: FC = () => {
  const [index, setIndex] = useState<0 | 1>(0);

  const currentItem = ITEMS[index];

  return (
    <>
      <h2 className="heading-2 absolute top-[5vh] md:top-[10vh]">
        Recommendations
      </h2>

      <div
        className={`bg-[#3ABFF860] absolute top-[-15%] left-[-3%] w-[25vw] h-[25vw] rounded-full blur-2xl z-[-1]`}
      />
      <div
        className={`bg-[#db277760] absolute bottom-[0%] left-[15%] w-[20vw] h-[20vw] rounded-full blur-3xl z-[-1]`}
      />
      <div
        className={`bg-[#875FFA70] absolute top-[5%] right-[-5%] w-[15vw] h-[15vw] rounded-full blur-3xl z-[-1]`}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentItem.name}
          {...itemAnimationConfig}
          className={`card w-full min-h-[350px] max-w-[1000px] rounded-xl shadow-lg`}
          style={{ backgroundColor: currentItem.color }}>
          <div className="card-body flex flex-row gap-10 flex-wrap">
            <div className="flex flex-1 items-center justify-center relative">
              <div className="avatar">
                <div className="w-40 md:w-22 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                  <img src={currentItem.img} alt={currentItem.name} />
                </div>
              </div>
              <a
                href={currentItem.url}
                target="_blank"
                className="btn btn-circle btn-outline absolute bottom-5"
                rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#fff"
                  viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
            <div className="flex flex-[2.5] w-fit flex-col items-start min-w-[200px]">
              <OpenQuoteSvg color="#fff" />
              <div className="flex flex-1 flex-col text-white gap-[10px]">
                <p className="text-sm md:text-lg font-medium">
                  {currentItem.name} -{' '}
                  <span className="font-thin">{currentItem.title}</span>
                </p>
                <p className="italic">{currentItem.message}</p>
              </div>
              <div className="mt-5 w-full flex justify-end">
                <CloseQuoteSvg color="#fff" />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-5 absolute bottom-[5vh] md:bottom-[10vh]">
        <div
          onClick={() => {
            setIndex(0);
          }}
          className={`h-8 w-8 grid place-items-center bg-white rounded-full cursor-pointer outline outline-4 outline-black ${
            index === 0 ? 'opacity-100' : 'opacity-50'
          }`}>
          1
        </div>
        <div
          onClick={() => {
            setIndex(1);
          }}
          className={`h-8 w-8 grid place-items-center bg-white rounded-full cursor-pointer outline outline-4 outline-black ${
            index === 1 ? 'opacity-100' : 'opacity-50'
          }`}>
          2
        </div>
      </div>
    </>
  );
};

export default Recommendations;
