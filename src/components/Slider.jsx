import { use } from "react";
import {useState, useEffect} from "react";


const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 2 ? 0 : prevIndex + 1
            );
        }, 3000);
        return () => clearInterval(interval);
    })


    return (
        <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay">
              <h2>{slide.text}</h2>
            </div>
          </div>
        ))}
      </div>
    );
}

const slides = [
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "New Arrivals - Get the Best Deals!",
    },
    {
      image: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Shop the Latest Trends!",
    },
    {
      image: "https://images.unsplash.com/photo-1571126817476-92bf7da319c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Exclusive Electronics Collection!",
    },
  ];

export default Slider;