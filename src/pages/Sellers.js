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
                        {/* {filteredData.map(item => (
                            <li key={item.id}>{item.shop_name}</li>
                        ))} */}

                        <div className="row vendor-grid" >
                            {filteredData.map(item => (

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
                                                    <li><img src="assets/imgs/theme/icons/icon-contact.svg" alt="" /><strong>Call Us:</strong><span>(+91) {item.seller_mobile_no}</span></li>
                                                </ul>

                                            </div>
                                            {/* <a className='btn btn-xs' href='vendor-details-1.html'> */}
                                            <Link className='btn btn-xs'
                                                to={{
                                                    pathname: `/Sellers_material/${item.seller_id}`,
                                                    // your data array of objects
                                                }}
                                            >
                                                Visit Store <i className="fi-rs-arrow-small-right"></i></Link>
                                        </div>
                                    </div>

                                </div >
                            ))}

                        </div>




                        {/* <div className="row vendor-grid">
                            {data.map((seller, index) => (
                                <div className="col-lg-3 col-md-6 col-12 col-sm-6">


                                    <div className="vendor-wrap mb-40" key={index} >
                                        <div className="vendor-img-action-wrap">
                                            <div className="vendor-img">
                                                <a href='vendor-details-1.html'>
                                                    <img className="default-img" src="assets/imgs/vendor/vendor-1.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">New</span>
                                            </div>
                                        </div>
                                        <div className="vendor-content-wrap">
                                            <div className="d-flex justify-content-between align-items-end mb-30">
                                                <div>
                                                    <div className="product-category">
                                                        <span className="text-muted">Since 2024</span>
                                                    </div>
                                                    <h4 className="mb-5"><a href='vendor-details-1.html'>{seller.shop_name}</a></h4>
                                                    <div className="product-rate-cover">
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ width: '90%' }}></div>
                                                        </div>
                                                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                    </div>
                                                </div>
                                                <div className="mb-10">
                                                    <span className="font-small total-product">380 products</span>
                                                </div>
                                            </div>
                                            <div className="vendor-info mb-30">
                                                <ul className="contact-infor text-muted">
                                                    <li><img src="assets/imgs/theme/icons/icon-location.svg" alt="" /><strong>Address: </strong> <span>{seller.seller_address}</span></li>
                                                    <li><img src="assets/imgs/theme/icons/icon-contact.svg" alt="" /><strong>Call Us:</strong><span>(+91) {seller.seller_mobile_no}</span></li>
                                                </ul>

                                            </div>
                                            <a className='btn btn-xs' href='vendor-details-1.html'>Visit Store <i className="fi-rs-arrow-small-right"></i></a>
                                        </div>
                                    </div>

                                </div >
                            ))}



                        </div> */}

                        {/* <div className="pagination-area mt-20 mb-20">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-start">
                                    <li className="page-item">
                                        <a className="page-link" href="/"><i className="fi-rs-arrow-small-left"></i></a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="/">1</a></li>
                                    <li className="page-item active"><a className="page-link" href="/">2</a></li>
                                    <li className="page-item"><a className="page-link" href="/">3</a></li>
                                    <li className="page-item"><a className="page-link dot" href="/">...</a></li>
                                    <li className="page-item"><a className="page-link" href="/">6</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="/"><i className="fi-rs-arrow-small-right"></i></a>
                                    </li>
                                </ul>
                            </nav>
                        </div> */}
                    </div>
                </div>
                {/* </div> */}
            </main >
            <Footer />
        </div >
    );
};
export default Sellers;