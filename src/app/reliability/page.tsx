// 3rd party:
// Redux RTK:
// Store:
// React:
// Context:
// Components:
import Hero from '@/Components/Hero';
// CSS:
// Public:
import reliabilityImg from 'public/reliability.jpg';
// Types, interfaces and enumns:
import { FC } from 'react';
interface ReliabilityPageProps {}

const ReliabilityPage: FC<ReliabilityPageProps> = () => {
  // JSX:
  return (
    <Hero
      title='High reliability hosting'
      imgAlt='human welder'
      imgData={reliabilityImg}
    />
  );
};

export default ReliabilityPage;
