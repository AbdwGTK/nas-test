import React from "react";
import Slider from "react-slick";
import settings from "./carouselSettings";
import testimonials from "./testimonialsText";

const SliderComponent = () => {
  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index} style={{ padding: "0 10px" }}>
          <div
            style={{
              background: "#1a1a1a",
              padding: "20px",
              borderRadius: "8px",
              color: "#fff",
              minHeight: "250px",
              margin: "0 10px",
            }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              style={{
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                marginRight: "10px",
              }}
            />
            <div>
              <p className="poppins-semibold text-base mt-2 text-start">
                {testimonial.name}
              </p>
            </div>
            <p className="poppins-regular text-lg mt-5 text-start">
              "{testimonial.text}"
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
