import React, { useState, useEffect } from "react";
import '../components/component.css';
import back_img from '../img/back_img.jpg'
function CenterSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger the sliding effect when the component mounts
        setIsVisible(true);
    }, []);
    return (
        <div className="background_img">
            <img src={back_img} class="img-fluid" alt="..." />
            <div className="container text">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-11 heading">
                        <div className={`slide-in ${isVisible ? 'visible' : ''}`} >
                            Building Dreams,
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-3">

                    </div>


                    <div className="col-8 heading" >
                        <div className={`slide-in ${isVisible ? 'visible' : ''}`} >
                            Designing Tomorrow,
                        </div>

                    </div>

                </div>
                <div className="row" >
                    <div className="col-5">
                    </div>

                    <div className="col-7  heading">
                        <div className={`slide-in ${isVisible ? 'visible' : ''}`} >
                            Welcome to MaterialSeller.
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default CenterSection;