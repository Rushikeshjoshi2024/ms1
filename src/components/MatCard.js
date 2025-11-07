import React from "react";
import { Link } from "react-router-dom";

const MatCard = ({ item }) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={item.id}>
            <div className="product-cart-wrap card h-100 shadow-sm border-0 rounded-3">
                {/* Image Section */}
                <div
                    className="product-img-action-wrap position-relative bg-light d-flex justify-content-center align-items-center"
                    style={{ height: "220px", borderRadius: "10px" }}
                >
                    <Link to={`/Material_details/${item.id}`}>
                        <img
                            src={`https://server-f8g6.onrender.com/uploads/regd_material/${item.material_image}`}
                            alt={item.material_name}
                            className="card-img-top"
                            style={{
                                maxHeight: "200px",
                                width: "auto",
                                objectFit: "contain",
                            }}
                        />
                    </Link>

                    {/* Badge */}
                    <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                        NEW
                    </span>
                </div>

                {/* Card Body */}
                <div className="card-body">
                    {/* Title */}
                    <h5 className="card-title mb-2">
                        <Link
                            to={`/Material_details/${item.id}`}
                            className="text-dark text-decoration-none"
                        >
                            {item.material_name}
                        </Link>
                    </h5>

                    {/* Rating + Brand */}
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="text-warning small">
                            <i className="fi fi-rs-star"></i> 4.0
                        </div>
                        <span className="text-muted small">{item.material_brand}</span>
                    </div>

                    {/* Description */}
                    <p className="text-muted small mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                    {/* Price + Button */}
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold text-brand">
                            {item.material_price}/Unit
                        </span>
                        <button
                            className="btn btn-sm btn-outline-primary d-flex align-items-center gap-1"
                            onClick={() => alert(`Added ${item.material_name} to cart!`)}
                        >
                            <i className="fi-rs-shopping-cart"></i> Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatCard;
