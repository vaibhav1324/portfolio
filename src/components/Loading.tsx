import React, { FC, useEffect, useState } from 'react';

import Lottie from 'lottie-react';
import loading from '../assets/loading.json';

import { AnimatePresence, motion } from 'framer-motion';

const Loading: FC = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'hide-scrollbars-style';
    document.head.appendChild(style);

    // CSS to hide scrollbars for all containers
    style.innerHTML = `
      ::-webkit-scrollbar { 
          display: none;
      }
      
      * {
          -ms-overflow-style: none;
          scrollbar-width: none;
      }
    `;

    const timeoutId = setTimeout(() => {
      const styleElement = document.getElementById('hide-scrollbars-style');

      if (styleElement) {
        document.head.removeChild(styleElement);
      }

      setIsReady(true);
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!isReady && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, type: 'just', ease: 'easeIn' }}
          className="fixed left-0 right-0 top-0 bottom-0 bg-[#fff] grid place-items-center">
          <div className="max-w-[400px] max-h-[400px]">
            <Lottie animationData={loading} loop autoplay />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
