import { useEffect, useState } from "react";
import Colorschemecard from "../../components/Colorschemecard";
import { ImageType } from "../../types";
import axios from "axios";
import Head from "next/head";

interface GalleryType {
  cardData: ImageType[];
}

const Gallery = ({ cardData: initialData }: GalleryType) => {
  const [cardData, setCardData] = useState<ImageType[]>(initialData);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/upload`);
      setCardData(res.data);
    };

    fetchData();

    // Optional: Polling for updates every 10 seconds
    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Head>
        <title>Gallery</title>
        <meta
          name="description"
          content="Chameleon is a theme generator that uses your pictures to generate themes."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-11/12 mx-auto py-12 px-6">
        <h1 className="text-2xl leading-tight md:text-3xl font-extrabold font-notable">
          Gallery
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5 mt-8 w-11/12 md:w-5/6 mx-auto">
        {cardData.map((data: ImageType) => {
          return <Colorschemecard key={data.id} cardData={data} />;
        })}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/upload`);

  return {
    props: {
      cardData: res.data,
    },
  };
}

export default Gallery;
