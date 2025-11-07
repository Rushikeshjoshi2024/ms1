import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
const Category = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    axios.defaults.withCredentials = true;
    useEffect(() => {
        const handleSubmit = async () => {
            try {
                const response = await axios.get('https://server-f8g6.onrender.com/all_category');
                if (response.data.success) {
                    // alert(response.seller_email);
                    console.log(response.data);
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
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Step 3: Filter the data based on the search query
    const filteredData = data.filter(item =>
        item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <div>
            <Nav />
            <main className="main pages mb-80">
                {/* <div className="page-header breadcrumb-wrap">
                    <div className="container">
                        <div className="breadcrumb">
                            <a href='index.html' rel='nofollow'><i className="fi-rs-home mr-5"></i>Home</a>
                            <span></span> Vendors List
                        </div>
                    </div>
                </div> */}
                <div className="page-content pt-50">
                    <div className="container">
                        <div className="archive-header-2 text-center">
                            <h1 className="display-2 mb-50">Category List</h1>
                            <div className="row">
                                <div className="col-lg-5 mx-auto">
                                    <div className="sidebar-widget-2 widget_search mb-50">
                                        <div className="search-form">
                                            <form action="#">
                                                <input type="text" placeholder="Search category" value={searchQuery}
                                                    onChange={handleSearchChange} />
                                                <button type="submit"><i className="fi-rs-search"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-50">
                            <div className="col-12 col-lg-8 mx-auto">
                                <div className="shop-product-fillter">
                                    <div className="totall-product">
                                        <p>We have <strong className="text-brand">{filteredData.length}</strong> categories now</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row vendor-grid">

                            {filteredData.map(item => (

                                <div className="col-lg-4 col-md-4 col-12 col-sm-6" key={item.id}>
                                    <div className="vendor-wrap style-2 mb-40">
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">Mall</span>
                                        </div>
                                        <div className="vendor-img-action-wrap">
                                            <div className="vendor-img">
                                                <Link
                                                    to={{
                                                        pathname: `/Category_material/${item.category}`,
                                                        // your data array of objects
                                                    }}
                                                >
                                                    <img className="default-img" src={"assets/imgs/category/" + item.logo} alt="" style={{ height: '7.5rem' }} />
                                                </Link>
                                            </div>
                                            <div className="mt-10">
                                                <span className="font-small total-product">{item.count} products</span>
                                            </div>
                                        </div>
                                        <div className="vendor-content-wrap">
                                            <div className="mb-30">
                                                <h4 className="mb-5"><Link
                                                    to={{
                                                        pathname: `/Category_material/${item.category}`,
                                                        // your data array of objects
                                                    }}
                                                >{item.category}</Link></h4>
                                                <div className="vendor-info d-flex justify-content-between align-items-end mt-30">
                                                    <Link className='btn btn-xs'
                                                        to={{
                                                            pathname: `/Category_material/${item.category}`,
                                                            // your data array of objects
                                                        }}
                                                    >See materials <i className="fi-rs-arrow-small-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}



                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>

    )
};
export default Category;