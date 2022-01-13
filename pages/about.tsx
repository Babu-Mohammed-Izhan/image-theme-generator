const About = () => {
  return (
    <div className="w-10/12 mx-auto flex flex-col justify-start items-center md:py-20">
      <h1 className="font-bold text-xl md:text-4xl lg:text-5xl my-12">
        Welcome to{' '}
        <span className="font-notable tracking-widest">Chameleon</span>
      </h1>
      <p className="text-center">
        Created by <strong className="px-2">Babu Mohammed Izhan</strong> using
        Next.js and Tailwind CSS.
      </p>
      <div className="w-full max-w-2xl grid grid-cols-1 lg:grid-cols-2 gap-4 my-8 lg:px-6 lg:mx-0 tracking-widest font-notable">
        <a
          href="https://github.com/Babu-Mohammed-Izhan"
          target="_blank"
          className="p-5 border-black border-4 my-4 hover:bg-black hover:text-white rounded"
          rel="noreferrer"
        >
          <h3>Github →</h3>
        </a>
        <a
          href="https://www.linkedin.com/in/babu-mohammed-izhan-3a327720b/"
          target="_blank"
          className="p-5 border-black border-4 my-4 hover:bg-black hover:text-white rounded"
          rel="noreferrer"
        >
          <h3>LinkedIn →</h3>
        </a>
        <a
          href="https://babumohammedizhan.netlify.app/"
          target="_blank"
          className="p-5 border-black border-4 my-4 hover:bg-black hover:text-white rounded"
          rel="noreferrer"
        >
          <h3>Portfolio →</h3>
        </a>
        <a
          href="https://twitter.com/babu_izhan"
          target="_blank"
          className="p-5 border-black border-4 my-4 hover:bg-black hover:text-white rounded"
          rel="noreferrer"
        >
          <h3>Twitter →</h3>
        </a>
      </div>
    </div>
  );
};

export default About;
