import Navbar from "./navbar";
import Footer from "./footer";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title?: string;
};

export default function Layout({ children }: Props) {
  return (
    <div className="border-black border-[15px]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
