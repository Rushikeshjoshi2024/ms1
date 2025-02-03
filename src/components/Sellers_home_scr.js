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
                    alert("Invalid data");
                }
            } catch (err) {
                alert("An error occurred: " + err);
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
                                <button className="nav-link" type="button">
                                    All
                                </button>

                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="row vendor-grid" >
                    {data.map(item => (

                        <div className="col-lg-3 col-md-6 col-12 col-sm-6" >



                            <div className="vendor-wrap mb-40" key={item.id} >
                                <div className="vendor-img-action-wrap">
                                    <div className="vendor-img">
                                        <Link
                                            to={{
                                                pathname: `/Seller_details/${item.seller_id}`,
                                                // your data array of objects
                                            }}
                                        >

                                            <img className="default-img" src={`https://server-f8g6.onrender.com/uploads/shop_logo/${item.shop_logo}`} alt="" style={{ borderRadius: '1rem', minWidth: '16rem', height: '9rem' }} />
                                        </Link>
                                    </div>
                                    <div className="product-badges product-badges-position product-badges-mrg">
                                        <span className="hot">Since {item.reg_date.slice(0, 4)}</span>
                                    </div>
                                </div>
                                <div className="vendor-content-wrap">
                                    <div className="d-flex justify-content-between align-items-end mb-30">
                                        <div>
                                            {/* <div className="product-category">
                                                        <span className="text-muted">Since {item.reg_date.slice(0, 4)}</span>
                                                    </div> */}
                                            <h4 className="mb-5">
                                                <Link
                                                    to={{
                                                        pathname: `/Seller_details/${item.seller_id}`,
                                                        // your data array of objects
                                                    }}
                                                >
                                                    {item.shop_name}</Link></h4>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: '90%' }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                                            </div>
                                        </div>
                                        <div className="mb-10">
                                            <span className="font-small total-product">{item.count} products</span>
                                        </div>
                                    </div>
                                    <div className="vendor-info mb-30">
                                        <ul className="contact-infor text-muted">
                                            <li><img src="assets/imgs/theme/icons/icon-location.svg" alt="" /><strong>Address: </strong> <span>{item.seller_address}</span></li>
                                            {/* <li><img src="assets/imgs/theme/icons/icon-contact.svg" alt="" /><strong>Call Us:</strong><span>(+91) {item.seller_mobile_no}</span></li> */}
                                        </ul>

                                    </div>
                                    <div className="seller-grid-box seller-grid-box-1">

                                        <div className="grid-contain">
                                            <div className="seller-category">

                                                <Link className='btn btn-xs'
                                                    to={{
                                                        pathname: `/Sellers_material/${item.seller_id}`,
                                                        // your data array of objects
                                                    }}
                                                >
                                                    <p style={{ display: 'flex', flexDirection: 'row' }}>Visit Store <i className="fi-rs-arrow-small-right"></i></p></Link>
                                                <ul className="product-image">
                                                    <li>
                                                        <img src="assets/imgs/category/cat-2.png" className="img-fluid" alt="" />
                                                    </li>
                                                    <li>
                                                        <img src="assets/imgs/category/cat-3.png" className="img-fluid" alt="" />
                                                    </li>
                                                    {/* <li>
                                                        <img src="assets/imgs/category/cat-4.png" className="img-fluid" alt="" />
                                                    </li> */}
                                                    <li>
                                                        <img src="assets/imgs/category/cat-5.png" className="img-fluid" alt="" />
                                                    </li>
                                                    <li>+15</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <a className='btn btn-xs' href='vendor-details-1.html'> */}

                                </div>
                            </div>

                        </div >
                    ))}

                </div>
            </div>



            {/* <div className="section-title wow animate__animated animate__fadeIn">
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
                                          <button className="nav-link" type="button">
                                        All
                                    </button>
                                    
                                    </Link>
                                </li>
                            </ul>
                        </div>
                      
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
                                                    <img src={`https://server-f8g6.onrender.com/uploads/shop_logo/${item.shop_logo}`} className="img-fluid" alt="" /></Link>
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
            </div > */}
        </div >
    );
};

export default Sellers_home_scr;