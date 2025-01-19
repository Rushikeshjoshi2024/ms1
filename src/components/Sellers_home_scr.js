import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import '../pages/Pages.css';
import { Link } from 'react-router-dom';




function Sellers_home_scr() {
    const [data, setData] = useState([]);
    const [values, setValues] = useState({
        val: 8

    });
    axios.defaults.withCredentials = true;
    useEffect(() => {
        const handleSubmit = async () => {
            try {
                const response = await axios.post('https://server-f8g6.onrender.com/all_sellers_home', values);
                if (response.data.success) {
                    // alert(response.seller_email);
                    // console.log(response.data);
                    setData(response.data.data); // Assuming response.data.data contains the array of seller details

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
    // const handleSearchChange = (event) => {
    //     setSearchQuery(event.target.value);
    // };

    // Step 3: Filter the data based on the search query
    // const filteredData = data.filter(item =>
    //     item.shop_name && item.shop_name.toLowerCase().includes(searchQuery.toLowerCase()) || item.seller_address && item.seller_address.toLowerCase().includes(searchQuery.toLowerCase())
    // );


    return (
        <div>

            <div className="section-title wow animate__animated animate__fadeIn">
                <section className="seller-grid-section  pb-5">
                    <div className="container-fluid-lg">
                        <div className="section-title style-2 wow animate__animated animate__fadeIn">
                            <h3>Our Sellers</h3>
                            <ul className="nav nav-tabs links" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <Link className='btn btn-xs'
                                        to={{
                                            pathname: `/Sellers`,
                                            // your data array of objects
                                        }}
                                    >
                                        <button className="nav-link active" id="nav-tab-one" data-bs-toggle="tab" data-bs-target="#tab-one" type="button" role="tab" aria-controls="tab-one" aria-selected="true">All</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* <h3 className=""></h3> */}
                        {/* <br /> */}
                        <div className="row g-4">
                            {data.map(item => (
                                <div className="col-xxl-3 col-md-4" key={item.id}>
                                    <div className="seller-grid-box seller-grid-box-1">
                                        <div className="grid-image">
                                            <div className="image">
                                                <Link
                                                    to={{
                                                        pathname: `/Seller_details/${item.seller_id}`,
                                                        // your data array of objects
                                                    }}
                                                >
                                                    <img
                                                        src={item.shop_logo ? `https://server-f8g6.onrender.com/uploads/shop_logo/${item.shop_logo}` : 'https://server-f8g6.onrender.com/uploads/shop_logo/def_logo.jpg'}
                                                        className="img-fluid"
                                                        alt="Shop Logo"
                                                    />

                                                </Link>
                                            </div>

                                            <div className="contain-name">
                                                <div>
                                                    <div className="since-number">
                                                        <h6>Since {item.reg_date.slice(0, 4)}</h6>
                                                        <div className="product-rating">
                                                            <ul className="rating">
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star" className="fill"></i>
                                                                </li>
                                                                <li>
                                                                    <i data-feather="star"></i>
                                                                </li>
                                                            </ul>

                                                            {/* <h6 className="theme-color ms-2">(26)</h6> */}
                                                        </div>
                                                    </div>
                                                    <h3>
                                                        <Link
                                                            to={{
                                                                pathname: `/Seller_details/${item.seller_id}`,
                                                                // your data array of objects
                                                            }}
                                                        >{item.shop_name}
                                                        </Link></h3>
                                                </div>
                                                <label className="product-label">{item.count}  Products</label>
                                            </div>
                                        </div>

                                        <div className="grid-contain">
                                            <div className="seller-contact-details">
                                                <div className="seller-contact">
                                                    {/* <div className="seller-icon">
                                                    <i className="fa-solid fa-map-pin"></i>
                                                </div> */}

                                                    <div className="contact-detail">
                                                        <h5>City: <span> {item.district}</span></h5>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="seller-category">

                                                <Link
                                                    to={{
                                                        pathname: `/Sellers_material/${item.seller_id}`,
                                                        // your data array of objects
                                                    }}
                                                >  <button onclick="location.href = 'shop-left-sidebar.html';"
                                                    className="btn btn-sm theme-bg-color text-white fw-bold">Visit Store  <i
                                                        className="fi-rs-arrow-small-right"></i></button></Link>
                                                <ul className="product-image">
                                                    <li>
                                                        <img src="assets/imgs/category/cat-2.png" className="img-fluid" alt="" />
                                                    </li>
                                                    <li>
                                                        <img src="assets/imgs/category/cat-3.png" className="img-fluid" alt="" />
                                                    </li>
                                                    <li>
                                                        <img src="assets/imgs/category/cat-4.png" className="img-fluid" alt="" />
                                                    </li>
                                                    <li>
                                                        <img src="assets/imgs/category/cat-5.png" className="img-fluid" alt="" />
                                                    </li>
                                                    <li>+15</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}

                        </div>


                    </div>
                </section >
            </div >
        </div >
    );
};

export default Sellers_home_scr;