// src/ImageCard.jsx
import React from "react";

function ImageCard({ url, title, description, author, uploadedDatetime }) {
  const containerStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "12px",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    maxWidth: "260px",
  };

  const imageStyle = {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "6px",
    marginBottom: "8px",
  };

  const textStyle = { margin: "4px 0" };
  const smallStyle = { margin: "2px 0", fontSize: "12px", color: "#555" };

  return (
    <div style={containerStyle}>
      <img src={url} alt={title} style={imageStyle} />
      <h3 style={textStyle}>{title}</h3>
      <p style={textStyle}>{description}</p>
      <p style={smallStyle}>Author: {author}</p>
      <p style={smallStyle}>Uploaded: {uploadedDatetime}</p>
    </div>
  );
}

export default ImageCard;

