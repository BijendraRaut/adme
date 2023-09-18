import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import Loading from "./Loading";
import download from "../assets/download.png";

const Data = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const getPhotos = async () => {
    const data = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=500`
    );
    const json = await data.json();
    setPhotos((prevPhotos) => [...prevPhotos, ...json]);
    setIsLoading(false);
  };

  useEffect(() => {
    getPhotos();
  }, [page]);

  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "image.jpg";
    link.click();
  };

  return (
    <>
      <Buttons />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex justify-center flex-wrap">
          {photos.map((image) => (
            <div
              key={image.id}
              className="m-2 mb-0 relative"
              onMouseEnter={() => {
                document.getElementById(image.id).style.opacity = "1";
              }}
              onMouseLeave={() => {
                document.getElementById(image.id).style.opacity = "0";
              }}
            >
              <img
                src={image.download_url}
                width={Math.floor(Math.random() * 200) + 200}
                alt="thumbnail"
              />
              <div id={image.id} className="overlay" style={{ opacity: 0 }}>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 m-1">{image.author}</span>
                  <button
                    onClick={() => handleDownload(image.download_url)}
                    className="px-4 py-2 text-white rounded"
                  >
                    <img className="w-6" src={download} alt="download" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center ">
        {isLoading ? (
          <button
            className="px-4 py-2 bg-black text-white rounded m-2"
            disabled
          >
            Loading...
          </button>
        ) : (
          <button
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 bg-black text-white rounded m-2"
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default Data;
