import Image from "next/image";

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
    <div className="mx-10 flex items-center justify-center flex-col">
      <h3>{cardData.title}</h3>
      <div>
        {/* <Image src={`${cardData.url}`} alt={`${cardData.title}`} /> */}
      </div>
      <div className="grid grid-cols-5 ">
        <div
          className="p-10"
          style={{
            backgroundColor: `${cardData.colorscheme1}`,
          }}
        ></div>
        <div
          className="p-10"
          style={{
            backgroundColor: `${cardData.colorscheme2}`,
          }}
        ></div>
        <div
          className="p-10"
          style={{
            backgroundColor: `${cardData.colorscheme3}`,
          }}
        ></div>
        <div
          className="p-10"
          style={{
            backgroundColor: `${cardData.colorscheme4}`,
          }}
        ></div>
        <div
          className="p-10"
          style={{
            backgroundColor: `${cardData.colorscheme5}`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Colorschemecard;
