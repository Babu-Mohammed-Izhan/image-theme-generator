import { useEffect, useState } from 'react';
import { ImageType } from '../types';
import Image from 'next/image';

interface CardType {
  cardData: ImageType;
}

const Colorschemecard = ({ cardData }: CardType) => {
  const [clipboard, setClipboard] = useState('');

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex justify-between flex-col border-4 border-black rounded h-96 shadow px-2 w-80">
        <h3 className="text-xl font-notable text-center my-2">
          {cardData.title}
        </h3>
        <Image
          src={`${cardData.imgurl}`}
          alt={`${cardData.title}`}
          width="500px"
          height="500px"
          className="aspect-square overflow-hidden object-cover"
        />
        <div className="grid grid-cols-5 h-12 w-full my-2">
          <div
            className="w-full hover:cursor-pointer group cursor-pointer relative inline-block text-center"
            style={{
              backgroundColor: `${cardData.colorScheme1}`,
            }}
            onClick={() => {
              navigator.clipboard.writeText(cardData.colorScheme1);
              setClipboard(cardData.colorScheme1);
            }}
          >
            <div className="opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 mr-10 px-3 pointer-events-none mb-2">
              {clipboard === cardData.colorScheme1
                ? 'Copied!'
                : cardData.colorScheme1}
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
              backgroundColor: `${cardData.colorScheme2}`,
            }}
            onClick={() => {
              navigator.clipboard.writeText(cardData.colorScheme2);
              setClipboard(cardData.colorScheme2);
            }}
          >
            <div className="opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 mr-10 px-3 pointer-events-none mb-2">
              {clipboard === cardData.colorScheme2
                ? 'Copied!'
                : cardData.colorScheme2}
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
              backgroundColor: `${cardData.colorScheme3}`,
            }}
            onClick={() => {
              navigator.clipboard.writeText(cardData.colorScheme3);
              setClipboard(cardData.colorScheme3);
            }}
          >
            <div className="opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 mr-10 px-3 pointer-events-none mb-2">
              {clipboard === cardData.colorScheme3
                ? 'Copied!'
                : cardData.colorScheme3}
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
              backgroundColor: `${cardData.colorScheme4}`,
            }}
            onClick={() => {
              navigator.clipboard.writeText(cardData.colorScheme4);
              setClipboard(cardData.colorScheme4);
            }}
          >
            <div className="opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 mr-10 px-3 pointer-events-none mb-2">
              {clipboard === cardData.colorScheme4
                ? 'Copied!'
                : cardData.colorScheme4}
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
              backgroundColor: `${cardData.colorScheme5}`,
            }}
            onClick={() => {
              navigator.clipboard.writeText(cardData.colorScheme5);
              setClipboard(cardData.colorScheme5);
            }}
          >
            <div className="opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 mr-10 px-3 pointer-events-none mb-2">
              {clipboard === cardData.colorScheme5
                ? 'Copied!'
                : cardData.colorScheme5}
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
    </div>
  );
};

export default Colorschemecard;
