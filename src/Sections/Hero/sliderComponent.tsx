import React from "react";
import Slider from "react-slick";
import settings from "./carouselSettings";

const partners = [
  { name: "Example", image: "assets/pictures/example.png" },
  { name: "Example", image: "assets/pictures/example.png" },
  { name: "Example", image: "assets/pictures/example.png" },
  { name: "Example", image: "assets/pictures/example.png" },
];

const SliderComponent = () => {
  return (
    <Slider {...settings}>
      {partners.map((partners, index) => (
        <div key={index} style={{ padding: "0 10px" }}>
          <div className="bg-white py-1 md:py-4 rounded-lg flex flex-col items-center m-1">
            <img
              src={partners.image}
              alt={partners.name}
              style={{
                width: "50px",
                height: "50px",
              }}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
