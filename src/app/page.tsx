// 3rd party:
// Redux RTK:
// Store:
// Next:
import Image from 'next/image';
// React:
// Context:
// Components:
// CSS:
// Public:
import homeImg from 'public/home.jpg';
// Types, interfaces and enumns:
import { FC } from 'react';

const Home: FC = () => {
  return (
    <div>
      <div className='absolute -z-10 inset-0'>
        <Image
          src={homeImg}
          alt='car factory'
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      <h1>Home Page</h1>
    </div>
  );
};
export default Home;
