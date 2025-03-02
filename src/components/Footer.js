import React from "react";

function Footer() {
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
                                    <ul class="contact-infor">
                                        <li><img src="assets/imgs/theme/icons/icon-location.svg" alt="" /><strong>Address:
                                        </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span>
                                        </li>
                                        <li><img src="assets/imgs/theme/icons/icon-contact.svg" alt="" /><strong>Call
                                            Us:</strong><span>(+91) - 540-025-124553</span></li>
                                        <li><img src="assets/imgs/theme/icons/icon-email-2.svg"
                                            alt="" /><strong>Email:</strong><span>sale@Nest.com</span></li>
                                        <li><img src="assets/imgs/theme/icons/icon-clock.svg"
                                            alt="" /><strong>Hours:</strong><span>10:00 - 18:00, Mon - Sat</span></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                                <h4 class="widget-title">Company</h4>
                                <ul class="footer-list mb-sm-5 mb-md-0">
                                    <li><a href="/#/About">About Us</a></li>
                                    {/* <li><a href="/">Delivery Information</a></li> */}
                                    {/* <li><a href="/">Privacy Policy</a></li> */}
                                    <li><a href="/">Terms &amp; Conditions</a></li>
                                    <li><a href="/#/Contact">Contact Us</a></li>
                                    {/* <li><a href="/">Support Center</a></li> */}
                                    {/* <li><a href="/">Careers</a></li> */}
                                </ul>
                            </div>
                            <div class="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                                <h4 class="widget-title">Account</h4>
                                <ul class="footer-list mb-sm-5 mb-md-0">
                                    <li><a href="/#/Login">User Sign In</a></li>
                                    <li><a href="/#/Signup">User Sign up</a></li>
                                    <li><a href="/#/Seller_login">Seller Sign In</a></li>
                                    <li><a href="/#/Seller_registration">Seller Sign up</a></li>
                                    {/* <li><a href="/">View Cart</a></li>
                                    <li><a href="/">My Wishlist</a></li> */}
                                    {/* <li><a href="/">Track My Order</a></li> */}
                                    {/* <li><a href="/">Help Ticket</a></li> */}
                                    {/* <li><a href="/">Shipping Details</a></li> */}
                                    {/* <li><a href="/">Compare products</a></li> */}
                                </ul>
                            </div>
                            {/* <div class="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                                <h4 class="widget-title">Corporate</h4>
                                <ul class="footer-list mb-sm-5 mb-md-0">
                                    <li><a href="/">Become a Vendor</a></li>
                                    <li><a href="/">Affiliate Program</a></li>
                                    <li><a href="/">Farm Business</a></li>
                                    <li><a href="/">Farm Careers</a></li>
                                    <li><a href="/">Our Suppliers</a></li>
                                    <li><a href="/">Accessibility</a></li>
                                    <li><a href="/">Promotions</a></li>
                                </ul>
                            </div> */}
                            <div class="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                                <h4 class="widget-title">Popular</h4>
                                <ul class="footer-list mb-sm-5 mb-md-0">
                                    <li><a href="/">Cement</a></li>
                                    <li><a href="/">Tiles</a></li>
                                    <li><a href="/">Marbel</a></li>
                                    <li><a href="/">Granite</a></li>
                                    {/* <li><a href="/">Sour Cream and Dips</a></li>
                                    <li><a href="/">Tea & Kombucha</a></li>
                                    <li><a href="/">Cheese</a></li> */}
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