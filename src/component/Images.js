import React, { useEffect, useState } from "react";
import first from "../assets/1.jpeg";
import second from "../assets/2.jpeg";
import third from "../assets/3.jpeg";

function Images() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([first, second, third]);
  }, []);

  const getCoor = event => {
    const data = event.target.getBoundingClientRect();
    const left = data.left;
    const right = data.right;
    const top = data.top;
    const bottom = data.bottom;

    console.log(
      `Coordinates:(${left}, ${top}), (${right}, ${top}), (${left}, ${bottom}), (${right}, ${bottom})`
    );
  };

  return (
    <>
      {images.map((image, index) => {
        return (
          <img
            src={image}
            key={index}
            style={{
              margin: 20,
              borderWidth: 4,
              borderColor: "lightgreen",
              borderStyle: "solid",
              position: "relative",
            }}
            onClick={getCoor}
          ></img>
        );
      })}
    </>
  );
}

export default Images;
