import { ReactNode } from "react";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="mt-16 pt-4 bg-slate-100 w-screen">{children}</main>
      <footer>Footer content here</footer>
    </>
  );
};

export default Layout;
