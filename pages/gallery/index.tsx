import Colorschemecard from "../../components/Colorschemecard";

const Gallery = () => {
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

export default Gallery;
