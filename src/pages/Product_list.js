import Nav from "../components/Nav";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from "../components/Footer";
const Product_list = () => {

    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');


    axios.defaults.withCredentials = true;
    useEffect(() => {
        const handleSubmit = async () => {
            try {
                const response = await axios.get('https://server-f8g6.onrender.com/all_material');


                console.log(response);
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
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Step 3: Filter the data based on the search query
    const filteredData = data.filter(item =>
        item.material_brand.toLowerCase().includes(searchQuery.toLowerCase()) || item.category.toLowerCase().includes(searchQuery.toLowerCase()) || item.material_name.includes(searchQuery.toLowerCase())
    );



    return (
        <div>
            <Nav />
            <main className="main">

                <div className="container mb-30">
                    <div className="archive-header-2 text-center">
                        <h1 className="display-2 mb-50">All Materials</h1>
                        <div className="row">
                            <div className="col-lg-5 mx-auto">
                                <div className="sidebar-widget-2 widget_search mb-50">
                                    <div className="search-form">
                                        <form action="#">
                                            <input type="text" value={searchQuery}
                                                onChange={handleSearchChange}
                                                placeholder="Search material by name or brand." />
                                            <button disabled><i className="fi-rs-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row flex-row-reverse">
                        <div className="col-lg-12">
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

                            {filteredData.map(item => (
                                <div className="product-list mb-50">
                                    <div className="product-cart-wrap" key={item.id}>
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <div className="product-img-inner">
                                                    <Link
                                                        to={{
                                                            pathname: `/Material_details/${item.id}`,
                                                            // your data array of objects
                                                        }}
                                                    >
                                                        <img className="default-img" src={`https://server-f8g6.onrender.com/uploads/${item.material_image}`} alt="" />
                                                        {/* <img className="hover-img" src="assets/imgs/shop/product-2-2.jpg" alt="" /> */}
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">NEW</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">

                                            <h2> <Link
                                                to={{
                                                    pathname: `/Material_details/${item.id}`,
                                                    // your data array of objects
                                                }}
                                            >{item.material_name}</Link></h2>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: '90%' }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                <span className="ml-30">{item.material_brand}</span>
                                            </div>
                                            <p className="mt-15 mb-15">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam beatae consectetur, atque inventore aliquam adipisci perspiciatis nostrum qui consequatur praesentium?</p>
                                            <div className="product-price">
                                                <span>{item.material_price}/Unit </span>
                                                {/* <span className="old-price">$245.</span> */}
                                            </div>
                                            <div className="mt-30 d-flex align-items-center">
                                                <a aria-label='Buy now' className='btn' href='shop-cart.html'><i className="fi-rs-shopping-cart mr-5"></i>Add to Cart</a>
                                                {/* <a href="/" className="add-wishlish ml-30 text-body font-sm font-heading font-weight-bold"><i className="fi-rs-shuffle mr-5"></i>Add Compare</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}




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
                </div>
            </main >
            <Footer />
        </div >
    );
};
export default Product_list;