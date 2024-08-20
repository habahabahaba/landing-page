// 3rd party:
// Redux RTK:
// Store:
// Next:
// React:
// Context:
// Components:
import Hero from '@/Components/Hero';
// CSS:
// Public:
import homeImg from 'public/home.jpg';
// Types, interfaces and enumns:
import { FC } from 'react';

const Home: FC = () => {
  return (
    <Hero
      title='Professional Cloud Hosting'
      imgAlt='car factory'
      imgData={homeImg}
    />
  );
};
export default Home;
