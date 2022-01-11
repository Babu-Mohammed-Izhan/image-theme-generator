import type { NextPage } from "next";
import Head from "next/head";
import Colorschemecard from "../components/Colorschemecard";

const Home: NextPage = () => {
  const data = [
    {
      title: "Example",
      url: "Example",
      colorscheme1: "#8c5c2f",
      colorscheme2: "#467492",
      colorscheme3: "#4f301e",
      colorscheme4: "#577d93",
      colorscheme5: "#898e91",
    },
  ];
  return (
    <div>
      <Head>
        <title>Chameleon</title>
        <meta
          name="description"
          content="Chameleon is a theme generator that uses your pictures to generate themes using AI."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-y-7 mt-10 w-4/5 mx-auto">
        <Colorschemecard cardData={data[0]} />
        <Colorschemecard cardData={data[0]} />
        <Colorschemecard cardData={data[0]} />
        <Colorschemecard cardData={data[0]} />
        <Colorschemecard cardData={data[0]} />
        <Colorschemecard cardData={data[0]} />
        <Colorschemecard cardData={data[0]} />
        <Colorschemecard cardData={data[0]} />
        <Colorschemecard cardData={data[0]} />
      </div>
    </div>
  );
};

export default Home;
