import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import '../pages/Pages.css';
import { Link } from 'react-router-dom';

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import MaterialCard from "../../src/components/MatCard";

import { useParams } from 'react-router-dom';

function Sellers_materaial(props) {
    const [data, setData] = useState([]);
    const [shopName, setShopName] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const { seller_id } = useParams();
    // const [searchQuery, setSearchQuery] = useState('');
    const [values, setValues] = useState({
        seller_id: seller_id

    });
    axios.defaults.withCredentials = true;
    useEffect(() => {
        const handleSubmit = async () => {
            try {
                const response = await axios.post('https://server-f8g6.onrender.com/all_material_by_seller_list', values);
                if (response.data.success) {
                    // alert(response.seller_email);
                    setShopName(response.data.data[0].shop_name);
                    setData(response.data.data); // Assuming response.data.data contains the array of seller details
                } else {
                    alert("Invalid data");
                }
            } catch (err) {
                alert("An error occurred: " + err);
            }
        };

        handleSubmit();
    }, []);

    useEffect(() => {
        const handleSubmit = async () => {
            try {
                const response = await axios.get('https://server-f8g6.onrender.com/all_category');
                if (response.data.success) {
                    // alert(response.seller_email);
                    setCategoryData(response.data.data); // Assuming response.data.data contains the array of seller details

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
            <Nav />
            <main className="main">
                <div className="page-header mt-30 mb-50">
                    <div className="container">
                        <div className="archive-header">
                            <div className="row align-items-center">
                                <div className="col-xl-3">
                                    <h1 className="mb-15">{shopName}</h1>
                                    <div className="breadcrumb">

                                        <h6>the small intro about the shop</h6>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container mb-30">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-9">
                            <div className="shop-product-fillter">
                                <div className="totall-product">
                                    <p>We found <strong className="text-brand">{data.length}</strong> items for you!</p>
                                </div>
                                <div className="sort-by-product-area">
                                    <div classNameName="sort-by-cover mr-10">
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
                                                <li><a className="active" href="/">Featured</a></li>
                                                <li><a href="/">Price: Low to High</a></li>
                                                <li><a href="/">Price: High to Low</a></li>
                                                <li><a href="/">Release Date</a></li>
                                                <li><a href="/">Avg. Rating</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {data.length === 0 ? (
                                    <p className="text-center text-muted">No materials available.</p>
                                ) : (
                                    data.map(item => <MaterialCard key={item.id} item={item} />)
                                )}
                            </div>

                            <section className="section-padding pb-5">
                                <div className="section-title">
                                    <h3 className="">Deals Of The Day</h3>
                                    <a className='show-all' href='/#'>
                                        All Deals
                                        <i className="fi-rs-angle-right"></i>
                                    </a>
                                </div>
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="product-cart-wrap style-2">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img">
                                                    <a href='/'>
                                                        <img src="../assets/imgs/banner/banner-5.png" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="deals-countdown-wrap">
                                                    <div className="deals-countdown" data-countdown="2025/03/25 00:00:00"></div>
                                                </div>
                                                <div className="deals-content">
                                                    <h2><a href=''>Seeds of Change Organic Quinoa,
                                                        Brown</a></h2>
                                                    <div className="product-rate-cover">
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ width: '90%' }}></div>
                                                        </div>
                                                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                    </div>
                                                    <div>
                                                        <span className="font-small text-muted">By <a
                                                            href='/#'>NestFood</a></span>
                                                    </div>
                                                    <div className="product-card-bottom">
                                                        <div className="product-price">
                                                            <span>$32.85</span>
                                                            <span className="old-price">$33.8</span>
                                                        </div>
                                                        <div className="add-cart">
                                                            <a className='add' href='/#'><i
                                                                className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-lg-3 primary-sidebar sticky-sidebar">
                            <div className="sidebar-widget widget-category-2 mb-30 mt-75">
                                <h5 className="section-title style-1 mb-30">Categories</h5>
                                <ul>
                                    {categoryData.slice(0, 5).map(item => (

                                        <li>
                                            <a href='/'> <img src={"../assets/imgs/category/" + item.logo}
                                                alt="" />{item.category}</a><span className="count">{item.count}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="sidebar-widget price_range range mb-30">
                                <h5 className="section-title style-1 mb-30">Fill by price</h5>
                                <div className="price-filter">
                                    <div className="price-filter-inner">
                                        <div id="slider-range" className="mb-20"></div>
                                        <div className="d-flex justify-content-between">
                                            <div className="caption">From: <strong id="slider-range-value1"
                                                className="text-brand"></strong></div>
                                            <div className="caption">To: <strong id="slider-range-value2"
                                                className="text-brand"></strong></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group">
                                    <div className="list-group-item mb-10 mt-10">
                                        <label className="fw-900">Color</label>
                                        <div className="custome-checkbox">
                                            <input className="form-check-input" type="checkbox" name="checkbox"
                                                id="exampleCheckbox1" value="" />
                                            <label className="form-check-label"><span>Red (56)</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox"
                                                id="exampleCheckbox2" value="" />
                                            <label className="form-check-label" ><span>Green
                                                (78)</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox"
                                                id="exampleCheckbox3" value="" />
                                            <label className="form-check-label" ><span>Blue
                                                (54)</span></label>
                                        </div>
                                        <label className="fw-900 mt-15">Item Condition</label>
                                        <div className="custome-checkbox">
                                            <input className="form-check-input" type="checkbox" name="checkbox"
                                                id="exampleCheckbox11" value="" />
                                            <label className="form-check-label" ><span>New
                                                (1506)</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox"
                                                id="exampleCheckbox21" value="" />
                                            <label className="form-check-label" ><span>Refurbished
                                                (27)</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox"
                                                id="exampleCheckbox31" value="" />
                                            <label className="form-check-label" ><span>Used
                                                (45)</span></label>
                                        </div>
                                    </div>
                                </div>
                                <a className='btn btn-sm btn-default' href='/#'><i className="fi-rs-filter mr-5"></i>
                                    Fillter</a>
                            </div>
                            {/* <div className="sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10">
                                <h5 className="section-title style-1 mb-30">New products</h5>
                                <div className="single-post clearfix">
                                    <div className="image">
                                        <img src="assets/imgs/shop/thumbnail-3.jpg" alt="#" />
                                    </div>
                                    <div className="content pt-10">
                                        <h5><a href="shop-product-detail.html">Chen Cardigan</a></h5>
                                        <p className="price mb-0 mt-5">$99.50</p>
                                        <div className="product-rate">
                                            <div className="product-rating" style={{ width: '90%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post clearfix">
                                    <div className="image">
                                        <img src="assets/imgs/shop/thumbnail-4.jpg" alt="#" />
                                    </div>
                                    <div className="content pt-10">
                                        <h6><a href="shop-product-detail.html">Chen Sweater</a></h6>
                                        <p className="price mb-0 mt-5">$89.50</p>
                                        <div className="product-rate">
                                            <div className="product-rating" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-post clearfix">
                                    <div className="image">
                                        <img src="assets/imgs/shop/thumbnail-5.jpg" alt="#" />
                                    </div>
                                    <div className="content pt-10">
                                        <h6><a href="shop-product-detail.html">Colorful Jacket</a></h6>
                                        <p className="price mb-0 mt-5">$25</p>
                                        <div className="product-rate">
                                            <div className="product-rating" style={{ width: '60%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Sellers_materaial;