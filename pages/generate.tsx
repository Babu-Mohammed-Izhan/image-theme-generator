import { useState, useEffect } from "react";
import axios from "axios";
import fs from "fs";

const Generate = () => {
  const [file, setFile] = useState<File>();
  const [title, setTitle] = useState<string>();
  console.log(file);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(file);
    const cloudName = "dm8ogh4lv";
    const upload_preset = "w9skdyeo";

    const formData = new FormData();
    formData.append("file", file ? file : "");
    formData.append("upload_preset", "w9skdyeo");

    fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: "POST",
      body: formData,
    }).then((res) => {
      axios
        .post("http://localhost:3001/api/upload", {
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="image"
          id="image"
          onChange={(e) => (e.target.files ? setFile(e.target.files[0]) : null)}
        />
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Generate;
