import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";
import "./BestOf.css";

const ProductGrid = ({ products, isLoading }) => {
    return (
        <div className="product-grid">
            {isLoading
                ? Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="skeleton-card" />
                ))
                : products.map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
    );
};

function Best_of() {
    const [featured, setFeatured] = useState([]);
    const [latest, setLatest] = useState([]);
    const [active, setActive] = useState("featured");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const values = { val: 8 };
                const [f, n] = await Promise.all([
                    axios.post("https://server-f8g6.onrender.com/featured_material", values),
                    axios.post("https://server-f8g6.onrender.com/latest_material", values),
                ]);

                if (f.data.success) setFeatured(f.data.data);
                if (n.data.success) setLatest(n.data.data);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    const shown = active === "featured" ? featured : latest;

    return (
        <section className="best-section">
            <div className="best-cta">
                <h2>Build Your Dream Space</h2>
                <p>Premium materials that match your style and elevate your design.</p>
                <Link to="/Products" className="cta-btn">
                    Shop Collection
                </Link>
            </div>

            <div className="best-header">
                <h3>Trending Materials</h3>
                <div className="tab-controls">
                    <button
                        className={active === "featured" ? "active" : ""}
                        onClick={() => setActive("featured")}
                    >
                        Featured
                    </button>
                    <button
                        className={active === "new" ? "active" : ""}
                        onClick={() => setActive("new")}
                    >
                        New Arrivals
                    </button>
                    <Link to="/Products" className="view-all">
                        View All →
                    </Link>
                </div>
            </div>

            <ProductGrid products={shown} isLoading={loading} />
        </section>
    );
}

export default Best_of;
