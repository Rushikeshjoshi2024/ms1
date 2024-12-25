import React from "react";
function Card_section() {
    return (
        <div>
            <section class="banners mb-25">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="banner-img wow animate__animated animate__fadeInUp" data-wow-delay="0">
                                <img src="assets/imgs/banner/banner-1.jpg" alt="" />
                                <div class="banner-text">
                                    <h4>
                                        {/* Everyday Fresh & <br />Clean with Our<br />
                                        Products */}
                                        Strength in Cement,<br /> Your Construction Companion
                                    </h4>
                                    <a class='btn btn-xs' href='/Category_material/cement'>Shop Now <i
                                        class="fi-rs-arrow-small-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="banner-img wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                                <img src="assets/imgs/banner/banner-2.jpg" alt="" />
                                <div class="banner-text">
                                    <h4>
                                        Step into Style<br />
                                        Your Path to Perfect Flooring
                                    </h4>
                                    <a class='btn btn-xs' href='/'>Shop Now <i
                                        class="fi-rs-arrow-small-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 d-md-none d-lg-flex">
                            <div class="banner-img mb-sm-0 wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                                <img src="assets/imgs/banner/banner-3.jpg" alt="" />
                                <div class="banner-text">
                                    <h4>Steel Strength,  <br />Your Building's<br /> Backbone</h4>
                                    <a class='btn btn-xs' href='/'>Shop Now <i
                                        class="fi-rs-arrow-small-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <div className="container">

                    <section className="home-slider style-2 position-relative mb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-12">
                                    <div className="home-slide-cover">
                                        <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                                            {/* <div className="single-hero-slider single-animation-wrap" style="background-image: url(assets/imgs/slider/slider-3.png)"> */}
                                            <div className="single-hero-slider single-animation-wrap" style={{ backgroundImage: "url('assets/imgs/slider/slider-3.jpg')" }}>
                                                <div className="slider-content">
                                                    <h1 className="display-2 mb-20">
                                                        Building a house,<br />where dreams <br />lay their <br />cornerstone
                                                    </h1>
                                                    <p className="mb-25">Save up to 50% off on your first order</p>
                                                    <a className='btn btn-xs' href='/'>Shop Now <i className="fi-rs-arrow-small-right"></i></a>
                                                </div>
                                            </div>
                                            {/* <div className="single-hero-slider single-animation-wrap" style="background-image: url(assets/imgs/slider/slider-4.png)"> */}
                                            {/* <div className="single-hero-slider single-animation-wrap" style={{ backgroundImage: "url('assets/imgs/slider/slider-4.png')" }}>
                            <div className="slider-content">
                                <h1 className="display-2 mb-40">
                                    Snacks box<br />
                                    daily save
                                </h1>

                            </div>
                        </div> */}
                                        </div>
                                        <div className="slider-arrow hero-slider-1-arrow"></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-none d-xl-block">
                                    <div className="banner-img style-3 animated animated">
                                        <div className="banner-text mt-50">
                                            <h2 className="mb-30">
                                                Build Your <br />

                                                <span className="text-brand">Dream<br />
                                                    home</span>
                                            </h2>
                                            <a className='btn btn-xs' href='/'>Shop Now <i className="fi-rs-arrow-small-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
                <section className="featured section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
                                <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp"
                                    data-wow-delay="0">
                                    <div className="banner-icon">
                                        <img src="assets/imgs/theme/icons/icon-1.svg" alt="" />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">Best prices & offers</h3>
                                        <p>On every material</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".1s">
                                    <div className="banner-icon">
                                        <img src="assets/imgs/theme/icons/icon-2.svg" alt="" />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">Better price </h3>
                                        {/* <p>24/7 amazing services</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".2s">
                                    <div className="banner-icon">
                                        <img src="assets/imgs/theme/icons/icon-3.svg" alt="" />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">Many sellers </h3>
                                        <p>High number of sellers </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".3s">
                                    <div className="banner-icon">
                                        <img src="assets/imgs/theme/icons/icon-4.svg" alt="" />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">Wide variety of materials</h3>
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


            </div>
        </div>
    );

};
export default Card_section;