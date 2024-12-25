import React from "react";
import '../pages/Pages.css';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const Contact_us = () => {


    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <section>

                        <div className="row">
                            <div className="col-xl-8">
                                <div className="contact-from-area padding-20-row-col">
                                    <h5 className="text-brand mb-10">Contact form</h5>
                                    <h2 className="mb-10">Drop Us a message</h2>
                                    <p className="text-muted mb-30 font-sm">Your email address will not be published.</p>
                                    <form className="contact-form-style mt-30" id="contact-form" action="https://formspree.io/f/mvojlnzw" method="POST">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input name="username" placeholder="Your Name" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input name="email" placeholder="Your Email" type="email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="input-style mb-20">
                                                    <input name="telephone" placeholder="Your Phone" type="tel" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="textarea-style mb-30">
                                                    <textarea name="message" placeholder="Message"></textarea>
                                                </div>
                                                <button className="submit submit-auto-width" type="submit">Send message</button>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="form-messege"></p>
                                </div>
                            </div>
                            <div className="col-lg-4 pl-50 d-lg-block d-none">
                                <img className="border-radius-15 mt-50" src="assets/imgs/page/contact-2.png" alt="" />
                            </div>
                        </div>
                    </section>
                    <div style={{ paddingTop: "5rem" }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7536.859438255663!2d77.31271544113429!3d19.17642461174024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d6fbe138ad81%3A0x9e88bbe86ec52250!2sMGM&#39;s%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1698564713615!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
                    </div>
                </div>
            </div>
            <br />
            <Footer />
        </div>

    )
};

export default Contact_us;
