import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Sellers.css';

// --- Helper Component: Star Rating ---
const StarRating = ({ rating }) => {
    // ... (This component is already mobile-friendly and does not need changes)
    const totalStars = 5;
    const filledStars = Math.round(rating);
    return (
        <div className="star-rating">
            {[...Array(totalStars)].map((_, index) => (
                <span key={index} className={index < filledStars ? 'star-filled' : 'star-empty'}>★</span>
            ))}
            <span className="rating-text">({rating.toFixed(1)})</span>
        </div>
    );
};

// --- Helper Component: Seller Card ---
const SellerCard = ({ seller }) => {
    // ... (This component's structure is fine, responsiveness is handled by CSS)
    const {
        seller_id, shop_logo, shop_name = "Unnamed Store", reg_date = new Date().toISOString(),
        seller_address = "No address provided", count = 0
    } = seller;
    const registrationYear = reg_date.slice(0, 4);
    const logoUrl = `https://server-f8g6.onrender.com/uploads/shop_logo/${shop_logo}`;
    return (
        <div className="seller-card">
            <Link to={`/Seller_details/${seller_id}`} className="seller-logo-link">
                <div className="seller-logo-container">
                    <img
                        src={logoUrl} alt={`${shop_name} logo`} className="seller-logo"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/default/image.png' }}
                    />
                </div>
            </Link>
            <div className="seller-card-body">
                <div className="seller-info">
                    <h5 className="seller-title"><Link to={`/Seller_details/${seller_id}`}>{shop_name}</Link></h5>
                    <p className="seller-meta-info text-muted">Active Since <strong>{registrationYear}</strong></p>
                    <StarRating rating={4.0} />
                    <p className="seller-address"><i className="fas fa-map-marker-alt"></i>{seller_address}</p>
                </div>
                <div className="seller-card-footer">
                    <p className="product-count">{count} products</p>
                    <Link to={`/Sellers_material/${seller_id}`} className="visit-store-btn">
                        Visit Store <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

// --- Main Exported Component: SellersHomeScreen ---
function SellersHomeScreen() {
    // ... (All the data fetching logic remains the same)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.defaults.withCredentials = true;
        const fetchSellers = async () => {
            try {
                const response = await axios.post('https://server-f8g6.onrender.com/all_sellers_home', { val: 8 });
                if (response.data.success) { setData(response.data.data); }
                else { setError("Failed to fetch seller data."); }
            } catch (err) {
                console.error("An error occurred:", err);
                setError("An error occurred while connecting to the server.");
            } finally { setLoading(false); }
        };
        fetchSellers();
    }, []);

    if (loading) {
        return <div className="loading-container"><div className="spinner"></div><p>Loading Sellers...</p></div>;
    }

    if (error) {
        return <div className="error-container"><p>{error}</p></div>;
    }

    return (
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
                {data.map((seller) => (
                    // RESPONSIVE CHANGE: Added `col-12` for mobile and `col-xl-3` for extra-large screens.
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-4" key={seller.seller_id}>
                        <SellerCard seller={seller} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SellersHomeScreen;