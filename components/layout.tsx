import Navbar from './Navbar';
import Footer from './Footer';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title?: string;
};

export default function Layout({ children }: Props) {
  return (
    <main className="border-8 border-black">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </main>
  );
}
