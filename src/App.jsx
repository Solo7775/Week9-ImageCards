// src/App.jsx
import React from "react";
import ImageCard from "./ImageCard";
import { images } from "./imagesData";

function App() {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    padding: "24px",
    justifyItems: "center",
  };

  return (
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
  );
}

export default App;
