import { useEffect, useState } from 'react';
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
  const [clipboard, setClipboard] = useState('');

  return (
    <div className="mx-2 flex items-center justify-between flex-col border-[6px] border-black rounded max-w-xl h-60 shadow">
      <h3 className="font-notable">{cardData.title}</h3>
      <div>
        {/* <Image src={`${cardData.url}`} alt={`${cardData.title}`} /> */}
      </div>
      <div className="grid grid-cols-5 h-12 w-full">
        <div
          className="w-full hover:cursor-pointer group cursor-pointer relative inline-block text-center"
          style={{
            backgroundColor: `${cardData.colorscheme1}`,
          }}
          onClick={() => {
            navigator.clipboard.writeText(cardData.colorscheme1);
            setClipboard(cardData.colorscheme1);
          }}
        >
          <div className="opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 ml-9 px-3 pointer-events-none mb-2">
            {clipboard === cardData.colorscheme1
              ? 'Copied!'
              : cardData.colorscheme1}
            <svg
              className="absolute text-black h-2 w-full left-0 top-full"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
              xmlSpace="preserve"
            >
              <polygon
                className="fill-current"
                points="0,0 127.5,127.5 255,0"
              />
            </svg>
          </div>
        </div>
        <div
          className="w-full hover:cursor-pointer group cursor-pointer relative inline-block text-center"
          style={{
            backgroundColor: `${cardData.colorscheme2}`,
          }}
          onClick={() => {
            navigator.clipboard.writeText(cardData.colorscheme2);
            setClipboard(cardData.colorscheme2);
          }}
        >
          <div className="opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 ml-9 px-3 pointer-events-none mb-2">
            {clipboard === cardData.colorscheme2
              ? 'Copied!'
              : cardData.colorscheme2}
            <svg
              className="absolute text-black h-2 w-full left-0 top-full"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
              xmlSpace="preserve"
            >
              <polygon
                className="fill-current"
                points="0,0 127.5,127.5 255,0"
              />
            </svg>
          </div>
        </div>
        <div
          className="w-full hover:cursor-pointer group cursor-pointer relative inline-block text-center"
          style={{
            backgroundColor: `${cardData.colorscheme3}`,
          }}
          onClick={() => {
            navigator.clipboard.writeText(cardData.colorscheme3);
            setClipboard(cardData.colorscheme3);
          }}
        >
          <div className="opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 ml-9 px-3 pointer-events-none mb-2">
            {clipboard === cardData.colorscheme3
              ? 'Copied!'
              : cardData.colorscheme3}
            <svg
              className="absolute text-black h-2 w-full left-0 top-full"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
              xmlSpace="preserve"
            >
              <polygon
                className="fill-current"
                points="0,0 127.5,127.5 255,0"
              />
            </svg>
          </div>
        </div>
        <div
          className="w-full  hover:cursor-pointer group cursor-pointer relative inline-block text-center"
          style={{
            backgroundColor: `${cardData.colorscheme4}`,
          }}
          onClick={() => {
            navigator.clipboard.writeText(cardData.colorscheme4);
            setClipboard(cardData.colorscheme4);
          }}
        >
          <div className="opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 ml-9 px-3 pointer-events-none mb-2">
            {clipboard === cardData.colorscheme4
              ? 'Copied!'
              : cardData.colorscheme4}
            <svg
              className="absolute text-black h-2 w-full left-0 top-full"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
              xmlSpace="preserve"
            >
              <polygon
                className="fill-current"
                points="0,0 127.5,127.5 255,0"
              />
            </svg>
          </div>
        </div>
        <div
          className="w-full  hover:cursor-pointer group cursor-pointer relative inline-block text-center"
          style={{
            backgroundColor: `${cardData.colorscheme5}`,
          }}
          onClick={() => {
            navigator.clipboard.writeText(cardData.colorscheme5);
            setClipboard(cardData.colorscheme5);
          }}
        >
          <div className="opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 ml-9 px-3 pointer-events-none mb-2">
            {clipboard === cardData.colorscheme5
              ? 'Copied!'
              : cardData.colorscheme5}
            <svg
              className="absolute text-black h-2 w-full left-0 top-full"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
              xmlSpace="preserve"
            >
              <polygon
                className="fill-current"
                points="0,0 127.5,127.5 255,0"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colorschemecard;
