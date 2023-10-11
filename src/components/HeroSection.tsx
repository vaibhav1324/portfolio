import { FC } from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const HeroSection: FC = () => {
  return (
    <section className="p-5 md:p-20 flex gap-10 flex-wrap items-center relative">
      <div className="max-w-max md:max-w-min">
        <h1 className="heading whitespace-pre leading-tight font-semibold text-center">
          Software Engineer
        </h1>
        <p className="sub-heading mt-4 text-center md:text-left">
          I channel my critical thinking skills into crafting seamless digital
          experiences that not only look good but function flawlessly.
        </p>
      </div>
      <div
        className={`bg-[#3ABFF860] absolute top-0 left-[10%] w-[5vw] h-[5vw] rounded blur-xl z-[-1]`}
      />
      <div
        className={`bg-[#db277760] absolute top-[85%] w-[10vw] h-[10vw] rounded-full blur-2xl z-[-1]`}
      />
      <div
        className={`bg-[#875FFA50] absolute top-0 left-[45%] w-[20vw] h-[20vw] rounded-full blur-2xl z-[-1]`}
      />

      <div className="flex flex-1 justify-center items-center">
        <div className="avatar">
          <div className="w-62 rounded">
            <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
              <ambientLight intensity={0.1} />
              <directionalLight color="red" position={[0, 0, 5]} />

              <OrbitControls makeDefault autoRotate autoRotateSpeed={5} />
              <mesh>
                <boxGeometry />
                <meshNormalMaterial />
              </mesh>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
