import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import '../pages/Pages.css';
import { Link } from 'react-router-dom';

import Nav from "../components/Nav";
import Footer from "../components/Footer";


function Sellers() {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    axios.defaults.withCredentials = true;
    useEffect(() => {
        const handleSubmit = async () => {
            try {
                const response = await axios.get('https://server-f8g6.onrender.com/all_sellers');
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

        handleSubmit();
    }, []);
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Step 3: Filter the data based on the search query
    const filteredData = data.filter(item =>
        (item.shop_name && item.shop_name.toLowerCase().includes(searchQuery.toLowerCase())) || (item.seller_address && item.seller_address.toLowerCase().includes(searchQuery.toLowerCase()))
    );


    return (
        <div>
            <Nav />

            <main className="main pages mb-80" >

                <div className="page-content pt-50">
                    <div className="container">
                        <div className="archive-header-2 text-center">
                            <h1 className="display-2 mb-50">Sellers</h1>
                            <div className="row">
                                <div className="col-lg-5 mx-auto">
                                    <div className="sidebar-widget-2 widget_search mb-50">
                                        <div className="search-form">
                                            <form action="#">
                                                <input type="text" value={searchQuery}
                                                    onChange={handleSearchChange}
                                                    placeholder="Search seller (by name or address)..." />
                                                <button type="submit"><i className="fi-rs-search"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-50">
                            <div className="col-12 col-lg-8 mx-auto">
                                <div className="shop-product-fillter">
                                    <div className="totall-product">
                                        <p>We have <strong className="text-brand">{data.length}</strong> sellers now</p>
                                    </div>
                                    <div className="sort-by-product-area">
                                        <div className="sort-by-cover mr-10">
                                            <div className="sort-by-product-wrap">
                                                <div className="sort-by">
                                                    <span><i className="fi-rs-apps"></i>Show:</span>
                                                </div>
                                                <div className="sort-by-dropdown-wrap">
                                                    <span> 50 <i className="fi-rs-angle-small-down"></i></span>
                                                </div>
                                            </div>
                                            <div className="sort-by-dropdown">
                                                <ul>
                                                    <li><a className="active" href="/">50</a></li>
                                                    <li><a href="/">100</a></li>
                                                    <li><a href="/">150</a></li>
                                                    <li><a href="/">200</a></li>
                                                    <li><a href="/">All</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="sort-by-cover">
                                            <div className="sort-by-product-wrap">
                                                <div className="sort-by">
                                                    <span><i className="fi-rs-apps-sort"></i>Sort by:</span>
                                                </div>
                                                <div className="sort-by-dropdown-wrap">
                                                    <span> Featured <i className="fi-rs-angle-small-down"></i></span>
                                                </div>
                                            </div>
                                            <div className="sort-by-dropdown">
                                                <ul>
                                                    <li><a className="active" href="/">Mall</a></li>
                                                    <li><a href="/">Featured</a></li>
                                                    <li><a href="/">Preferred</a></li>
                                                    <li><a href="/">Total items</a></li>
                                                    <li><a href="/">Avg. Rating</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row vendor-grid" >
                            {filteredData.map(item => (
                                <div className="col-lg-3 col-md-6 col-12 col-sm-6" >
                                    <div className="vendor-wrap mb-40" key={item.id} >
                                        <div className="vendor-img-action-wrap">
                                            <div className="vendor-img">
                                                <Link
                                                    to={{
                                                        pathname: `/Seller_details/${item.seller_id}`,
                                                    }}
                                                >
                                                    <img className="default-img" src={`https://server-f8g6.onrender.com/uploads/shop_cover_img/${item.shop_image}`} alt="" style={{ borderRadius: '1rem', minWidth: '16rem', height: '9rem' }} />
                                                </Link>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">Since {item.reg_date.slice(0, 4)}</span>
                                            </div>
                                        </div>
                                        <div className="vendor-content-wrap">
                                            <div className="d-flex justify-content-between align-items-end mb-30">
                                                <div>
                                                    <h4 className="mb-5">
                                                        <Link
                                                            to={{
                                                                pathname: `/Seller_details/${item.seller_id}`,
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
                                                    <li><img src="assets/imgs/theme/icons/icon-contact.svg" alt="" /><strong>Call Us:</strong><span>(+91) {item.seller_mobile_no}</span></li>
                                                </ul>

                                            </div>
                                            <Link className='btn btn-xs'
                                                to={{
                                                    pathname: `/Sellers_material/${item.seller_id}`,
                                                }}
                                            >
                                                Visit Store <i className="fi-rs-arrow-small-right"></i></Link>
                                        </div>
                                    </div>

                                </div >
                            ))}

                        </div> */}
                        <div className="row vendor-grid">
                            {filteredData.map((item) => (
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4" key={item.id}>
                                    <div
                                        className="vendor-card shadow-sm border-0 rounded-4 h-100 d-flex flex-column justify-content-between"
                                        style={{
                                            background: "#fff",
                                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = "translateY(-5px)";
                                            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "translateY(0)";
                                            e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
                                        }}
                                    >
                                        {/* Image Section */}
                                        <div className="vendor-img-wrap position-relative overflow-hidden rounded-top-4" style={{ height: "180px" }}>
                                            <Link
                                                to={{
                                                    pathname: `/Seller_details/${item.seller_id}`,
                                                }}
                                            >
                                                <img
                                                    className="w-100 h-100"
                                                    src={`https://server-f8g6.onrender.com/uploads/shop_cover_img/${item.shop_image}`}
                                                    alt={item.shop_name}
                                                    style={{
                                                        objectFit: "cover",
                                                        borderRadius: "1rem 1rem 0 0",
                                                        transition: "transform 0.4s ease",
                                                    }}
                                                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                                />
                                            </Link>
                                            <span
                                                className="badge bg-success position-absolute top-2 start-2"
                                                style={{
                                                    fontSize: "0.8rem",
                                                    padding: "0.4rem 0.6rem",
                                                    borderRadius: "0.5rem",
                                                }}
                                            >
                                                Since {item.reg_date.slice(0, 4)}
                                            </span>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-3 d-flex flex-column justify-content-between flex-grow-1">
                                            <div className="d-flex justify-content-between align-items-start mb-2">
                                                <div>
                                                    <h5 className="mb-1 fw-bold">
                                                        <Link
                                                            to={{
                                                                pathname: `/Seller_details/${item.seller_id}`,
                                                            }}
                                                            style={{ color: "#333", textDecoration: "none" }}
                                                        >
                                                            {item.shop_name}
                                                        </Link>
                                                    </h5>
                                                    <div className="product-rate-cover d-flex align-items-center">
                                                        <div className="product-rate d-inline-block me-1">
                                                            <div className="product-rating" style={{ width: "90%" }}></div>
                                                        </div>
                                                        <span className="text-muted small">(4.0)</span>
                                                    </div>
                                                </div>
                                                <span className="font-small text-muted">{item.count} products</span>
                                            </div>

                                            <ul className="list-unstyled text-muted small mb-3">
                                                <li className="mb-1 d-flex align-items-start">
                                                    <img
                                                        src="assets/imgs/theme/icons/icon-location.svg"
                                                        alt=""
                                                        width="16"
                                                        className="me-2 mt-1"
                                                    />
                                                    <span>{item.seller_address}</span>
                                                </li>
                                                <li className="d-flex align-items-start">
                                                    <img
                                                        src="assets/imgs/theme/icons/icon-contact.svg"
                                                        alt=""
                                                        width="16"
                                                        className="me-2 mt-1"
                                                    />
                                                    <span>(+91) {item.seller_mobile_no}</span>
                                                </li>
                                            </ul>

                                            <div className="mt-auto">
                                                <Link
                                                    className="btn btn-sm btn-outline-success w-100 rounded-pill fw-semibold"
                                                    to={{
                                                        pathname: `/Sellers_material/${item.seller_id}`,
                                                    }}
                                                >
                                                    Visit Store <i className="fi-rs-arrow-small-right ms-1"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </main >
            <Footer />
        </div >
    );
};
export default Sellers;