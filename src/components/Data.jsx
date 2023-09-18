import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import Loading from "./Loading";

const Card = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    const data = await fetch("https://picsum.photos/v2/list");
    const json = await data.json();
    setPhotos(json);
    setIsLoading(false);
  };

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
              alt="Image"
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Card;
