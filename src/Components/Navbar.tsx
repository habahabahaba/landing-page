// 3rd party:
// Redux RTK:
// Store:
// React:
// Next:
import Link from 'next/link';
// Context:
// Components:
// CSS:
// Types, interfaces and enumns:
import { FC } from 'react';
interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  // JSX:
  return (
    <div className='w-full absolute text-white z-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
      <nav className='container relative flex flex-wrap items-center justify-between mx-auto p-8'>
        <Link href='/' className='text-bold text-3xl'>
          Home
        </Link>
        <div className='space-x-4 text-xl '>
          <Link href='/performance'>Performance</Link>
          <Link href='/reliability'>Reliability</Link>
          <Link href='/scale'>Scale</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
