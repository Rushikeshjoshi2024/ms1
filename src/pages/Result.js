import Nav from "../components/Nav";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// import axios from 'axios';
import Footer from "../components/Footer";
const Result = () => {
    const location = useLocation();
    const { data } = location.state || {};
    const { query } = location.state || {};
    const [filterquery, setFilterquery] = useState('');

    const handleSearchChange = (event) => {
        setFilterquery(event.target.value);
    };


    const filteredData = data.filter(item =>
        (item.district && item.district.toLowerCase().includes(filterquery.toLowerCase())) || (item.seller_address && item.seller_address.toLowerCase().includes(filterquery.toLowerCase()))
    );
    console.log(data);
    console.log(filteredData);
    // alert(filterquery);

    return (
        <div >

            <Nav />
            <main className="main">
                <div className="page-header mt-30 mb-50">
                    <div className="container">
                        <div className="archive-header">
                            <div className="row align-items-center">
                                <div className="col-xl-12">
                                    <h1 className="mb-15">Result for : {query}</h1>
                                    <div className="breadcrumb">

                                        {/* <h6>the small intro about the shop</h6> */}
                                    </div>
                                </div>
                                {/* <div className="col-xl-9 text-end d-none d-xl-block">
                                    <ul className="tags-list">
                                        <li className="hover-up">
                                            <a href='blog-category-grid.html'><i className="fi-rs-cross mr-10"></i>Cabbage</a>
                                        </li>
                                        <li className="hover-up active">
                                            <a href='blog-category-grid.html'><i className="fi-rs-cross mr-10"></i>Broccoli</a>
                                        </li>
                                        <li className="hover-up">
                                            <a href='blog-category-grid.html'><i className="fi-rs-cross mr-10"></i>Artichoke</a>
                                        </li>
                                        <li className="hover-up">
                                            <a href='blog-category-grid.html'><i className="fi-rs-cross mr-10"></i>Celery</a>
                                        </li>
                                        <li className="hover-up mr-0">
                                            <a href='blog-category-grid.html'><i className="fi-rs-cross mr-10"></i>Spinach</a>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container mb-30">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-9">
                            <div className="shop-product-fillter">
                                <div className="totall-product">
                                    <p>We found <strong className="text-brand">{filteredData.length}</strong> items for you!</p>
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
                            <div className="row product-grid">
                                {filteredData.map(item => (
                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6" key={item.id}>
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <Link
                                                        to={{
                                                            pathname: `/Material_details/${item.id}`,
                                                            // your data array of objects
                                                        }}
                                                    >
                                                        <img className="default-img" src={`https://server-f8g6.onrender.com/uploads/regd_material/${item.material_image}`} alt="" />
                                                    </Link>
                                                </div>

                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="hot">New</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div classNameName="product-" style={{ marginBlock: '1rem' }}>
                                                    #{item.category}
                                                </div>
                                                <h2><Link
                                                    to={{
                                                        pathname: `/Material_details/${item.id}`,
                                                    }}> {item.material_name}</Link></h2>
                                                <div>
                                                    <span className="font-small text-muted">By
                                                        {" " + item.material_brand}</span>
                                                </div>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: '90%' }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>Rs. {item.material_price}</span>
                                                    </div>
                                                    <div className="add-cart">
                                                        <Link classNameName='add'
                                                            to={{
                                                                pathname: `/Material_details/${item.id}`,
                                                            }}
                                                        ><i
                                                            className="fi-rs-shopping-cart mr-5"></i>View </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>

                            <section className="section-padding pb-5">
                                <div className="section-title">
                                    <h3 className="">Deals Of The Day</h3>
                                    <a className='show-all' href='shop-grid-right.html'>
                                        All Deals
                                        <i className="fi-rs-angle-right"></i>
                                    </a>
                                </div>
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="product-cart-wrap style-2">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img">
                                                    <a href='shop-product-right.html'>
                                                        <img src="../assets/imgs/banner/banner-5.png" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="deals-countdown-wrap">
                                                    <div className="deals-countdown" data-countdown="2025/03/25 00:00:00"></div>
                                                </div>
                                                <div className="deals-content">
                                                    <h2><a href='shop-product-right.html'>Seeds of Change Organic Quinoa,
                                                        Brown</a></h2>
                                                    <div className="product-rate-cover">
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ width: '90%' }}></div>
                                                        </div>
                                                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                    </div>
                                                    <div>
                                                        <span className="font-small text-muted">By <a
                                                            href='vendor-details-1.html'>NestFood</a></span>
                                                    </div>
                                                    <div className="product-card-bottom">
                                                        <div className="product-price">
                                                            <span>$32.85</span>
                                                            <span className="old-price">$33.8</span>
                                                        </div>
                                                        <div className="add-cart">
                                                            <a className='add' href='shop-cart.html'><i
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
                            <div className="sidebar-widget widget-category-2 mb-30 mt-75" >
                                <h5 className="section-title style-1 mb-30">Cities</h5>
                                <ul style={{ overflow: 'auto', height: '18rem' }}>
                                    <li style={{ maxHeight: '3rem' }}>
                                        <a href='shop-grid-right.html'> Nanded</a><span><input className="form-check" type="radio" name="checkbox" id="exampleCheckbox" value="Nanded" onChange={handleSearchChange} />
                                        </span>
                                    </li>
                                    <li style={{
                                        maxHeight: '3rem'
                                    }}>
                                        <a href='shop-grid-right.html'> Pune</a><span> <input className="form-check" type="radio" name="checkbox"
                                            id="exampleCheckbox1" value="Pune" onChange={handleSearchChange} />
                                        </span>
                                    </li>
                                    <li style={{
                                        maxHeight: '3rem'
                                    }}>
                                        <a href='shop-grid-right.html'> Mumbai</a><span > <input className="form-check" type="radio" name="checkbox"
                                            id="exampleCheckbox" value="Mumbai" onChange={handleSearchChange} />
                                        </span>
                                    </li>
                                    <li style={{
                                        maxHeight: '3rem'
                                    }}><a href='shop-grid-right.html'> Delhi</a><span><input className="form-check" type="radio" name="checkbox"
                                        id="exampleCheckbox" value="Delhi" onChange={handleSearchChange} />
                                        </span>
                                    </li>
                                    <li style={{
                                        maxHeight: '3rem'
                                    }}><a href='shop-grid-right.html'> Hyderabad</a><span> <input className="form-check" type="radio" name="checkbox"
                                        id="exampleCheckbox" value="Hyderabad" onChange={handleSearchChange} />
                                        </span>
                                    </li>

                                </ul>
                            </div>
                            <div className="sidebar-widget price_range range mb-30">
                                <h5 className="section-title style-1 mb-30">Filter by :</h5>
                                {/* <div className="price-filter">
                                    <div className="price-filter-inner">
                                        <div id="slider-range" className="mb-20"></div>
                                        <div className="d-flex justify-content-between">
                                            <div className="caption">From: <strong id="slider-range-value1"
                                                className="text-brand"></strong></div>
                                            <div className="caption">To: <strong id="slider-range-value2"
                                                className="text-brand"></strong></div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="list-group">
                                    <div className="list-group-item mb-10 mt-10">
                                        <label className="fw-900">Category</label>
                                        <div className="custome-checkbox" style={{ overflow: 'auto', height: '8rem' }}>
                                            <input className="form-check-input" type="checkbox" name="checkbox"
                                                id="exampleCheckbox1" value="cement" />
                                            <label className="form-check-label" for="exampleCheckbox1"><span>Cement</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox"
                                                id="exampleCheckbox2" value="" />
                                            <label className="form-check-label" for="exampleCheckbox2"><span>Tiles</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox"
                                                id="exampleCheckbox3" value="" />
                                            <label className="form-check-label" for="exampleCheckbox3"><span>Marbel</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox"
                                                id="exampleCheckbox3" value="" />
                                            <label className="form-check-label" for="exampleCheckbox3"><span>Granite</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox"
                                                id="exampleCheckbox3" value="" />
                                            <label className="form-check-label" for="exampleCheckbox3"><span>Colors</span></label>
                                        </div>
                                        <label className="fw-900 mt-15">Brand</label>
                                        <div className="custome-checkbox" style={{ overflow: 'auto', height: '8rem' }}>
                                            <input className="form-check-input" type="checkbox" name="checkbox"
                                                id="exampleCheckbox11" value="" />
                                            <label className="form-check-label" for="exampleCheckbox11"><span>Ambuja</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox"
                                                id="exampleCheckbox21" value="" />
                                            <label className="form-check-label" for="exampleCheckbox21"><span>Sera</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox"
                                                id="exampleCheckbox31" value="" />
                                            <label className="form-check-label" for="exampleCheckbox31"><span>Varmora</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox"
                                                id="exampleCheckbox31" value="" />
                                            <label className="form-check-label" for="exampleCheckbox31"><span>demo</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox"
                                                id="exampleCheckbox31" value="" />
                                            <label className="form-check-label" for="exampleCheckbox31"><span>demo2</span></label>
                                        </div>
                                    </div>
                                </div>
                                {/* <a className='btn btn-sm btn-default' href='shop-grid-right.html'><i className="fi-rs-filter mr-5"></i>
                                    Fillter</a> */}
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
            </main >
            <Footer />
        </div >
    );
};
export default Result;