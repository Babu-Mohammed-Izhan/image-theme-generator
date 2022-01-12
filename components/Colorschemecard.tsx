import Image from 'next/image';

interface CardType {
  cardData: {
    title: string;
    url: string;
    colorscheme1: string;
    colorscheme2: string;
    colorscheme3: string;
    colorscheme4: string;
    colorscheme5: string;
  };
}

const Colorschemecard = ({ cardData }: CardType) => {
  return (
    <div className="mx-2 flex items-center justify-between flex-col border-8 border-black max-w-xl h-60">
      <h3>{cardData.title}</h3>
      <div>
        {/* <Image src={`${cardData.url}`} alt={`${cardData.title}`} /> */}
      </div>
      <div className="grid grid-cols-5 h-10 w-full">
        <div
          className="w-full hover:cursor-pointer"
          style={{
            backgroundColor: `${cardData.colorscheme1}`,
          }}
          onClick={() => navigator.clipboard.writeText(cardData.colorscheme1)}
        ></div>
        <div
          className="w-full  hover:cursor-pointer"
          style={{
            backgroundColor: `${cardData.colorscheme2}`,
          }}
          onClick={() => navigator.clipboard.writeText(cardData.colorscheme2)}
        ></div>
        <div
          className="w-full  hover:cursor-pointer"
          style={{
            backgroundColor: `${cardData.colorscheme3}`,
          }}
          onClick={() => navigator.clipboard.writeText(cardData.colorscheme3)}
        ></div>
        <div
          className="w-full  hover:cursor-pointer"
          style={{
            backgroundColor: `${cardData.colorscheme4}`,
          }}
          onClick={() => navigator.clipboard.writeText(cardData.colorscheme4)}
        ></div>
        <div
          className="w-full  hover:cursor-pointer"
          style={{
            backgroundColor: `${cardData.colorscheme5}`,
          }}
          onClick={() => navigator.clipboard.writeText(cardData.colorscheme5)}
        >
          {}
        </div>
      </div>
    </div>
  );
};

export default Colorschemecard;
