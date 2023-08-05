import React from "react";
import PhotoCarousel from "../Component/PhotoCarousel/PhotoCarousel";
import AvailableGameContainer from "../Container/AvailableGameContainer/AvailableGameContainer";
import UpdateGameContainer from "../Container/UpdateGameContainer/UpdateGameContainer";

export default function Home() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "70% 1fr",
        gridTemplateRows: "max-content 1fr",
        gap: "20px",
        minWidth: "850px",
        paddingRight: "10px",
      }}
    >
      <PhotoCarousel />
      <UpdateGameContainer />
      <AvailableGameContainer />
    </div>
  );
}
