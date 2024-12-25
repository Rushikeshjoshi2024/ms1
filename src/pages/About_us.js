import React from "react";
import '../pages/Pages.css';
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const About_us = () => {


    return (
        <div>
            <Nav />
            <main className="main">

                <div className="page-content pt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 m-auto">
                                <section className="row align-items-center mb-50">
                                    <div className="col-lg-6">
                                        <img src="assets/imgs/page/about-1.png" alt="" className="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4" />
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="pl-25">
                                            <h2 className="mb-30">Welcome to MaterialSeller</h2>
                                            <p align='justify' className="mb-25">Welcome to MateralSeller, your premier online destination for discovering unique construction materials and connecting with sellers from across the country. Our platform is designed to bridge the gap between buyers and sellers, making it easier than ever to access a diverse range of products, no matter where you're located.</p>
                                            <p align='justify' className="mb-50">One of the main benefits of MateralSeller is its ability to connect buyers with sellers who may be outside of their immediate area. Whether you're searching for a specific material that's hard to find locally or you're interested in exploring offerings from sellers in different regions, MateralSeller opens up a world of possibilities.</p>

                                            <div className="carausel" style={{ display: 'flex' }}>
                                                <img src="assets/imgs/page/about-2.png" alt="" />
                                                <img src="assets/imgs/page/about-3.png" alt="" />
                                                <img src="assets/imgs/page/about-4.png" alt="" />
                                                <img src="assets/imgs/page/about-2.png" alt="" />
                                            </div>
                                        </div>

                                    </div>
                                </section>
                                <section className="text-center mb-50">
                                    <h2 className="title style-3 mb-40">What We Provide?</h2>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 mb-24">
                                            <div className="featured-card">
                                                <img src="assets/imgs/theme/icons/icon-1.svg" alt="" />
                                                <h4>Best Prices & Offers</h4>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                                <a href="/">Read more</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-24">
                                            <div className="featured-card">
                                                <img src="assets/imgs/theme/icons/icon-2.svg" alt="" />
                                                <h4>Wide Assortment</h4>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                                <a href="/">Read more</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-24">
                                            <div className="featured-card">
                                                <img src="assets/imgs/theme/icons/icon-3.svg" alt="" />
                                                <h4>Free Delivery</h4>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                                <a href="/">Read more</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-24">
                                            <div className="featured-card">
                                                <img src="assets/imgs/theme/icons/icon-4.svg" alt="" />
                                                <h4>Easy Returns</h4>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                                <a href="/">Read more</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-24">
                                            <div className="featured-card">
                                                <img src="assets/imgs/theme/icons/icon-5.svg" alt="" />
                                                <h4>100% Satisfaction</h4>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                                <a href="/">Read more</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-24">
                                            <div className="featured-card">
                                                <img src="assets/imgs/theme/icons/icon-6.svg" alt="" />
                                                <h4>Great Daily Deal</h4>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                                <a href="/">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="row align-items-center mb-50">
                                    <div className="row mb-50 align-items-center">
                                        <div className="col-lg-7 pr-30">
                                            <img src="assets/imgs/page/about-5.png" alt="" className="mb-md-3 mb-lg-0 mb-sm-4" />
                                        </div>
                                        <div className="col-lg-5">
                                            <h4 className="mb-20 text-muted">About</h4>
                                            <p align='justify' className="heading-1 mb-40">By bringing together sellers from across the country, MateralSeller provides buyers with access to exclusive materials that may not be available in their local area. Whether it's a rare type of wood, a specialty tool, or a unique fixture, our platform connects you with sellers who offer products you won't find anywhere else.</p>
                                            <p align='justify'>
                                                But MateralSeller isn't just about access – it's also about opportunity. For sellers, our platform provides a valuable opportunity to reach new customers and expand their business beyond their local market. Whether you're a small shop in a rural area, a boutique supplier with a niche product, or a seller looking to grow your customer base, MateralSeller offers a platform to showcase your offerings and connect with buyers from across the country.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 pr-30 mb-md-5 mb-lg-0 mb-sm-5">
                                            <h3 className="mb-30">Who we are</h3>
                                            <p align='justify'>At MateralSeller, we're more than just an online marketplace – we're a team of dedicated individuals passionate about transforming the construction material procurement experience. Our mission is simple: to connect buyers with sellers in a seamless and efficient way, while empowering businesses of all sizes to thrive in an ever-evolving industry.
                                                <p />
                                                {/* <p>

                                                    Driven by innovation and a commitment to excellence, we've created a platform that not only simplifies the purchasing process but also fosters meaningful connections between buyers and sellers. With a focus on transparency, reliability, and convenience, we're revolutionizing the way construction materials are bought and sold.
                                                </p> */}
                                                <p align='justify'>


                                                    But beyond our platform, MateralSeller is a community – a network of individuals and businesses united by a shared goal of building better, smarter, and more efficiently. Whether you're a buyer searching for the perfect materials or a seller looking to expand your reach, we're here to support you every step of the way.</p>
                                            </p>
                                        </div>
                                        <div className="col-lg-4 pr-30 mb-md-5 mb-lg-0 mb-sm-5">
                                            <h3 className="mb-30">Our history</h3>
                                            <p align='justify'>Founded in the vibrant year of 2024 by two ambitious engineering students, MateralSeller was born from a shared passion for innovation and a deep understanding of the challenges facing the construction industry. Determined to make a difference, our founders embarked on a journey to revolutionize the way construction materials are bought and sold.

                                            </p>
                                            <p align='justify'>
                                                Driven by a desire to bridge the gap between traditional methods and modern technology, our founders set out to create a platform that would empower buyers and sellers alike. With a clear vision and boundless enthusiasm, they worked tirelessly to bring their dream to life, laying the foundation for what would become MateralSeller.
                                            </p>
                                        </div>
                                        <div className="col-lg-4">
                                            <h3 className="mb-30">Our mission</h3>
                                            <p align='justify'>At MateralSeller, our mission is to revolutionize construction material procurement by bridging the gap between buyers and sellers, fostering efficiency, accessibility, and transparency. We empower sellers, especially those outside major urban centers or with unique offerings, to showcase their products to a broader audience, while providing buyers with seamless access to a diverse range of materials. </p>
                                            <p align='justify'>
                                                We envision MateralSeller not just as a platform, but as a trusted partner for construction professionals and enthusiasts alike, where collaboration thrives and success is shared. With a focus on accessibility, empowerment, and innovation, we're dedicated to shaping the future of construction material procurement, one transaction at a time. Welcome to MateralSeller – where building better begins with us.
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    {/* <section className="container mb-50 d-none d-md-block">
                        <div className="row about-count" >
                            <div className="col-lg-1-5 col-md-6 text-center mb-lg-0 mb-md-5">
                                <h1 className="heading-1"><span className="count">12</span>+</h1>
                                <h4>Glorious years</h4>
                            </div>
                            <div className="col-lg-1-5 col-md-6 text-center">
                                <h1 className="heading-1"><span className="count">36</span>+</h1>
                                <h4>Happy clients</h4>
                            </div>
                            <div className="col-lg-1-5 col-md-6 text-center">
                                <h1 className="heading-1"><span className="count">58</span>+</h1>
                                <h4>Projects complete</h4>
                            </div>
                            <div className="col-lg-1-5 col-md-6 text-center">
                                <h1 className="heading-1"><span className="count">24</span>+</h1>
                                <h4>Team advisor</h4>
                            </div>
                            <div className="col-lg-1-5 text-center d-none d-lg-block">
                                <h1 className="heading-1"><span className="count">26</span>+</h1>
                                <h4>Products Sale</h4>
                            </div>
                        </div>
                    </section> */}
                    <div className="container" hidden>
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 m-auto">
                                <section className="mb-50">
                                    <h2 className="title style-3 mb-40 text-center">Our Team</h2>
                                    <div className="row">
                                        <div className="col-lg-4 mb-lg-0 mb-md-5 mb-sm-5">
                                            {/* <h6 className="mb-5 text-brand">Our Team</h6> */}
                                            <h1 className="mb-30">Meet Our Expert Team</h1>
                                            <p align='justify' className="mb-30">Meet the visionary mind behind MateralSeller: Rushikesh R. Joshi, an IT engineer from Nanded, who embarked on the journey of building MaterialSeller in 2023. With a profound understanding of technology and a fervent desire to innovate, Rushikesh's leadership has been instrumental in shaping MateralSeller's mission to revolutionize construction material procurement. His relentless dedication to excellence and commitment to bridging the gap between buyers and sellers have driven the platform's evolution, empowering individuals and businesses to thrive in the ever-evolving landscape of construction.</p>
                                            <p align='justify' className="mb-30">Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>
                                            {/* <a href="/" className="btn">View All Members</a> */}
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="team-card">
                                                        <img src="assets/imgs/page/founder.jpeg" alt="" />
                                                        <div className="content text-center">
                                                            <h4 className="mb-5">Rushikesh R. Joshi</h4>
                                                            <span>CEO & Co-Founder</span>
                                                            <div className="social-network mt-20">
                                                                <a href="/"><img src="assets/imgs/theme/icons/icon-facebook-brand.svg" alt="" /></a>
                                                                <a href="/"><img src="assets/imgs/theme/icons/icon-twitter-brand.svg" alt="" /></a>
                                                                <a href="/"><img src="assets/imgs/theme/icons/icon-instagram-brand.svg" alt="" /></a>
                                                                <a href="/"><img src="assets/imgs/theme/icons/icon-youtube-brand.svg" alt="" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="team-card">
                                                        <img src="assets/imgs/page/about-8.png" alt="" />
                                                        <div className="content text-center">
                                                            <h4 className="mb-5"></h4>
                                                            <span></span>
                                                            <div className="social-network mt-20">
                                                                <a href="/"><img src="assets/imgs/theme/icons/icon-facebook-brand.svg" alt="" /></a>
                                                                <a href="/"><img src="assets/imgs/theme/icons/icon-twitter-brand.svg" alt="" /></a>
                                                                <a href="/"><img src="assets/imgs/theme/icons/icon-instagram-brand.svg" alt="" /></a>
                                                                <a href="/"><img src="assets/imgs/theme/icons/icon-youtube-brand.svg" alt="" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
};

export default About_us;
