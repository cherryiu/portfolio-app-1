const Hero = () => {
  return (
    <>
      <section className="min-container freight-bold hero bg-base-200 py-10">
        <div className="hero-content text-left flex-col px-10">
          <h3
            className="tooltip relative right-48 top-2 freight-italic w-30 text-lg "
            data-tip="according to the ME-riam Webster dictionary"
          >
            a formal definition
          </h3>
          <div className="max-w-md">
            <h1 className="text-5xl pt-2">
              <span className="text-6xl">Cheri </span>
              <span className="text-3xl">(shur-ee) :</span>
            </h1>
            <p className="py-2 pl-2 text-xl">
              a current UT Dallas undergraduate student with a passion for
              <u>AI engineering</u>, <u>neuroscience</u>, and <u>design</u>.
            </p>
            <p className="text-lg freight-italic pl-2">
              "Cheri would work so well with our team!"
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
