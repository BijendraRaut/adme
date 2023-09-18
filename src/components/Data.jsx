import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import Loading from "./Loading";

const Card = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const getPhotos = async () => {
    const data = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=500`
    );
    const json = await data.json();
    setPhotos(json);
    setIsLoading(false);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      <Buttons />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap">
          {photos.map((image) => (
            <img
              className="w-96 mx-auto m-4"
              key={image.id}
              id={image.id}
              src={image.download_url}
              alt="thumbnail"
            />
          ))}
        </div>
      )}
      <div className="flex justify-center ">
        <button
          onClick={() => {
            setPage(page + 1);
            getPhotos();
          }}
          className="px-4 py-2 bg-black text-white rounded m-2"
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default Card;
