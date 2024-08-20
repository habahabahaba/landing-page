// 3rd party:
// Redux RTK:
// Store:
// Next:
import Image from 'next/image';
// React:
// Context:
// Components:
// CSS:
// Types, interfaces and enumns:
import { StaticImageData } from 'next/image';
import { FC } from 'react';
interface HeroProps {
  title: string;
  imgAlt: string;
  imgData: StaticImageData;
}

const Hero: FC<HeroProps> = ({ title, imgAlt, imgData }) => {
  // JSX:
  return (
    <div className='relative h-screen'>
      <div className='absolute -z-10 inset-0'>
        <Image src={imgData} alt={imgAlt} fill style={{ objectFit: 'cover' }} />
        <div className='absolute inset-0 bg-gradient-to-r from-slate-900' />
      </div>
      <div className='pt-48 flex justify-center items-center'>
        <h1 className='text-white text-6xl drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]'>
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
