// Next:
import { Inter } from 'next/font/google';
// CSS:
import './globals.css';
// Components:
import Navbar from '@/Components/Navbar';
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
