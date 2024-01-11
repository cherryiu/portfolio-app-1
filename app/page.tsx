import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <div className=" hide-scrollbar::-webkit-scrollbar">
      <Navbar />
      <Hero />
      <div className="paper-bg">
        <Projects />
      </div>
      <div className="p-6"></div>
      <Footer></Footer>
    </div>
    </>
  );
}
