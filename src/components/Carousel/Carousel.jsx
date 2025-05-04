import { carousel } from "../../data/data";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import "./carousel.css";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carousel.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carousel.length) % carousel.length);
  };

  return (
    <section className="carousel_container">
      <div className="carousel_slides">
        {carousel.map((item, index) => (
          <div
            key={index}
            className={`carousel_content fade ${
              index === currentIndex ? "active" : "hidden"
            }`}
          >
            <img src={item.img} alt={item.titulo} />
            <div className="carousel_text">
              <h2>{item.titulo}</h2>
              <p>{item.texto}</p>
            </div>
          </div>
        ))}

        <div className="carousel_indicators">
          {carousel.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="arrows">
        <button
          className="left arrow"
          aria-label="Slide anterior"
          onClick={prevSlide}
        >
          <FaArrowLeft />
        </button>
        <button
          className="right arrow"
          aria-label="Próximo slide"
          onClick={nextSlide}
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}

export default Carousel;
