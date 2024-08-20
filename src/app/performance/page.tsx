// 3rd party:
// Redux RTK:
// Store:
// React:
// Context:
// Components:
import Hero from '@/Components/Hero';
// CSS:
// Public:
import performanceImg from 'public/performance.jpg';
// Types, interfaces and enumns:
import { FC } from 'react';
interface PerformancePageProps {}

const PerformancePage: FC<PerformancePageProps> = () => {
  // JSX:
  return (
    <div>
      <Hero
        title='We serve high performance applications'
        imgAlt='welding robot'
        imgData={performanceImg}
      />
    </div>
  );
};

export default PerformancePage;
