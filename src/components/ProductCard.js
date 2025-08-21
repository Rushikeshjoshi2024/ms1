function ProductCard({ product }) {
    // Fallback image if product.material_image is not available
    const imageUrl = product.material_image
        ? `https://server-f8g6.onrender.com/uploads/regd_material/${product.material_image}`
        : 'https://via.placeholder.com/300'; // A default placeholder

    return (
        <div className="product-card">
            <div className="product-image-container">
                <Link to={`/Material_details/${product.id}`}>
                    <img src={imageUrl} alt={product.material_name} className="product-image" />
                </Link>
                <div className="product-badge hot">15% Off</div>
            </div>
            <div className="product-content">
                <span className="product-category">#{product.category}</span>
                <h3 className="product-title">
                    <Link to={`/Material_details/${product.id}`}>{product.material_name}</Link>
                </h3>
                <div className="product-brand">{product.material_brand}</div>
                <div className="product-footer">
                    <div className="product-price">
                        <span>₹{product.material_price}</span>
                        <span className="price-unit">/Unit</span>
                    </div>
                    <button className="btn-add-to-cart">
                        <i className="fi-rs-shopping-cart mr-5"></i>
                        <span>Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
