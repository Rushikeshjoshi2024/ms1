import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Best_of() {
    const [newMaterial, setnewMaterial] = useState([]);
    const [featuredMaterial, setfeaturedMaterial] = useState([]);
    // const [searchQuery, setSearchQuery] = useState('');

    const [values, setValues] = useState({
        val: 5

    });
    axios.defaults.withCredentials = true;
    useEffect(() => {
        const handleSubmit = async () => {
            try {
                const response = await axios.post('https://server-f8g6.onrender.com/latest_material', values);
                if (response.data.success) {
                    // alert(response.seller_email);
                    // console.log(response.data);
                    setnewMaterial(response.data.data); // Assuming response.data.data contains the array of seller details

                    // console.log(response.data.data[0].shop_name);
                } else {
                    // alert("Invalid data");
                }
            } catch (err) {
                // alert("An error occurred: " + err);
            }
        };

        handleSubmit();
    }, []);
    useEffect(() => {
        const handleSubmit = async () => {
            try {
                const response = await axios.post('https://server-f8g6.onrender.com/featured_material', values);
                if (response.data.success) {
                    // alert(response.seller_email);
                    // console.log(response.data);
                    setfeaturedMaterial(response.data.data); // Assuming response.data.data contains the array of seller details

                    // console.log(response.data.data[0].shop_name);
                } else {
                    // alert("Invalid data");
                }
            } catch (err) {
                // alert("An error occurred: " + err);
            }
        };

        handleSubmit();
    }, []);


    return (
        <div >
            <section className="section-padding pb-5">
                <div className="container">
                    <div className="section-title wow animate__animated animate__fadeIn">
                        <h3 className="">Best of</h3>
                        <ul className="nav nav-tabs links" id="myTab-2" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="nav-tab-one-1" data-bs-toggle="tab"
                                    data-bs-target="#tab-one-1" type="button" role="tab" aria-controls="tab-one"
                                    aria-selected="true">Featured</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="nav-tab-two-1" data-bs-toggle="tab" data-bs-target="#tab-two-1"
                                    type="button" role="tab" aria-controls="tab-two" aria-selected="false">Popular</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="nav-tab-three-1" data-bs-toggle="tab"
                                    data-bs-target="#tab-three-1" type="button" role="tab" aria-controls="tab-three"
                                    aria-selected="false">New added</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link to={{ pathname: `/Products` }}>
                                    <button className="nav-link" type="button">
                                        All
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="row" >
                        <div className="col-lg-3 d-none d-lg-flex wow animate__animated animate__fadeIn">
                            <div className="banner-img style-2">
                                <div className="banner-text">
                                    <h4 className="mb-85">Direction towards your dream home.</h4>
                                    <Link className='btn btn-xs'
                                        to={{
                                            pathname: `/Products`,
                                            // your data array of objects
                                        }}
                                    >Explore <i
                                        className="fi-rs-arrow-small-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12 wow animate__animated animate__fadeIn" data-wow-delay=".4s" >
                            <div className="tab-content" id="myTabContent-1">
                                <div className="tab-pane fade show active" id="tab-one-1" role="tabpanel"
                                    aria-labelledby="tab-one-1" >
                                    <div className="carausel-4-columns-cover arrow-center position-relative" >
                                        <div className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                                            id="carausel-4-columns-arrows" ></div>
                                        <div className="carausel-4-columns carausel-arrow-center card-group" id="carausel-4-columns" >
                                            {featuredMaterial.map(item => (
                                                <div className="product-cart-wrap card" key={item.id}>
                                                    <div className="product-img-action-wrap">
                                                        <div className="product-img product-img-zoom">
                                                            <Link
                                                                to={{
                                                                    pathname: `/Material_details/${item.id}`,
                                                                    // your data array of objects
                                                                }}
                                                            >
                                                                <img className="default-img" src={`https://server-f8g6.onrender.com/uploads/regd_material/${item.material_image}`}
                                                                    alt="" style={{ height: '10rem' }} />

                                                            </Link>
                                                        </div>

                                                        <div className="product-badges product-badges-position product-badges-mrg">
                                                            <span className="hot">Save 15%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-wrap">
                                                        <div className="product-" style={{ marginBlock: '1rem' }}>
                                                            #{item.category}
                                                        </div>
                                                        <h2><a href='#'>{item.material_name}</a></h2>
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ width: '80%' }}></div>
                                                        </div>
                                                        <div style={{ marginBlock: '1rem' }}>
                                                            <span>{item.material_brand} </span>
                                                            {/* <span className="old-price">{item.material_price}</span> */}
                                                        </div>
                                                        <div className="product-price mt-10" style={{ marginBlock: '1rem' }}>
                                                            <span>Rs. {item.material_price}/Unit </span>
                                                            {/* <span className="old-price">{item.material_price}</span> */}
                                                        </div>
                                                        {/* <div className="sold mt-15 mb-15">
                                                        <div className="progress mb-5">
                                                            <div className="progress-bar" role="progressbar" style={{ width: '50%' }}
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <span className="font-xs text-heading"> {item.material_brand}</span>
                                                    </div> */}
                                                        <a className='btn w-100 hover-up' href='#'><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add To Cart</a>
                                                    </div>
                                                </div>

                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-two-1" role="tabpanel" aria-labelledby="tab-two-1">
                                    <div className="carausel-4-columns-cover arrow-center position-relative">
                                        <div className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                                            id="carausel-4-columns-2-arrows"></div>
                                        <div className="carausel-4-columns carausel-arrow-center card-group" id="carausel-4-columns-2 ">
                                            <div className="product-cart-wrap card">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href='#'>
                                                            <img className="default-img" src="assets/imgs/shop/product-10-1.jpg"
                                                                alt="" />
                                                            <img className="hover-img" src="assets/imgs/shop/product-10-2.jpg"
                                                                alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a aria-label="Quick view" className="action-btn small hover-up"
                                                            data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i
                                                                className="fi-rs-eye"></i></a>
                                                        <a aria-label='Add To Wishlist' className='action-btn small hover-up'
                                                            href='#'><i className="fi-rs-heart"></i></a>
                                                        <a aria-label='Compare' className='action-btn small hover-up'
                                                            href='#'><i className="fi-rs-shuffle"></i></a>
                                                    </div>
                                                    <div className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="hot">Save 15%</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <div className="product-category">
                                                        <a href='#'>Hodo Foods</a>
                                                    </div>
                                                    <h2><a href='#'>Canada Dry Ginger Ale – 2 L
                                                        Bottle</a></h2>
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: '80%' }}></div>
                                                    </div>
                                                    <div className="product-price mt-10">
                                                        <span>$238.85 </span>
                                                        <span className="old-price">$245.8</span>
                                                    </div>
                                                    <div className="sold mt-15 mb-15">
                                                        <div className="progress mb-5">
                                                            <div className="progress-bar" role="progressbar" style={{ width: '50%' }}
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <span className="font-xs text-heading"> Sold: 90/120</span>
                                                    </div>
                                                    <a className='btn w-100 hover-up' href='#'><i
                                                        className="fi-rs-shopping-cart mr-5"></i>Add To Cart</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-three-1" role="tabpanel" aria-labelledby="tab-three-1">
                                    <div className="carausel-4-columns-cover arrow-center position-relative">
                                        <div className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                                            id="carausel-4-columns-3-arrows"></div>
                                        <div className="carausel-4-columns carausel-arrow-center card-group" id="carausel-4-columns-3 ">
                                            {newMaterial.map(item => (


                                                <div className="product-cart-wrap card">
                                                    <div className="product-img-action-wrap">
                                                        <div className="product-img product-img-zoom">
                                                            <Link
                                                                to={{
                                                                    pathname: `/Material_details/${item.id}`,
                                                                    // your data array of objects
                                                                }}
                                                            >
                                                                <img className="default-img" src={`https://server-f8g6.onrender.com/uploads/regd_material/${item.material_image}`}
                                                                    alt="" style={{ height: '7rem' }} />

                                                            </Link>
                                                        </div>

                                                        <div className="product-badges product-badges-position product-badges-mrg">
                                                            <span className="hot">Save 15%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-wrap">
                                                        <div className="product-category" style={{ marginBlock: '1rem' }}>
                                                            <a href='#'>{item.category}</a>
                                                        </div>
                                                        <h2><a href='#'>{item.material_name}</a></h2>
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ width: '80%' }}></div>
                                                        </div>
                                                        <div style={{ marginBlock: '1rem' }}>
                                                            <span>{item.material_brand} </span>
                                                            {/* <span className="old-price">{item.material_price}</span> */}
                                                        </div>
                                                        <div className="product-price mt-10" style={{ marginBlock: '1rem' }}>
                                                            <span>Rs. {item.material_price}/Unit </span>
                                                            {/* <span className="old-price">{item.material_price}</span> */}
                                                        </div>
                                                        {/* <div className="sold mt-15 mb-15">
                                                            <div className="progress mb-5">
                                                                <div className="progress-bar" role="progressbar" style={{ width: '50%' }}
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="font-xs text-heading"> {item.material_brand}</span>
                                                        </div> */}
                                                        <a className='btn w-100 hover-up' href='#'><i
                                                            className="fi-rs-shopping-cart mr-5"></i>Add To Cart</a>
                                                    </div>
                                                </div>


                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

};
export default Best_of;