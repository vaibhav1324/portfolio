import { FC } from 'react';

import { motion } from 'framer-motion';

import Lottie from 'lottie-react';

const animationConfig = {
  initial: { opacity: 0, x: -300 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1, type: 'spring' },
  viewport: { once: true },
};

const geTextAnimationConfig = (delay: number) => ({
  initial: { y: -10, opacity: 0 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay, duration: 1, type: 'spring' },
  viewport: { once: true },
});

const AboutMe: FC = () => {
  return (
    <motion.div
      {...animationConfig}
      className="flex flex-col items-center gap-4 card shadow-xl bg-base-100 max-w-5xl w-full">
      <div className="max-w-sm">
        <Lottie
          animationData={require('../assets/animation_lnmldmjv.json')}
          loop
          autoplay
        />
      </div>
      <motion.h2 {...geTextAnimationConfig(0.5)} className="heading-2">
        Hi, i'm Vaibhav
      </motion.h2>
      <motion.p
        {...geTextAnimationConfig(1)}
        className="text-justify mx-12 mb-12 whitespace-pre-line">
        I'm a 25-year-old front-end software engineer based in the beautiful
        Goa, India. With a bachelor's degree in Information Technology from Goa
        Engineering College under my belt, I've spent the last 3 years coding my
        way through various projects for a company based in Minnesota, USA.
        {'\n'}
        {'\n'}As an explorer in the vast universe of tech, I love diving into
        new technologies and always aim to follow best coding practices. But
        wait, there's more! Beyond the world of curly braces and semicolons, I'm
        a classical musician who can play the Tabla, with a degree in Music to
        vouch for my skills. 🎵 {'\n'}
        {'\n'}When I'm not architecting interfaces or creating harmony through
        my music, you'll find me at the gym lifting weights or expressing my
        creativity through poetry. 🏋️‍♂️📝 {'\n'}
        {'\n'}Welcome to my Portfolio - a digital gallery of my tech
        explorations. Feel free to explore, leave feedback, or get in touch! 💬{' '}
        {'\n'}
        {'\n'}And oh, did I mention? I'm a space enthusiast, completely
        fascinated by the vast expanse of the universe. From black holes to
        quantum physics, I'm your go-to guy for intriguing space facts and
        discussions. 🌌{'\n'}
        {'\n'}
        <span className="bg-slate-600 text-white p-3 block rounded-lg font-semibold">
          In the fascinating world of quantum physics, I'm entangled with my
          love for coding. Heisenberg may be uncertain, but my passion for
          science and technology is absolute! ◎
        </span>
        {'\n'}
        So, here I am, a Coder, a Musician, a Poet, a Fitness enthusiast, and a
        Space nerd all rolled into one. Nice to meet you!😄
      </motion.p>
    </motion.div>
  );
};

export default AboutMe;
