import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Featured_category from "./Featured_category";
import MaterialCard from "../../src/components/MatCard";

function Products() {
    const [data, setData] = useState([]);
    // const [searchQuery, setSearchQuery] = useState('');

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
                                {data.length === 0 ? (
                                    <p className="text-center text-muted">No materials available.</p>
                                ) : (
                                    data.map(item => <MaterialCard key={item.id} item={item} />)
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );

};
export default Products;