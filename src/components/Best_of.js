import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Import the new components and styles
import ProductCard from './ProductCard';
import './Card.css'; // Make sure the path is correct

// A simple component to render the grid
const ProductGrid = ({ products, isLoading }) => {
    if (isLoading) {
        // Show skeleton loaders while loading
        return (
            <div className="product-grid">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="product-card-skeleton"></div> // You would style this skeleton
                ))}
            </div>
        );
    }

    if (!products || products.length === 0) {
        return <p>No products found.</p>;
    }

    return (
        <div className="product-grid">
            {products.map(item => (
                <ProductCard key={item.id} product={item} />
            ))}
        </div>
    );
};


function Best_of() {
    const [newMaterial, setNewMaterial] = useState([]);
    const [featuredMaterial, setFeaturedMaterial] = useState([]);
    // Let's add popular state for future use
    const [popularMaterial, setPopularMaterial] = useState([]);

    // State for managing UI
    const [activeTab, setActiveTab] = useState('featured'); // 'featured', 'popular', 'new'
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllMaterials = async () => {
            setIsLoading(true);
            setError(null);
            axios.defaults.withCredentials = true;

            try {
                const values = { val: 8 }; // Fetch 8 items for a 4-column grid

                // Use Promise.all to fetch data in parallel
                const [featuredResponse, newResponse] = await Promise.all([
                    axios.post('https://server-f8g6.onrender.com/featured_material', values),
                    axios.post('https://server-f8g6.onrender.com/latest_material', values)
                    // You can add the API call for 'popular' material here as well
                    // axios.post('https://server-f8g6.onrender.com/popular_material', values)
                ]);

                if (featuredResponse.data.success) {
                    setFeaturedMaterial(featuredResponse.data.data);
                }
                if (newResponse.data.success) {
                    setNewMaterial(newResponse.data.data);
                }

            } catch (err) {
                console.error("Failed to fetch materials:", err);
                setError("Could not load products. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchAllMaterials();
    }, []); // Empty dependency array means this runs once on mount

    const renderContent = () => {
        if (isLoading) {
            // You can return a spinner or a skeleton layout here
            return <p>Loading products...</p>;
        }
        if (error) {
            return <p style={{ color: 'red' }}>{error}</p>;
        }

        switch (activeTab) {
            case 'featured':
                return <ProductGrid products={featuredMaterial} />;
            case 'popular':
                // Render popular products once you have the data
                return <ProductGrid products={popularMaterial} />;
            case 'new':
                return <ProductGrid products={newMaterial} />;
            default:
                return <ProductGrid products={featuredMaterial} />;
        }
    };

    return (
        <div className="best-of-section">
            <div className="container">
                <div className="row">
                    {/* Promo Banner on the left */}
                    <div className="col-lg-3 d-none d-lg-block">
                        <div className="promo-banner">
                            <h4 style={{ marginTop: '4.8rem' }}>Direction towards your dream home.</h4>
                            <Link to="/Products" className='btn btn-xs'>
                                Explore Now <i className="fi-rs-arrow-small-right"></i>
                            </Link>
                        </div>
                    </div>

                    {/* Tabs and Products on the right */}
                    <div className="col-lg-9 col-md-12">
                        <div className="section-title">
                            <h3>Best Of Our Collection</h3>
                            <nav className="best-of-tabs">
                                <button
                                    className={`nav-link ${activeTab === 'featured' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('featured')}>
                                    Featured
                                </button>
                                <button
                                    className={`nav-link ${activeTab === 'popular' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('popular')}>
                                    Popular
                                </button>
                                <button
                                    className={`nav-link ${activeTab === 'new' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('new')}>
                                    New Added
                                </button>
                                <Link to="/Products" className="nav-link">
                                    All
                                </Link>
                            </nav>
                        </div>

                        <div className="tab-content">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Best_of;