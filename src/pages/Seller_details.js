import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import '../pages/Pages.css';
import Footer from "../components/Footer";

import Nav from "../components/Nav";
function Seller_details(props) {
    const { seller_id } = useParams();
    const [data, setData] = useState([]);
    const [material, setMaterial] = useState({
        val: 8,
        seller_id: seller_id

    });
    const [values, setValues] = useState({
        seller_email: '',
        owner_name: '',
        seller_address: '',
        seller_mobile_no: '',
        shop_name: '',
        reg_date: '',
        state: '',
        district: '',
        street: '',
        landmark: '',
        pincode: '',
        shop_image: '',
        shop_logo: '',
        seller_id: seller_id,
    });


    useEffect(() => {
        const handleFetch = async () => {
            try {
                const response = await axios.post('https://server-f8g6.onrender.com/latest_material_by_seller', material);
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

        handleFetch();
    }, []);

    axios.defaults.withCredentials = true;
    useEffect(() => {
        const handleSubmit = async () => {
            try {
                const response = await axios.post('https://server-f8g6.onrender.com/seller_details', values);
                if (response.data.success) {
                    // alert(response.data.size);
                    // console.log(response.data.data[0]);
                    setValues({
                        seller_email: response.data.data[0].seller_email,
                        owner_name: response.data.data[0].owner_name,
                        seller_address: response.data.data[0].seller_address,
                        seller_mobile_no: response.data.data[0].seller_mobile_no,
                        shop_name: response.data.data[0].shop_name,
                        reg_date: response.data.data[0].reg_date,
                        state: response.data.data[0].state,
                        district: response.data.data[0].district,
                        street: response.data.data[0].street,
                        landmark: response.data.data[0].landmark,
                        pincode: response.data.data[0].pincode,
                        shop_logo: response.data.data[0].shop_logo,
                        shop_image: response.data.data[0].shop_image,

                    });
                    // setData(response.data.data); // Assuming response.data.data contains the array of seller details

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

    return (
        <div>
            <Nav />
            <main className="main pages">
                <div className="page-content pt-50">
                    <div className="container">

                        {/* --- Seller Info Section --- */}
                        <div className="seller-header card border-0 shadow-sm rounded-4 p-4 mb-5">
                            <div className="row align-items-center">
                                {/* Shop Image */}
                                <div className="col-lg-4 text-center mb-4 mb-lg-0">
                                    <img
                                        src={`https://server-f8g6.onrender.com/uploads/shop_cover_img/${values.shop_image}`}
                                        alt={values.shop_name}
                                        className="rounded-4 shadow-sm"
                                        style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                                    />
                                </div>

                                {/* Seller Details */}
                                <div className="col-lg-5">
                                    <h2 className="fw-bold mb-2 text-brand">{values.shop_name}</h2>
                                    <p className="text-muted mb-1">Since {values.reg_date.slice(0, 4)}</p>
                                    <p className="text-muted mb-2">
                                        <strong>Owner:</strong> {values.owner_name}
                                    </p>
                                    <p className="text-muted mb-2">
                                        <strong>Address:</strong> {values.seller_address}
                                    </p>
                                    <p className="text-muted mb-3">
                                        <strong>Contact:</strong> (+91) {values.seller_mobile_no}
                                    </p>
                                    <div className="d-flex gap-3">
                                        <a href="/" className="btn btn-sm btn-outline-success rounded-pill px-4">
                                            Follow
                                        </a>
                                        <a href="/" className="btn btn-sm btn-success rounded-pill px-4">
                                            Visit Store
                                        </a>
                                    </div>
                                </div>

                                {/* Shop Logo + Social */}
                                <div className="col-lg-3 text-center">
                                    <img
                                        src={`https://server-f8g6.onrender.com/uploads/shop_logo/${values.shop_logo}`}
                                        alt="Shop Logo"
                                        className="rounded-circle shadow mb-3"
                                        style={{ width: '110px', height: '110px', objectFit: 'cover' }}
                                    />
                                    <div className="d-flex justify-content-center gap-3">
                                        <a href="/"><img src="../assets/imgs/theme/icons/social-fb.svg" alt="fb" width="22" /></a>
                                        <a href="/"><img src="../assets/imgs/theme/icons/social-insta.svg" alt="insta" width="22" /></a>
                                        <a href="/"><img src="../assets/imgs/theme/icons/social-whatsapp.svg" alt="whatsapp" width="22" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* --- Info Banner --- */}
                        <div className="text-center mb-5">
                            <h2 className="fw-bold mb-3">
                                From <span className="text-brand">Foundation</span> to <span className="text-brand">Finish</span>, We've Got You Covered!
                            </h2>
                            <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
                                Explore our extensive range of high-quality materials designed to support every stage of your construction journey.
                            </p>
                        </div>

                        {/* --- Features Section --- */}
                        <section className="row text-center mb-5">
                            {[
                                {
                                    icon: "icon-1.svg",
                                    title: "Best Prices & Offers",
                                    desc: "Unlock unbeatable value and incredible savings without compromising on quality!",
                                },
                                {
                                    icon: "icon-2.svg",
                                    title: "Wide Varieties",
                                    desc: "From essentials to specialty materials, we have everything under one roof!",
                                },
                                {
                                    icon: "icon-3.svg",
                                    title: "Top Quality",
                                    desc: "Experience the difference with materials crafted for durability and performance!",
                                },
                            ].map((feature, index) => (
                                <div key={index} className="col-md-4 mb-4">
                                    <div className="card border-0 shadow-sm p-4 h-100 rounded-4 hover-up">
                                        <img src={`assets/imgs/theme/icons/${feature.icon}`} alt="" className="mb-3" width="45" />
                                        <h5 className="fw-semibold mb-2">{feature.title}</h5>
                                        <p className="text-muted small">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </section>

                        {/* --- Materials Grid --- */}
                        <section className="product-tabs mb-5">
                            <div className="text-center mb-4">
                                <h2 className="fw-bold">
                                    Explore Materials by <span className="text-brand">{values.shop_name}</span>
                                </h2>
                            </div>

                            {/* <div className="row">
                                {data.length === 0 && (
                                    <p className="text-center text-muted">No materials available at the moment.</p>
                                )}
                                {data.map((item) => (
                                    <div className="col-xl-3 col-md-4 col-sm-6 mb-4" key={item.id}>
                                        <div
                                            className="card border-0 shadow-sm rounded-4 h-100 d-flex flex-column justify-content-between hover-up"
                                            style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                                        >
                                            <Link to={`/Material_details/${item.id}`}>
                                                <img
                                                    src={`https://server-f8g6.onrender.com/uploads/regd_material/${item.material_image}`}
                                                    alt={item.material_brand}
                                                    className="card-img-top rounded-top-4"
                                                    style={{ height: "180px", objectFit: "cover" }}
                                                />
                                            </Link>
                                            <div className="card-body d-flex flex-column justify-content-between">
                                                <div>
                                                    <h6 className="text-muted mb-1">{item.category}</h6>
                                                    <h5 className="fw-bold mb-2">{item.material_brand}</h5>
                                                    <p className="text-success fw-semibold mb-0">
                                                        ₹{item.material_price} <small className="text-muted">/ Unit</small>
                                                    </p>
                                                </div>
                                                <Link
                                                    className="btn btn-sm btn-outline-success rounded-pill mt-3"
                                                    to={`/Material_details/${item.id}`}
                                                >
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div> */}
                            <div className="row g-4">
                                {data.length === 0 && (
                                    <p className="text-center text-muted py-5">
                                        No materials available at the moment.
                                    </p>
                                )}

                                {data.map((item) => (
                                    <div className="col-xl-3 col-md-4 col-sm-6" key={item.id}>
                                        <div className="card material-card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                                            <Link to={`/Material_details/${item.id}`} className="position-relative d-flex justify-content-center align-items-center bg-light" style={{ height: "200px" }}>
                                                <img
                                                    src={`https://server-f8g6.onrender.com/uploads/regd_material/${item.material_image}`}
                                                    alt={item.material_brand}
                                                    className="p-2"
                                                    style={{
                                                        maxHeight: "100%",
                                                        maxWidth: "100%",
                                                        objectFit: "contain",
                                                        transition: "transform 0.3s ease",
                                                    }}
                                                />
                                                <span className="badge bg-success position-absolute top-0 start-0 m-3 rounded-pill px-3 py-2 fs-6 shadow-sm">
                                                    {item.category}
                                                </span>
                                            </Link>

                                            <div className="card-body d-flex flex-column justify-content-between p-3">
                                                <div>
                                                    <h5 className="fw-bold mb-1 text-dark text-truncate">
                                                        {item.material_brand}
                                                    </h5>
                                                    <p className="mb-2 text-muted small text-truncate">
                                                        {item.shop_name || "Verified Seller"}
                                                    </p>
                                                    <div className="d-flex align-items-baseline justify-content-between">
                                                        <p className="fw-semibold text-success mb-0 fs-6">
                                                            ₹{item.material_price}
                                                            <small className="text-muted"> / Unit</small>
                                                        </p>
                                                        <div className="d-flex align-items-center small text-warning">
                                                            <i className="fi-rs-star me-1"></i>4.0
                                                        </div>
                                                    </div>
                                                </div>

                                                <Link
                                                    to={`/Material_details/${item.id}`}
                                                    className="btn btn-outline-success rounded-pill mt-3 fw-semibold px-3 py-2 hover-btn"
                                                >
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </section>

                    </div>
                </div>
            </main>

            <Footer />
        </div >
    )
}
export default Seller_details;

