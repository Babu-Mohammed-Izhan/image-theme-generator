import Colorschemecard from '../../components/Colorschemecard';
import { ImageType } from '../../types';
import axios from 'axios';

interface GalleryType {
  cardData: ImageType[];
}

const Gallery = ({ cardData }: GalleryType) => {
  return (
    <div>
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

export async function getServerSideProps() {
  const res = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/upload`);

  return {
    props: {
      cardData: res.data,
    },
  };
}

export default Gallery;
