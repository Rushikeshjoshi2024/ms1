import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Featured_category from "./Featured_category";
function Products() {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const [values, setValues] = useState({
        val: 8
    });
    axios.defaults.withCredentials = true;
    useEffect(() => {
        const handleSubmit = async () => {
            try {
                const response = await axios.post('https://server-f8g6.onrender.com/latest_material', values);
                if (response.data.success) {
                    // alert(response.seller_email);
                    console.log(response.data);
                    setData(response.data.data);
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


    return (
        <div>
            <Featured_category />


            <section className="product-tabs section-padding position-relative">
                <div className="container">
                    <div className="section-title style-2 d-flex justify-content-between align-items-center mb-4">
                        <h3>Latest Products</h3>
                        <ul className="nav nav-tabs links" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <Link to="/Products" className="btn bg-transparent p-0 border-0">
                                    <i className="fas fa-angle-right" style={{ color: 'black', fontSize: '1.5rem' }}></i>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                            <div className="row g-4">
                                {data.map(item => (
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={item.id}>
                                        <div
                                            className="product-card border rounded h-100 d-flex flex-column shadow-sm"
                                            style={{ transition: 'transform 0.3s ease' }}
                                        >
                                            <div className="position-relative">
                                                <Link to={`/Material_details/${item.id}`}>
                                                    <img
                                                        src={`https://server-f8g6.onrender.com/uploads/regd_material/${item.material_image}`}
                                                        alt={item.material_brand}
                                                        className="w-100"
                                                        style={{
                                                            height: '14rem',
                                                            objectFit: 'contain',
                                                            padding: '0.5rem',
                                                            backgroundColor: '#f9f9f9', // optional: adds contrast
                                                            borderTopLeftRadius: '0.5rem',
                                                            borderTopRightRadius: '0.5rem',
                                                        }}
                                                    />

                                                </Link>
                                                <span className="badge bg-danger position-absolute top-0 start-0 m-2">New</span>
                                            </div>

                                            <div className="p-3 d-flex flex-column flex-grow-1">
                                                <small className="text-muted mb-1">#{item.category}</small>

                                                <h6 className="mb-2">
                                                    <Link to={`/Material_details/${item.id}`} className="text-dark text-decoration-none">
                                                        {item.material_brand}
                                                    </Link>
                                                </h6>

                                                <div className="d-flex align-items-center mb-2">
                                                    <div
                                                        className="bg-warning rounded me-2"
                                                        style={{ width: '80px', height: '8px' }}
                                                    ></div>
                                                    <span className="small text-muted">(4.0)</span>
                                                </div>

                                                <small className="text-muted mb-3">By <span className="fw-semibold">{item.shop_name}</span></small>

                                                <div className="d-flex justify-content-between align-items-center mt-auto">
                                                    <span className="fw-bold text-dark">{item.material_price} /Unit</span>
                                                    <a href="/" className="btn btn-sm btn-outline-primary d-flex align-items-center gap-1">
                                                        <i className="fi-rs-shopping-cart"></i> Add
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );

};
export default Products;