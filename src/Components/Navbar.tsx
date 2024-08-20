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
  return         <div>
  <Link href='/'>Home</Link>
  <Link href='/performance'>Performance</Link>
  <Link href='/reliability'>Reliability</Link>
  <Link href='/scale'>Scale</Link>
</div>;
};

export default Navbar;
