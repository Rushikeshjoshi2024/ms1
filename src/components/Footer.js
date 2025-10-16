import React, { useState, useEffect } from "react";

function Footer() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div>
            <footer class="main">
                <section class="section-padding footer-mid">
                    <div class="container pt-15 pb-20">
                        <div class="row">
                            <div class="col">
                                <div class="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0 wow animate__animated animate__fadeInUp"
                                    data-wow-delay="0">
                                    <div class="logo mb-30">
                                        <a class='mb-15' href='/'></a>
                                        <p class="font-lg text-heading">Build dream with us</p>
                                    </div>
                                    <img src="logo.png" alt="MaterialSeller" style={{ width: '8rem', marginLeft: '32px', marginBottom: '8px' }} />
                                    <ul class="contact-infor">
                                        <li><img src="assets/imgs/theme/icons/icon-contact.svg" alt="" /><strong>Call
                                            Us:</strong><span>(+91) 7709089435</span></li>
                                        <li><img src="assets/imgs/theme/icons/icon-email-2.svg"
                                            alt="" /><strong>Email:</strong><span>materialseller@gmail.com</span></li>
                                        {/* <li><img src="assets/imgs/theme/icons/icon-clock.svg"
                                            alt="" /><strong>Hours:</strong><span>10:00 - 18:00, Mon - Sat</span></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                                <h4 className="widget-title">Account</h4>
                                <ul className="footer-list mb-sm-5 mb-md-0" style={{ listStyle: "none", padding: 0 }}>
                                    <div
                                        style={{ position: "relative", display: "inline-block" }}
                                        onMouseEnter={() => !isMobile && setIsOpen(true)}
                                        onMouseLeave={() => !isMobile && setIsOpen(false)}
                                    >
                                        <button
                                            style={{ padding: "8px 16px", cursor: "pointer" }}
                                            onClick={() => isMobile && setIsOpen(!isOpen)}
                                        >
                                            Login & SignUp
                                        </button>

                                        {isOpen && (
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: isMobile ? "100%" : 0,
                                                    left: isMobile ? 0 : "100%",
                                                    borderRadius: "5px",
                                                    border: "1px solid #ccc",
                                                    backgroundColor: "#fff",
                                                    minWidth: "150px",
                                                    zIndex: 1,
                                                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
                                                }}
                                            >
                                                <a href="/#/Login" style={{ display: "block", padding: "8px", textDecoration: "none", color: "black" }}>User Sign In</a>
                                                <a href="/#/Seller_login" style={{ display: "block", padding: "8px", textDecoration: "none", color: "black" }}>Seller Sign In</a>
                                                <a href="/#/Signup" style={{ display: "block", padding: "8px", textDecoration: "none", color: "black" }}>Seller Sign Up</a>
                                                <a href="/#/Seller_registration" style={{ display: "block", padding: "8px", textDecoration: "none", color: "black" }}>Seller Registration</a>
                                            </div>
                                        )}
                                    </div>
                                </ul>
                                <h4 className="widget-title">Quick Links</h4>
                                <ul class="footer-list mb-sm-5 mb-md-0">
                                    <li><a href="/">Shop by Category</a></li>
                                    <li><a href="/">All Products</a></li>
                                    {/* <li><a href="/">FAQs</a></li> */}
                                </ul>
                            </div>

                            <div class="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                                <h4 class="widget-title">Company</h4>
                                <ul class="footer-list mb-sm-5 mb-md-0">
                                    <li><a href="/#/About">About Us</a></li>
                                    <li><a href="/">Terms &amp; Conditions</a></li>
                                    <li><a href="/#/Contact">Contact Us</a></li>
                                    <li><a href="/#">Privacy Policy</a></li>

                                </ul>
                            </div>
                            <div class="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                                <h4 class="widget-title">Popular</h4>
                                <ul class="footer-list mb-sm-5 mb-md-0">
                                    <li><a href="/">Cement</a></li>
                                    <li><a href="/">Tiles</a></li>
                                    <li><a href="/">Marbel</a></li>
                                    <li><a href="/">Granite</a></li>
                                    <li><a href="/">More</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="container pb-30 wow animate__animated animate__fadeInUp" data-wow-delay="0">
                    <div class="row align-items-center">
                        <div class="col-12 mb-30">
                            <div class="footer-bottom"></div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <p class="font-sm mb-0">&copy; 2024, <strong class="text-brand">MaterialSeller</strong>
                                <br />All rights reserved</p>
                        </div>
                        <div class="col-xl-8 col-lg-6 col-md-6 text-end d-none d-md-block">
                            <div class="mobile-social-icon">
                                <h6>Follow Us</h6>
                                <a href="/"><img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt="" /></a>
                                <a href="/"><img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt="" /></a>
                                <a href="/"><img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt="" /></a>
                                <a href="/"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt="" /></a>
                                <a href="/"><img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt="" /></a>
                            </div>
                            {/* <p class="font-sm">Up to 15% discount on your first subscribe</p> */}
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};
export default Footer;