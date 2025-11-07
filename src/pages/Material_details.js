import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
// import "animate.css"; // Optional: for subtle animations

const Material_details = () => {
    const { id } = useParams();

    const [values, setValues] = useState({
        material_name: "",
        material_category: "",
        material_price: "",
        material_brand: "",
        material_color: "",
        material_image: "",
        seller_id: "",
        shop_name: "",
        seller_mobile_no: "",
        state: "",
        district: "",
        street: "",
        landmark: "",
        pincode: "",
        shop_logo: "",
        shop_image: "",
        mat_id: id,
    });

    axios.defaults.withCredentials = true;

    useEffect(() => {
        const handleSubmit = async () => {
            try {
                const response = await axios.post(
                    "https://server-f8g6.onrender.com/material_details",
                    values
                );
                if (response.data.success) {
                    const d = response.data.data[0];
                    setValues({
                        material_name: d.material_name,
                        material_category: d.category,
                        material_price: d.material_price,
                        material_brand: d.material_brand,
                        material_color: d.material_color,
                        material_image: d.material_image,
                        seller_id: d.seller_id,
                        shop_name: d.shop_name,
                        seller_mobile_no: d.seller_mobile_no,
                        state: d.state,
                        district: d.district,
                        street: d.street,
                        landmark: d.landmark,
                        pincode: d.pincode,
                        shop_logo: d.shop_logo,
                        shop_image: d.shop_image,
                    });
                }
            } catch (err) {
                console.error(err);
            }
        };
        handleSubmit();
    }, []);

    return (
        <main className="main bg-light">
            <Nav />
            <div className="container my-5">
                <div className="row">
                    <div className="col-xl-10 col-lg-12 m-auto">
                        <div className="product-detail accordion-detail rounded-4 p-4 bg-white shadow-lg animate__animated animate__fadeIn">
                            <div className="row mb-5 mt-3 align-items-center">
                                {/* Product Image */}
                                <div className="col-md-6 col-sm-12 mb-md-0 mb-4">
                                    <div className="detail-gallery text-center bg-light rounded-4 p-3 shadow-sm position-relative overflow-hidden">
                                        <img
                                            src={`https://server-f8g6.onrender.com/uploads/regd_material/${values.material_image}`}
                                            alt="product"
                                            className="img-fluid rounded-3 shadow-sm object-fit-contain transition"
                                            style={{
                                                maxHeight: "420px",
                                                transition: "transform 0.3s ease-in-out",
                                            }}
                                            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                        />
                                        <span className="badge bg-primary position-absolute top-0 start-0 m-3 rounded-pill px-3 py-2">
                                            New
                                        </span>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="col-md-6 col-sm-12">
                                    <div className="detail-info px-3">
                                        <h2 className="title-detail mb-3 text-dark fw-semibold">
                                            {values.material_name}
                                        </h2>

                                        <div className="product-detail-rating mb-3">
                                            <div className="d-flex align-items-center">
                                                <div className="product-rate me-2">
                                                    <div
                                                        className="product-rating bg-warning"
                                                        style={{
                                                            width: "90%",
                                                            height: "10px",
                                                            borderRadius: "5px",
                                                        }}
                                                    ></div>
                                                </div>
                                                <span className="text-muted small">(32 reviews)</span>
                                            </div>
                                        </div>

                                        <div className="product-price-cover mb-3">
                                            <div className="product-price fw-bold fs-3 text-primary">
                                                ₹ {values.material_price}
                                            </div>
                                        </div>

                                        <p className="text-muted mb-4">
                                            Category:{" "}
                                            <span className="fw-semibold text-dark">
                                                {values.material_category}
                                            </span>
                                        </p>

                                        <div className="d-flex align-items-center gap-3 mb-4">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-lg d-flex align-items-center gap-2 shadow-sm px-4 py-2 rounded-3"
                                            >
                                                <i className="fi-rs-shopping-cart"></i> Add to Cart
                                            </button>
                                            <button className="btn btn-outline-danger rounded-circle p-3">
                                                <i className="fi-rs-heart"></i>
                                            </button>
                                            <button className="btn btn-outline-secondary rounded-circle p-3">
                                                <i className="fi-rs-shuffle"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tabs Section */}
                            <div className="product-info mt-4">
                                <ul className="nav nav-tabs border-bottom mb-4">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active fw-semibold"
                                            data-bs-toggle="tab"
                                            href="#info"
                                        >
                                            Information
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link fw-semibold"
                                            data-bs-toggle="tab"
                                            href="#vendor"
                                        >
                                            Seller
                                        </a>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    {/* Info Tab */}
                                    <div className="tab-pane fade show active" id="info">
                                        <table className="table table-striped align-middle text-capitalize">
                                            <tbody>
                                                <tr>
                                                    <th className="text-muted">Material Name</th>
                                                    <td>{values.material_name}</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-muted">Category</th>
                                                    <td>{values.material_category}</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-muted">Price</th>
                                                    <td>₹ {values.material_price}</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-muted">Brand</th>
                                                    <td>{values.material_brand}</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-muted">Color</th>
                                                    <td>{values.material_color}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Seller Tab */}
                                    <div className="tab-pane fade" id="vendor">
                                        <div className="vendor-logo d-flex align-items-center mb-4 p-3 rounded-4 bg-light shadow-sm">
                                            <img
                                                src={`https://server-f8g6.onrender.com/uploads/shop_logo/${values.shop_logo}`}
                                                alt="shop logo"
                                                className="rounded-circle me-3 border"
                                                width="70"
                                                height="70"
                                            />
                                            <div>
                                                <h5 className="fw-semibold mb-1">{values.shop_name}</h5>
                                                <div className="text-warning">
                                                    <i className="fi-rs-star"></i>
                                                    <i className="fi-rs-star"></i>
                                                    <i className="fi-rs-star"></i>
                                                    <i className="fi-rs-star"></i>
                                                    <i className="fi-rs-star-half"></i>
                                                </div>
                                                <small className="text-muted">(32 reviews)</small>
                                            </div>
                                        </div>

                                        <ul className="list-unstyled ps-2">
                                            <li className="mb-2">
                                                <img
                                                    src="assets/imgs/theme/icons/icon-location.svg"
                                                    alt=""
                                                    className="me-2"
                                                />
                                                <strong>Address:</strong> {values.street}, {values.district},{" "}
                                                {values.state}, {values.pincode}
                                            </li>
                                            <li>
                                                <img
                                                    src="assets/imgs/theme/icons/icon-contact.svg"
                                                    alt=""
                                                    className="me-2"
                                                />
                                                <strong>Contact:</strong> {values.seller_mobile_no}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Related Products */}
                            <div className="row mt-5">
                                <div className="col-12 mb-3">
                                    <h3 className="fw-semibold text-dark">Related Products</h3>
                                </div>

                                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                    <div className="product-cart-wrap hover-up shadow-sm rounded-4 p-3 bg-light transition">
                                        <div className="product-img product-img-zoom mb-3 text-center overflow-hidden rounded-4">
                                            <img
                                                className="default-img img-fluid rounded-3 transition"
                                                src="assets/imgs/shop/product-2-1.jpg"
                                                alt=""
                                                onMouseOver={(e) =>
                                                    (e.currentTarget.style.transform = "scale(1.1)")
                                                }
                                                onMouseOut={(e) =>
                                                    (e.currentTarget.style.transform = "scale(1)")
                                                }
                                                style={{ transition: "transform 0.3s ease-in-out" }}
                                            />
                                        </div>
                                        <h6 className="fw-semibold mb-1">Ultra Bass Headphone</h6>
                                        <p className="text-primary fw-bold mb-0">
                                            ₹238.85{" "}
                                            <span className="text-muted text-decoration-line-through ms-2">
                                                ₹245.80
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div className="col-12 mb-3">
                                    <h3 className="fw-semibold text-dark">More material from {values.shop_name}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default Material_details;
