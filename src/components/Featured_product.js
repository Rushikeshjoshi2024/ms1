import React from 'react';
import './Card.css';
const Featured_product = ({ product }) => {
    const { name, price, description, address, imageUrl } = product;

    return (
        <div className='container'>
            <h2>Featured Product</h2>
            <hr />
            <div className="row g-0 bg-body-secondary position-relative product-card">
                <div className="col-md-6 mb-md-0 p-md-4">
                    <img src={imageUrl} class="w-100" alt="..." />
                </div>
                <div className="col-md-6 p-4 ps-md-0 product-info">
                    <h2 className="mt-0">{name}</h2>
                    <p>{description}</p>
                    <p>{address}</p>
                    <p>Price: ${price}</p>
                    <button type="button" className="btn btn-outline-light">Add to cart</button>

                    <button type="button" className="btn btn-outline-light">Contact</button>

                </div>
            </div>

            {/* <div className="product-card">
                <div className="product-image">
                    <img src={imageUrl} alt={name} />
                </div>
                <div className="product-info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p>{address}</p>
                    <p>Price: ${price}</p>
                    <button>Add to Cart</button>
                    <button>Add to Cart</button>
                </div>
            </div> */}
        </div>
    );
};

export default Featured_product;
