import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [imgIndex, setIndexImg] = useState(null);
  const changeSlideDir = (dir) => {
    if (dir === "left") {
      if (imgIndex === 0) {
        setIndexImg(images.length - 1);
      } else {
        setIndexImg(imgIndex - 1);
      }
    } else {
      if (imgIndex === images.length - 1) {
        setIndexImg(0);
      } else {
        setIndexImg(imgIndex + 1);
      }
    }
  };
  return (
    <div className="slider">
      {imgIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlideDir("left")}>
            <img src="/arrow.png" alt="" />
          </div>
          <div className="imgContainer">
            <img
              src={images[imgIndex]}
              alt=""
              onClick={() => setIndexImg(null)}
            />
          </div>
          <div className="arrow">
            <img
              src="/arrow.png"
              alt=""
              className="right"
              onClick={() => changeSlideDir("right")}
            />
          </div>

          <div className="close" onClick={() => setIndexImg(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="" onClick={() => setIndexImg(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => {
          return (
            <img
              src={image}
              alt=""
              key={index}
              onClick={() => setIndexImg(index + 1)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
