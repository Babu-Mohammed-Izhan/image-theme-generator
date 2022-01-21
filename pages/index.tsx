import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Colorschemecard from '../components/Colorschemecard';

const Home: NextPage = () => {
  const data = [
    {
      title: 'Example',
      url: 'Example',
      colorscheme1: '#8c5c2f',
      colorscheme2: '#467492',
      colorscheme3: '#4f301e',
      colorscheme4: '#577d93',
      colorscheme5: '#898e91',
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
      <body className="font-inter">
        <div className="w-11/12 mx-auto md:pt-32 pt-24 pb-3 px-6 bg-cover bg-no-repeat bg-center relative z-10">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-center text-black mb-3 font-extrabold lg:leading-relaxed">
              Get the{' '}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text lg:px-3 ">
                color
              </span>{' '}
              from your pictures.
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mt-10 text-center text-black max-w-xs md:max-w-2xl mx-auto font-medium">
              Image color theme extraction using AI.
            </p>
          </div>
        </div>

        <div className="w-11/12 mx-auto px-6 pb-12 bg-white">
          <div className="w-11/12 mx-auto text-center grid md:grid-cols-3 grid-cols-1 gap-y-7 my-20 ">
            <Colorschemecard cardData={data[0]} />
            <Colorschemecard cardData={data[0]} />
            <Colorschemecard cardData={data[0]} />
          </div>
          <div className="container max-w-4xl mx-auto text-center pb-10">
            <Link href="/gallery">
              <a className="bg-white text-black px-4 py-3 no-underline border-[6px] border-black rounded font-bold">
                See more examples
              </a>
            </Link>
          </div>
        </div>

        <div className="w-full px-6 py-20 text-left bg-black text-white leading-normal">
          <div className="w-11/12 mx-auto flex justify-center flex-wrap md:flex-no-wrap">
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
