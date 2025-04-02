import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Featured_category from "./Featured_category";
function Products() {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const [values, setValues] = useState({
        val: 8

    });
    axios.defaults.withCredentials = true;
    useEffect(() => {
        const handleSubmit = async () => {
            try {
                const response = await axios.post('https://server-f8g6.onrender.com/latest_material', values);
                if (response.data.success) {
                    // alert(response.seller_email);
                    console.log(response.data);
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


    return (
        <div>
            <Featured_category />


            <section className="product-tabs section-padding position-relative">
                <div className="container">
                    <div className="section-title style-2 wow animate__animated animate__fadeIn">
                        <h3>Latest Products</h3>
                        <ul className="nav nav-tabs links" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <Link className='btn btn-xs'
                                    to={{
                                        pathname: `/Products`,
                                        // your data array of objects
                                    }}
                                >
                                    <button className="nav-link active" id="nav-tab-one" data-bs-toggle="tab" data-bs-target="#tab-one" type="button" role="tab" aria-controls="tab-one" aria-selected="true">All</button>
                                </Link>
                            </li>
                            {/* <li className="nav-item" role="presentation">
                                <button className="nav-link" id="nav-tab-two" data-bs-toggle="tab" data-bs-target="#tab-two" type="button" role="tab" aria-controls="tab-two" aria-selected="false">Cement</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="nav-tab-three" data-bs-toggle="tab" data-bs-target="#tab-three" type="button" role="tab" aria-controls="tab-three" aria-selected="false">Tiles</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="nav-tab-four" data-bs-toggle="tab" data-bs-target="#tab-four" type="button" role="tab" aria-controls="tab-four" aria-selected="false">Marbel</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="nav-tab-five" data-bs-toggle="tab" data-bs-target="#tab-five" type="button" role="tab" aria-controls="tab-five" aria-selected="false">Steel</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="nav-tab-six" data-bs-toggle="tab" data-bs-target="#tab-six" type="button" role="tab" aria-controls="tab-six" aria-selected="false">Sanitary products</button>
                            </li> */}
                            {/* <li className="nav-item" role="presentation">
                            <button className="nav-link" id="nav-tab-seven" data-bs-toggle="tab" data-bs-target="#tab-seven" type="button" role="tab" aria-controls="tab-seven" aria-selected="false">Fruits</button>
                        </li> */}
                        </ul>
                    </div>
                    {/* <!--End nav-tabs--> */}
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                            <div className="row product-grid-4" >
                                {data.map(item => (
                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6" key={item.id}>
                                        <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <Link
                                                        to={{
                                                            pathname: `/Material_details/${item.id}`,
                                                            // your data array of objects
                                                        }}
                                                    >
                                                        <img className="default-img" src={`https://server-f8g6.onrender.com/uploads/regd_material/${item.material_image}`} style={{ height: '14rem' }} alt="" />
                                                        {/* <img className="hover-img" src="assets/imgs/shop/product-1-2.jpg" alt="" /> */}
                                                    </Link>
                                                </div>
                                                {/* <div className="product-action-1">
                                            <a aria-label='Add To Wishlist' className='action-btn' href='shop-wishlist.html'><i className="fi-rs-heart"></i></a>
                                            <a aria-label='Compare' className='action-btn' href='shop-compare.html'><i className="fi-rs-shuffle"></i></a>
                                            <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                        </div> */}
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="hot">New</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <div className="product-" style={{ marginBlock: '1rem' }}>
                                                    #{item.category}
                                                </div>
                                                <h2> <Link
                                                    to={{
                                                        pathname: `/Material_details/${item.id}`,
                                                    }}
                                                >
                                                    {item.material_brand}</Link></h2>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: '90%' }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                </div>
                                                <div>
                                                    <span className="font-small text-muted">By <a href='#'>{item.shop_name}</a></span>
                                                </div>
                                                <div className="product-card-bottom">
                                                    <div className="product-price">
                                                        <span>{item.material_price}/Unit</span>
                                                        {/* <span className="old-price">2500</span> */}
                                                    </div>
                                                    <div className="add-cart">
                                                        <a className='add' href='/'><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
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


    );

};
export default Products;