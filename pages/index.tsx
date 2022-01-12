import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
      <body data-new-gr-c-s-check-loaded="14.1043.0" data-gr-ext-installed="">
        <div className="w-full md:py-40 py-16 px-6 bg-cover bg-no-repeat bg-center relative z-10">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-3xl leading-tight md:text-6xl text-center text-black mb-3">
              Get the color from your pictures.
            </h1>
            <p className="text-lg md:text-4xl my-10 text-center text-black max-w-sm md:max-w-2xl mx-auto">
              Image color theme extraction using AI.
            </p>
          </div>
        </div>

        <div className="w-full px-6 py-12 bg-white">
          <div className="container max-w-4xl mx-auto text-center pb-10">
            <h3 className="text-xl md:text-4xl leading-tight text-center max-w-sm md:max-w-xl mx-auto text-gray-900 mb-12">
              Examples of color extractions from user uploaded Images.
            </h3>
            <Link href="/gallery">
              <a className="bg-black text-white px-4 py-3 no-underline">
                See more examples
              </a>
            </Link>
          </div>

          <div className="w-4/5 mx-auto text-center grid md:grid-cols-3 grid-cols-1 gap-y-7 my-10">
            <Colorschemecard cardData={data[0]} />
            <Colorschemecard cardData={data[0]} />
            <Colorschemecard cardData={data[0]} />
          </div>
        </div>

        <div className="w-full px-6 py-20 text-left bg-black text-white leading-normal">
          <div className="container max-w-4xl mx-auto flex justify-center flex-wrap md:flex-no-wrap">
            <div className="w-full md:w-1-3">
              <h3 className="text-3xl mb-8 text-white leading-tight">
                The AI powered color scheme producer.
              </h3>

              <p className="mb-5">
                Chameleon is a website where users can upload any image and get
                a color scheme matching the image. It uses AI to get the most
                common colors from the image and finds the best suitable color
                scheme from the available colors.
              </p>
              <p>
                The theme color are generated and placed below the image. They
                can be clicked to be copied to the clipboard.
              </p>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Home;
