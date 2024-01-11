import Image from "next/image";
import React from "react";

interface ProjectProps {
  src: string;
  title: string;
  subtitle: string;
  demoLink: string;

}

const ProjectCard = ({ src, title, subtitle, demoLink}: ProjectProps) => {
  return (
    <>
      <div className="flex flex-row p-20 lg:p-[40px] xl:p-[64px]">
        <div className="md:place-self-center md:justify-items-center">
          <Image
            src={src}
            alt={title}
            width={720}
            height={720}
            className="border-2 border-secondary shadow-2xl shadow-secondary rounded-md  w-fill min-w-[290px]"
          />
        </div>
        <div className="p-4 pl-8 xl:pl-[40px] ">
          <h1 className="text-xl sm:text-2xl xl:text-3xl  ">{title}</h1>
          <p className="min-w-44 mt-2 freight-italic text-sm sm:text-lg xl:text-lg">
            {subtitle}
          </p>
          <a> ➺  </a>
          <a href={demoLink} className="text-sm sm:text-lg link link-secondary hover:link-accent">see the demo!</a>
          
        </div>
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <>
      <section
        className="grid-area: overlap 2xl:max-container p-10"
      >
        <h3 className="grid pb-4 freight-italic text-xl">projects</h3>
        <div className="shadow-2xl shadow-secondary max-w-[800px] justify-self-center border-2 border-secondary rounded-lg glass">
          <div className=" hide-scrollbar flex-col h-[340px] w-auto items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
            <ProjectCard
              src="/readable.png"
              title="readable"
              subtitle="readable is an app designed to simplify document parsing and SQL queries using natural language processing. "
              demoLink="https://huggingface.co/spaces/Dylan-Kaneshiro/Query_PDFs"
            ></ProjectCard>
            <ProjectCard
              src="/parkland.png"
              title="Parkland Hospital website redesign"
              subtitle="an interactive prototype redesigning our community hospital’s website for better readability and responsiveness."
              demoLink="https://www.figma.com/proto/gPS92zw2XSEPhOu5xL3ZAJ/Group-3--SU23--HCI1?page-id=0%3A1&node-id=48-95&starting-point-node-id=30%3A226&scaling=scale-down-width&mode=design&t=XwbSMXwvIp8TKbQa-1"
            ></ProjectCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
