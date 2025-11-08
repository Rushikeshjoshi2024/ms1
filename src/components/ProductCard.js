import React from "react";
import { Link } from "react-router-dom";
import "./BestOf.css";

function ProductCard({ product }) {
    const imageUrl = product.material_image
        ? `https://server-f8g6.onrender.com/uploads/regd_material/${product.material_image}`
        : "https://via.placeholder.com/300";

    return (
        <div className="product-card">
            <div className="product-image-container">
                <Link to={`/Material_details/${product.id}`}>
                    <img
                        src={imageUrl}
                        alt={product.material_name}
                        className="product-image"
                    />
                </Link>
                <div className="product-badge">15% Off</div>
            </div>

            <div className="product-content">
                <span className="product-category">#{product.category}</span>
                <h3 className="product-title">
                    <Link to={`/Material_details/${product.id}`}>
                        {product.material_name}
                    </Link>
                </h3>

                <div className="product-brand">{product.material_brand}</div>

                <div className="product-footer">
                    <div className="product-price">
                        <span className="price-value">₹{product.material_price}</span>
                        <span className="price-unit">/Unit</span>
                    </div>

                    <button className="btn-add-to-cart">
                        <i className="fi-rs-shopping-cart"></i>
                        <span>Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
