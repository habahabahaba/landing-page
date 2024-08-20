// 3rd party:
// Redux RTK:
// Store:
// React:
// Context:
// Components:
import Hero from '@/Components/Hero';
// CSS:
// Public:
import scaleImg from 'public/scale.jpg';
// Types, interfaces and enumns:
import { FC } from 'react';
interface ScalePageProps {}

const ScalePage: FC<ScalePageProps> = () => {
  // JSX:
  return (
    <div>
      <Hero
        title='Infinite scaling options'
        imgAlt='steel factory'
        imgData={scaleImg}
      />
    </div>
  );
};

export default ScalePage;
