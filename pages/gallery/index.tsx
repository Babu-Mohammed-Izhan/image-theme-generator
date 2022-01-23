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
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-7 mt-8 w-4/5 mx-auto">
        {cardData.map((data: ImageType) => {
          return <Colorschemecard key={data.id} cardData={data} />;
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios('http://localhost:3001/api/upload');
  console.log(res.data);

  return {
    props: {
      cardData: res.data,
    },
  };
}

export default Gallery;
