// src/ImageCard.jsx
import React from "react";

function ImageCard({ url, title, description, author, uploadedDatetime }) {
  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 2px 8px rgba(156, 163, 175, 0.4)",
    padding: "16px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  };

  const imageStyle = {
    width: "100%",
    height: "190px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "8px",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "700",
    color: "#1f2933",
    margin: "4px 0",
  };

  const descStyle = {
    fontSize: "14px",
    color: "#4b5563",
    margin: "0 0 4px 0",
  };

  const infoStyle = {
    fontSize: "13px",
    color: "#374151",
    margin: "0",
  };

  const labelStyle = {
    fontWeight: "700",
  };

  return (
    <div style={cardStyle}>
      <img src={url} alt={title} style={imageStyle} />
      <h3 style={titleStyle}>{title}</h3>
      <p style={descStyle}>{description}</p>
      <p style={infoStyle}>
        <span style={labelStyle}>Author:</span> {author}
      </p>
      <p style={infoStyle}>
        <span style={labelStyle}>Uploaded:</span> {uploadedDatetime}
      </p>
    </div>
  );
}

export default ImageCard;

