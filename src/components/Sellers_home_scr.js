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
                    <h3 className="mb-4">Our Sellers</h3>
                    <ul className="nav nav-tabs links" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <Link to="/Sellers" className="btn p-0 border-0 bg-transparent">
                                <i className="fas fa-angle-right" style={{ color: 'black', fontSize: '1.5rem' }}></i>
                            </Link>
                        </li>
                    </ul>

                </div>

                <div className="row vendor-grid">
                    {data.map((item) => (
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4" key={item.id}>
                            <div
                                className="product-card border rounded h-100 d-flex flex-column shadow-sm"
                                style={{ transition: 'transform 0.3s ease' }}
                            >
                                {/* Seller Logo */}
                                <Link to={`/Seller_details/${item.seller_id}`}>
                                    <img
                                        src={`https://server-f8g6.onrender.com/uploads/shop_logo/${item.shop_logo}`}
                                        alt={item.shop_name}
                                        className="w-100"
                                        style={{
                                            height: '14rem',
                                            objectFit: 'contain',
                                            padding: '0.5rem',
                                            backgroundColor: '#f9f9f9',
                                            borderTopLeftRadius: '0.5rem',
                                            borderTopRightRadius: '0.5rem',
                                        }}
                                    />
                                </Link>

                                {/* Seller Info */}
                                <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                                    <div>
                                        <h5 className="card-title mb-1">
                                            <Link to={`/Seller_details/${item.seller_id}`} className="text-decoration-none text-dark">
                                                {item.shop_name}
                                            </Link>
                                        </h5>
                                        <small className="text-muted d-block mb-2">
                                            Since <strong>{item.reg_date.slice(0, 4)}</strong>
                                        </small>

                                        <div className="d-flex align-items-center mb-2">
                                            <div
                                                className="bg-warning rounded-pill me-2"
                                                style={{ width: '60px', height: '8px' }}
                                            ></div>
                                            <span className="text-muted small">(4.0)</span>
                                        </div>

                                        <p className="text-muted small mb-2 d-flex align-items-center">
                                            <img
                                                src="assets/imgs/theme/icons/icon-location.svg"
                                                alt="location"
                                                style={{ width: '1rem', marginRight: '0.5rem' }}
                                            />
                                            {item.seller_address}
                                        </p>

                                        <p className="text-muted small mb-2">{item.count} products</p>
                                    </div>

                                    {/* Visit Store + Categories */}
                                    <div className="mt-auto">
                                        <Link
                                            to={`/Sellers_material/${item.seller_id}`}
                                            className="btn btn-outline-primary btn-sm w-100 mt-2"
                                        >
                                            Visit Store <i className="fi-rs-arrow-small-right"></i>
                                        </Link>

                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            {[2, 3, 5].map((num) => (
                                                <img
                                                    key={num}
                                                    src={`assets/imgs/category/cat-${num}.png`}
                                                    className="img-fluid rounded"
                                                    alt={`Category ${num}`}
                                                    style={{ width: '2.5rem', height: '2.5rem', objectFit: 'cover' }}
                                                />
                                            ))}
                                            <span className="text-muted small align-self-center">+15</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            {/* <?/div> */}


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