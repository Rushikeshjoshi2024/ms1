import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import '../pages/Pages.css';
import Footer from "../components/Footer";

import Nav from "../components/Nav";
function Seller_details(props) {
    const { seller_id } = useParams();
    const [data, setData] = useState([]);
    const [material, setMaterial] = useState({
        val: 8,
        seller_id: seller_id

    });
    const [values, setValues] = useState({
        seller_email: '',
        owner_name: '',
        seller_address: '',
        seller_mobile_no: '',
        shop_name: '',
        reg_date: '',
        state: '',
        district: '',
        street: '',
        landmark: '',
        pincode: '',
        shop_image: '',
        shop_logo: '',
        seller_id: seller_id,
    });


    useEffect(() => {
        const handleFetch = async () => {
            try {
                const response = await axios.post('https://server-f8g6.onrender.com/latest_material_by_seller', material);
                if (response.data.success) {
                    // alert(response.seller_email);
                    // console.log(response.data);
                    setData(response.data.data); // Assuming response.data.data contains the array of seller details

                    // console.log(response.data.data[0].shop_name);
                } else {
                    alert("Invalid data");
                }
            } catch (err) {
                // alert("An error occurred: " + err);

            }
        };

        handleFetch();
    }, []);

    axios.defaults.withCredentials = true;
    useEffect(() => {
        const handleSubmit = async () => {
            try {
                const response = await axios.post('https://server-f8g6.onrender.com/seller_details', values);
                if (response.data.success) {
                    // alert(response.data.size);
                    // console.log(response.data.data[0]);
                    setValues({
                        seller_email: response.data.data[0].seller_email,
                        owner_name: response.data.data[0].owner_name,
                        seller_address: response.data.data[0].seller_address,
                        seller_mobile_no: response.data.data[0].seller_mobile_no,
                        shop_name: response.data.data[0].shop_name,
                        reg_date: response.data.data[0].reg_date,
                        state: response.data.data[0].state,
                        district: response.data.data[0].district,
                        street: response.data.data[0].street,
                        landmark: response.data.data[0].landmark,
                        pincode: response.data.data[0].pincode,
                        shop_logo: response.data.data[0].shop_logo,
                        shop_image: response.data.data[0].shop_image,

                    });
                    // setData(response.data.data); // Assuming response.data.data contains the array of seller details

                    // console.log(response.data.data[0].shop_name);
                } else {
                    alert("Invalid data");
                }
            } catch (err) {
                alert("An error occurred: " + err);
            }
        };

        handleSubmit();
        // values.reg_date.slice(0, 3);

    }, []);

    return (
        <div>
            <Nav />
            <main className="main pages">

                <div className="page-content pt-50">
                    <div className="container">
                        <div className="row">
                            <div className="container mb-30">
                                <div className="archive-header mb-80" >
                                    <div className="archive-header-3-inner" >

                                        {/* <div className="vendor-content"> */}
                                        <div className="product-category" style={{ borderRadius: '2rem' }}>
                                            <span className="text-muted">Since {values.reg_date.slice(0, 4)}</span>
                                            {/* </div> */}
                                            <h3 className="mb-3">{values.shop_name}</h3>
                                            <div className="product-rate-cover mb-15" >
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <img className="mr-5" src={`https://server-f8g6.onrender.com/uploads/shop_cover_img/${values.shop_image}`} alt="" style={{
                                                        borderRadius: '1rem', maxWidth: '100%', maxHeight: '40rem'
                                                    }} /><br />
                                                </div>

                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: "90%" }}></div>
                                                </div>

                                                <span className="font-small ml-5 text-muted"> (4.0)</span>

                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="vendor-info mb-15">
                                                        <ul className="font-sm">
                                                            <li><img className="mr-5" src={`https://server-f8g6.onrender.com/uploads/shop_logo/${values.shop_logo}`} alt="" style={{ borderRadius: '50%', width: '7rem', height: '7rem' }} /><br /><strong>Shop name: </strong> <span>{values.shop_name}</span></li><br />
                                                            <li><strong>Seller name</strong><span> {values.owner_name}</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="vendor-info mb-15">
                                                        <ul className="font-sm">
                                                            <li><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7536.859438255663!2d77.31271544113429!3d19.17642461174024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d6fbe138ad81%3A0x9e88bbe86ec52250!2sMGM&#39;s%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1698564713615!5m2!1sen!2sin" width="100" height="100" style={{ border: 0, borderRadius: '50%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe><br /><strong>Address: </strong> <span>{values.seller_address}</span></li>
                                                            <li><strong>Call Us:</strong><span>(+91) {values.seller_mobile_no}</span></li>
                                                        </ul>
                                                    </div>
                                                    {/* <div className="vendor-des mb-15">
                                                        <p className="font-sm">Got a smooth, buttery spread in your fridge? Chances are good that it's Good Chef. This brand made Lionto's list of the most popular grocery brands across the country.</p>
                                                    </div> */}
                                                </div>

                                                <div className="col-lg-4">
                                                    <div className="follow-social">
                                                        <h6 className="mb-15 ">Follow Us</h6>
                                                        <ul className="social-network">
                                                            {/* <li className="hover-up">
                                                                <a href="/">
                                                                    <img src="../assets/imgs/theme/icons/social-tw.svg" alt="" />
                                                                </a>
                                                            </li> */}
                                                            <li className="hover-up">
                                                                <a href="/">
                                                                    <img src="../assets/imgs/theme/icons/social-fb.svg" alt="" />
                                                                </a>
                                                            </li>
                                                            <li className="hover-up">
                                                                <a href="/">
                                                                    <img src="../assets/imgs/theme/icons/social-insta.svg" alt="" />
                                                                </a>
                                                            </li>
                                                            <li className="hover-up">
                                                                <a href="/">
                                                                    <img src="../assets/imgs/theme/icons/social-whatsapp.svg" alt="" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 
                                <div style={{ paddingTop: "5rem" }}>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7536.859438255663!2d77.31271544113429!3d19.17642461174024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d6fbe138ad81%3A0x9e88bbe86ec52250!2sMGM&#39;s%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1698564713615!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
                                </div> */}
                            </div>
                            <div className="col-lg-5 mx-auto text-center">
                                <h1 className="title heading-1 style-3 mb-40">From Foundation to Finish, We've Got You Covered! <span className="text-brand">Visit</span> today</h1>
                                <p className="font-xl mb-80">Explore our extensive range of high-quality materials designed to support every stage of your construction journey.</p>
                            </div>
                            <div className="col-xl-10 col-lg-12 m-auto">
                                <section className="text-center mb-50">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 mb-24">
                                            <div className="featured-card">
                                                <img src="assets/imgs/theme/icons/icon-1.svg" alt="" />
                                                <h4>Best Prices & Offers</h4>
                                                <p>Unlock unbeatable value and incred-ible savings without compromising on quality!</p>
                                                <a href="/">Explore materials</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-24">
                                            <div className="featured-card">
                                                <img src="assets/imgs/theme/icons/icon-2.svg" alt="" />
                                                <h4>Wide varieties</h4>
                                                <p>From essentials to specialty materials, we have everything you need under one roof!</p>
                                                <a href="/">Explore materials</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-24">
                                            <div className="featured-card">
                                                <img src="assets/imgs/theme/icons/icon-3.svg" alt="" />
                                                <h4>Best quality</h4>
                                                <p>Experience the difference with materials crafted for durability and performance!</p>
                                                <a href="/">Explore materials</a>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-xl-8 col-lg-12 mx-auto">

                            </div>
                        </div>

                        <section classNameName="product-tabs section-padding position-relative">
                            <div classNameName="container">
                                <div className="col-lg-5 mx-auto text-center">
                                    <h1 className="title heading-1 style-3 mb-40">Explore Material By <br /><span className="text-brand">{values.shop_name}</span></h1>
                                </div>

                                {/* <!--End nav-tabs--> */}
                                <div classNameName="tab-content" id="myTabContent">
                                    <div classNameName="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                                        <div classNameName="row product-grid-4" >

                                            {data.map(item => (
                                                <div classNameName="col-lg-1-5 col-md-3 col-12 col-sm-6" key={item.id}>
                                                    <div classNameName="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                                        <div classNameName="product-img-action-wrap">
                                                            <div classNameName="product-img product-img-zoom">
                                                                <Link
                                                                    to={{
                                                                        pathname: `/Material_details/${item.id}`,
                                                                        // your data array of objects
                                                                    }}
                                                                >
                                                                    <img classNameName="default-img" src={`https://server-f8g6.onrender.com/uploads/${item.material_image}`} alt="" />
                                                                    {/* <img classNameName="hover-img" src="assets/imgs/shop/product-1-2.jpg" alt="" /> */}
                                                                </Link>
                                                            </div>
                                                            {/* <div classNameName="product-action-1">
                                            <a aria-label='Add To Wishlist' classNameName='action-btn' href='shop-wishlist.html'><i classNameName="fi-rs-heart"></i></a>
                                            <a aria-label='Compare' classNameName='action-btn' href='shop-compare.html'><i classNameName="fi-rs-shuffle"></i></a>
                                            <a aria-label="Quick view" classNameName="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i classNameName="fi-rs-eye"></i></a>
                                        </div> */}
                                                            <div classNameName="product-badges product-badges-position product-badges-mrg">
                                                                <span classNameName="hot">New</span>
                                                            </div>
                                                        </div>
                                                        <div classNameName="product-content-wrap">
                                                            <div classNameName="product-category">
                                                                <Link
                                                                    to={{
                                                                        pathname: `/Material_details/${item.id}`,
                                                                        // your data array of objects
                                                                    }}
                                                                >{item.category}</Link>
                                                            </div>
                                                            <h2> <Link
                                                                to={{
                                                                    pathname: `/Material_details/${item.id}`,
                                                                }}
                                                            >{item.material_brand}</Link></h2>
                                                            <div classNameName="product-rate-cover">
                                                                <div classNameName="product-rate d-inline-block">
                                                                    <div classNameName="product-rating" style={{ width: '90%' }}></div>
                                                                </div>
                                                                <span classNameName="font-small ml-5 text-muted"> (4.0)</span>
                                                            </div>
                                                            <div>
                                                                <span classNameName="font-small text-muted">By <a href='#'>{item.shop_name}</a></span>
                                                            </div>
                                                            <div classNameName="product-card-bottom">
                                                                <div classNameName="product-price">
                                                                    <span>{item.material_price}/Unit</span>
                                                                    {/* <span classNameName="old-price">2500</span> */}
                                                                </div>
                                                                <div classNameName="add-cart">
                                                                    <a classNameName='add' href='/'><i classNameName="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </main >
            <Footer />
        </div >
    )
}
export default Seller_details;

