import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="border-y-2 border-secondary footer p-4 bg-accent text-base-content">
        <nav className=" gap-4 md:place-self-start md:justify-items-start">
          <a className="pt-2 freight-italic">cheri chan</a>
        </nav>
        <nav className="text-xl link link-secondary hover:link-accent gap-4 md:place-self-center md:justify-items-center">
          <a>cheri8chan@gmail.com</a>
        </nav>
        <nav className= "gap-4 md:place-self-end md:justify-items-end">
          <a className="freight-italic">2024</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
