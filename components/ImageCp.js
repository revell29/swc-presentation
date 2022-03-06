import React from "react";

const ImageCp = ({ image }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        background: "#fff",
      }}
    >
      <img
        src={image}
        alt="placeholder"
        style={{
          height: "150px",
        }}
      />
    </div>
  );
};

export default ImageCp;
