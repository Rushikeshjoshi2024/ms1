
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import '../components/Card.css';

export default (props) => {
    const [activeSlide, setactiveSlide] = useState(props.activeSlide);

    const next = () => {
        const nextSlide = activeSlide < props.data.length - 1 ? activeSlide + 1 : 0;
        setactiveSlide(nextSlide);
    };

    const prev = () => {
        const prevSlide = activeSlide > 0 ? activeSlide - 1 : props.data.length - 1;
        setactiveSlide(prevSlide);
    };
    const getStyles = (index) => {
        if (activeSlide === index)
            return {
                opacity: 1,
                transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
                zIndex: 10
            };
        else if (activeSlide - 1 === index)
            return {
                opacity: 1,
                transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
                zIndex: 9
            };
        else if (activeSlide + 1 === index)
            return {
                opacity: 1,
                transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
                zIndex: 9
            };
        else if (activeSlide - 2 === index)
            return {
                opacity: 1,
                transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
                zIndex: 8
            };
        else if (activeSlide + 2 === index)
            return {
                opacity: 1,
                transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
                zIndex: 8
            };
        else if (index < activeSlide - 2)
            return {
                opacity: 0,
                transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
                zIndex: 7
            };
        else if (index > activeSlide + 2)
            return {
                opacity: 0,
                transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
                zIndex: 7
            };
    };
    useEffect(() => {
        // Auto change slide every 5000 milliseconds (5 seconds)
        const intervalId = setInterval(() => {
            next();
        }, 5000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, [activeSlide]);
    return (
        <>
            {/* carousel */}
            <div className="slideC">
                {/* <h2>hello</h2> */}
                {props.data.map((item, i) => (
                    <React.Fragment key={item.id}>
                        <div
                            className="slide"
                            style={{
                                backgroundImage: `url(${item.imageUrl})`, // Use the image URL here
                                boxShadow: `0 5px 20px ${item.bgColor}30`,
                                ...getStyles(i)
                            }}
                        >
                            <Product_card {...item} />
                        </div>
                        <div
                            className="reflection"
                            style={{
                                background: `linear-gradient(to bottom, ${item.bgColor}40, transparent)`,
                                ...getStyles(i)
                            }}
                        />
                    </React.Fragment>
                ))}
            </div>
            {/* carousel */}

            {/* <div className="btns">
                <FontAwesomeIcon
                    className="btn"
                    onClick={prev}
                    icon={faChevronLeft}
                    color="#fff"
                    size="2x"
                />
                <FontAwesomeIcon
                    className="btn"
                    onClick={next}
                    icon={faChevronRight}
                    color="#fff"
                    size="2x"
                />
            </div> */}
        </>
    );
};

const Product_card = (props) => {
    return (
        <div className="sliderContent">
            <h2 style={{ color: 'black' }}>{props.title}</h2>
            <p style={{ color: 'black', fontSize: '1.3rem' }}>{props.desc}</p>
        </div>
    );
};
