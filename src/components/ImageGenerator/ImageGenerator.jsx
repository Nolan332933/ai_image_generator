import React from "react";
import "./ImageGenerator.css";
import default_image from "../Assets/default_image.svg";
// 6.9 Gzip 2.7K
const ImageGenerator = () => {
  return (
    <div className="ai-image-generator">
      Ai image <span>generator</span>
      <div className="img-loading"></div>
      <div className="image">
        <img src={default_image} alt="" />
      </div>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Type your imiginations..."
        />
      </div>
    </div>
  );
};

export default ImageGenerator;
