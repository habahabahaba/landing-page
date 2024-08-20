// Next:
import { Inter } from 'next/font/google';
import Link from 'next/link';
// CSS:
import './globals.css';
// Types, interfaces and enumns:
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Garden variety corporate Landing Page.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div>
          <Link href='/'>Home</Link>
          <Link href='/performance'>Performance</Link>
          <Link href='/reliability'>Reliability</Link>
          <Link href='/scale'>Scale</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
