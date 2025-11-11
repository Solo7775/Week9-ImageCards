// src/App.jsx
import React from "react";
import ImageCard from "./ImageCard";
import { images } from "./imagesData";

function App() {
  const pageStyle = {
    minHeight: "100vh",
    margin: 0,
    padding: "30px 40px",
    backgroundColor: "#f4f7fb",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "30px",
    color: "#374151",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Image Gallery</h1>
      <div style={gridStyle}>
        {images.map((img) => (
          <ImageCard
            key={img.id}
            url={img.url}
            title={img.title}
            description={img.description}
            author={img.author}
            uploadedDatetime={img.uploadedDatetime}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

