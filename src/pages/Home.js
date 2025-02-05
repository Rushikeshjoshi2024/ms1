// import './App.css';
// import '../components/component.css';
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Nav from '../components/Nav';
import CenterSection from '../components/CenterSection';
import Services from '../components/Services';
import Product_card from '../components/Product_card';
import Products from '../components/Products';
import Sellers_home_scr from '../components/Sellers_home_scr';
// import Featured_product from '../components/Featured_product';
// import ProductsWall from './components/ProductsWall';
import data from '../components/data';
import Card_section from '../components/Card_section';
import Best_of from '../components/Best_of';
function Home() {
    // console.log(req.sessionID);
    const navigate = useNavigate();


    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('https://server-f8g6.onrender.com/')
            .then(res => {
                console.log(res.data.user);
                // if (res.data.valid) {
                //     // setName(res.data.user_email);
                //     navigate('/')

                // }
                // else {
                //     navigate('/Seller_login')
                // }
            })
            .catch(err => console.log(err))

    }, [])
    const products = [
        {
            id: 1,
            name: 'Product 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            price: 29.99,
            address: 'Nanded',
            imageUrl: 'til.jpg',
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            price: 29.99,
            address: 'Nanded',

            imageUrl: 'til.jpg',
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            price: 29.99,
            address: 'Nanded',

            imageUrl: 'til.jpg',
        },

        // Add more products as needed
    ];
    useEffect(() => {
        const intervalId = setInterval(() => {
            setFadeOut(true);

            setTimeout(() => {
                setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
                setFadeOut(false);
            }, 500); // Adjust the delay based on your transition duration
        }, 5000); // Change product every 5 seconds

        return () => clearInterval(intervalId);
    }, [products.length]);


    return (
        <div>



            <Nav />
            <CenterSection />
            <Services />
            <Product_card data={data} activeSlide={3} />
            <Products />
            {/* <div className={`product-card ${fadeOut ? 'fade-out' : ''}`}>
        <Featured_product key={products[currentProductIndex].id} product={products[currentProductIndex]} />
      </div> */}
            <Best_of />
            <Sellers_home_scr />
            <Card_section />
            {/* <Bottom_tabs /> */}
            <Footer />



        </div >
    );
}

export default Home;
