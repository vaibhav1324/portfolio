import { FC, useEffect } from 'react';

const SKILLS = [
  'React-JS',
  'React-Native',
  'Next-JS',
  'JavaScript',
  'TypeScript',
  'Firebase',
  'Mobile Deep-Linking',
  'Node',
  'Framer-Motion',
];

const SkillSetCarousel: FC = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute('data-animated', 'true');

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector('.scroller__inner');

        if (!scrollerInner) {
          return;
        }

        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem: any = item.cloneNode(true);
          duplicatedItem?.setAttribute?.('aria-hidden', true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="px-2 md:px-20 flex flex-1 items-center justify-center">
      <div className="scroller">
        <ul className="tag-list scroller__inner">
          {SKILLS.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillSetCarousel;
