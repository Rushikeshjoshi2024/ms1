import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
function Featured_category() {
    const [data, setData] = useState([]);
    // const [searchQuery, setSearchQuery] = useState('');


    axios.defaults.withCredentials = true;
    useEffect(() => {
        const handleSubmit = async () => {
            try {
                const response = await axios.get('https://server-f8g6.onrender.com/all_category');
                if (response.data.success) {
                    // alert(response.seller_email);
                    // console.log(response.data);
                    setData(response.data.data); // Assuming response.data.data contains the array of seller details

                    // console.log(response.data.data[0].shop_name);
                } else {
                    //alert("Invalid data");
                }
            } catch (err) {
                // alert("An error occurred: " + err);
            }
        };

        handleSubmit();
    }, []);


    return (

        <div>
            <main class="main">



                <section className="popular-categories section-padding">
                    <div className="container wow animate__animated animate__fadeIn">
                        <div className="section-title">
                            <div className="title">
                                <h3>Featured Categories</h3>
                            </div>
                        </div>
                        <div className="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow" id="carausel-10-columns-arrows"></div>
                        <div className="carausel-10-columns-cover position-relative">
                            <div className="carausel-10-columns" id="carausel-10-columns" style={{ display: 'flex', flexDirection: 'row', overflow: 'scroll' }}>
                                {data.map(item => (
                                    <div className="card-2 bg-9 wow animate__animated animate__fadeInUp" data-wow-delay=".1s" key={item.id}>
                                        <figure className="img-hover-scale overflow-hidden">
                                            <a href='#'><img src={"assets/imgs/category/" + item.logo} alt="" style={{ margin: '10px', height: '4rem', width: '4.5rem' }} /></a>
                                        </figure>
                                        <h6><a href='#'>{item.category}</a></h6>
                                        <span>{item.count} items</span>
                                    </div>
                                ))}

                                {/* <div className="card-2 bg-9 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                    <figure className="img-hover-scale overflow-hidden">
                                        <a href='shop-grid-right.html'><img src="assets/imgs/category/cat-16.png" alt="" style={{ margin: '10px' }} /></a>
                                    </figure>
                                    <h6><a href='shop-grid-right.html'>All category</a></h6>
                                    <span>26 items</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};
export default Featured_category;