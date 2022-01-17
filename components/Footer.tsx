import Link from 'next/link';
const Footer = () => {
  const arr = [
    {
      title: 'SOCIALS',
      links: [
        { name: 'Twitter', link: '#' },
        { name: 'GitHub', link: '#' },
        { name: 'LinkedIn', link: '#' },
        { name: 'Instagram', link: '#' },
      ],
    },
  ];

  return (
    <footer className="text-gray-600 body-font">
      <div
        className="
      container
      py-24
      mx-auto
      flex
      md:items-center
      lg:items-start
      md:flex-row 
      md:flex-nowrap
      flex-wrap 
      flex-col
      md:justify-between
    "
      >
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left px-10">
          <Link href="/" passHref>
            <span
              className=" text-black
              text-xl
              dark:text-white
              md:text-2xl
              font-extrabold
                 cursor-pointer
                 font-notable
                 tracking-[5px]
                 "
            >
              Chameleon
            </span>
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Get the color from your pictures.
          </p>
        </div>
        <div
          className="
        flex
        items-center
        justify-center
        md:pl-20
        -mb-10
        md:mt-0
        mt-10
        md:text-left
        text-center
      "
        >
          {arr.map((a) => {
            return (
              <div key={a.title} className=" w-full px-4">
                <h2
                  className="
            font-medium
            text-gray-900
            tracking-widest
            text-sm
            mb-3
            md:text-right
          "
                >
                  {a.title}
                </h2>
                <nav className="list-none mb-10 md:flex ">
                  {a &&
                    a.links.map((l) => {
                      return (
                        <Link href={l.link} key={l.name} passHref>
                          <li>
                            <a className="text-gray-600 hover:text-gray-800 cursor-pointer md:pl-7">
                              {l.name}
                            </a>
                          </li>
                        </Link>
                      );
                    })}
                </nav>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-gray-100">
        <div
          className="
          w-full
        mx-auto
        px-5
        py-4
        flex
        justify-center
        md:justify-start
        items-center
      "
        >
          <p className="text-gray-500 text-sm text-center sm:text-left">
            Made By
            <a
              href="https://babumohammedizhan.netlify.app/"
              className="text-black ml-1 font-bold"
              target="_blank"
              rel="noreferrer"
            >
              Babu Mohammed Izhan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
