import Nav from "../components/Nav";
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from "../components/Footer";
import MaterialCard from "../../src/components/MatCard";

const Category_material = (props) => {
    const { category } = useParams();

    const [data, setData] = useState([]);
    // const [searchQuery, setSearchQuery] = useState('');


    axios.defaults.withCredentials = true;
    useEffect(() => {
        const handleSubmit = async () => {
            try {
                const response = await axios.get('https://server-f8g6.onrender.com/all_material');
                if (response.data.success) {
                    // alert(response.seller_email);
                    // console.log(response.data);
                    setData(response.data.data); // Assuming response.data.data contains the array of seller details

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
    // const handleSearchChange = (event) => {
    //     setSearchQuery(event.target.value);
    // };

    // Step 3: Filter the data based on the search query
    const filteredData = data.filter(item =>
        item.category.toLowerCase().includes(category.toLowerCase())
    );



    return (
        <div>
            <Nav />
            <main className="main">

                <div className="container mb-30">
                    <div className="archive-header-2 text-center">
                        <h1 className="display-2 mb-50">Best of {category}</h1>

                    </div>
                    <div className="row flex-row-reverse">
                        <div className="col-lg-12">
                            <div className="shop-product-fillter">
                                <div className="totall-product">
                                    <p>We found <strong className="text-brand">{filteredData.length}</strong> items for you!</p>
                                </div>
                                <div className="sort-by-product-area">
                                    <div className="sort-by-cover mr-10">
                                        <div className="sort-by-product-wrap">
                                            <div className="sort-by">
                                                <span><i className="fi-rs-apps"></i>Show:</span>
                                            </div>
                                            <div className="sort-by-dropdown-wrap">
                                                <span> 50 <i className="fi-rs-angle-small-down"></i></span>
                                            </div>
                                        </div>
                                        <div className="sort-by-dropdown">
                                            <ul>
                                                <li><a className="active" href="/">50</a></li>
                                                <li><a href="/">100</a></li>
                                                <li><a href="/">150</a></li>
                                                <li><a href="/">200</a></li>
                                                <li><a href="/">All</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sort-by-cover">
                                        <div className="sort-by-product-wrap">
                                            <div className="sort-by">
                                                <span><i className="fi-rs-apps-sort"></i>Sort by:</span>
                                            </div>
                                            <div className="sort-by-dropdown-wrap">
                                                <span> Featured <i className="fi-rs-angle-small-down"></i></span>
                                            </div>
                                        </div>
                                        <div className="sort-by-dropdown">
                                            <ul>
                                                <li><a className="active" href="/">Featured</a></li>
                                                <li><a href="/">Price: Low to High</a></li>
                                                <li><a href="/">Price: High to Low</a></li>
                                                <li><a href="/">Release Date</a></li>
                                                <li><a href="/">Avg. Rating</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {filteredData.length === 0 ? (
                                    <p className="text-center text-muted">No materials available.</p>
                                ) : (
                                    filteredData.map(item => <MaterialCard key={item.id} item={item} />)
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main >
            <Footer />
        </div >
    );
};
export default Category_material;