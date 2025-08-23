import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import './component.css';

// A sub-component for the content within each slide
const SlideContent = ({ imageUrl, title, desc }) => {
    return (
        <div className="slide-content">
            <div className="slide-image-container">
                <img src={imageUrl} alt={title} className="slide-image" />
            </div>
            <div className="slide-text">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
};

const Product_card = ({ data, activeSlide: initialActiveSlide = 0 }) => {
    const [activeSlide, setActiveSlide] = useState(initialActiveSlide);
    const [isPaused, setPaused] = useState(false);
    const autoplayInterval = 5000; // 5 seconds
    const intervalRef = useRef(null);

    const next = () => {
        setActiveSlide((prev) => (prev < data.length - 1 ? prev + 1 : 0));
    };

    const prev = () => {
        setActiveSlide((prev) => (prev > 0 ? prev - 1 : data.length - 1));
    };

    const goToSlide = (index) => {
        setActiveSlide(index);
    };

    // Set up the interval for auto-play
    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(next, autoplayInterval);
        }
        // Cleanup function to clear interval
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [activeSlide, isPaused, data.length]);

    return (
        <div
            className="carousel-wrapper"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="carousel-viewport">
                <div
                    className="carousel-track"
                    style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                    {data.map((item) => (
                        <div className="carousel-slide" key={item.id}>
                            <SlideContent {...item} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <button className="carousel-btn prev-btn" onClick={prev} aria-label="Previous Slide">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="carousel-btn next-btn" onClick={next} aria-label="Next Slide">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>

            {/* Navigation Dots */}
            <div className="carousel-dots">
                {data.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${activeSlide === index ? "active" : ""}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

// export default ModernCarousel;