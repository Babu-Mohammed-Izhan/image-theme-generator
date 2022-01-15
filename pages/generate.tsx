import { useState, useEffect } from 'react';
import axios from 'axios';
import fs from 'fs';

const Generate = () => {
  const [file, setFile] = useState<File>();
  const [title, setTitle] = useState<string>();
  console.log(file);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(file);
    const cloudName = 'dm8ogh4lv';
    const upload_preset = 'w9skdyeo';

    const formData = new FormData();
    formData.append('file', file ? file : '');
    formData.append('upload_preset', 'w9skdyeo');

    fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: formData,
    }).then((res) => {
      axios
        .post('http://localhost:3001/api/upload', {
          body: {
            title: title,
            url: res.url,
          },
        })
        .then((res) => {
          console.log(res);
        });
    });
  };

  return (
    <section>
      <div className="w-5/6 mx-auto py-10">
        <div className="pb-28">
          <h3 className="font-notable text-2xl md:text-3xl lg:text-4xl">
            Generate
          </h3>
        </div>
        <div className="w-full mx-auto pb-32 mt-10 shadow-2xl rounded border-4 border-black">
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-between flex-col h-36 mt-20 w-11/12 mx-auto"
          >
            <input
              type="text"
              name="title"
              id="title"
              className="border-4 border-black rounded px-2 py-1"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="file"
              name="image"
              id="image"
              className="flex items-center justify-between flex-col"
              onChange={(e) =>
                e.target.files ? setFile(e.target.files[0]) : null
              }
            />
            <button
              type="submit"
              className="border-4 border-black rounded px-6 py-1"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Generate;
