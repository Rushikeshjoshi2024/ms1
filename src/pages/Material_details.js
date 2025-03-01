import React, { useEffect, useState } from 'react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Material_details = (props) => {
    const { id } = useParams();
    // console.log(id);


    const [values, setValues] = useState({
        material_name: '',
        material_category: '',
        material_price: '',
        material_brand: '',
        material_color: '',
        material_image: '',
        seller_id: '',
        shop_name: '',
        seller_mobile_no: '',
        state: '',
        district: '',
        street: '',
        landmark: '',
        pincode: '',
        shop_logo: '',
        shop_image: '',
        mat_id: id,


    });

    axios.defaults.withCredentials = true;
    useEffect(() => {
        const handleSubmit = async () => {
            try {
                const response = await axios.post('https://server-f8g6.onrender.com/material_details', values);
                if (response.data.success) {
                    // alert(response.data.size);
                    // console.log(response.data.data[0]);
                    setValues({
                        material_name: response.data.data[0].material_name,
                        material_category: response.data.data[0].category,
                        material_price: response.data.data[0].material_price,
                        material_brand: response.data.data[0].material_brand,
                        material_color: response.data.data[0].material_color,
                        material_image: response.data.data[0].material_image,
                        seller_id: response.data.data[0].seller_id,
                        shop_name: response.data.data[0].shop_name,
                        seller_mobile_no: response.data.data[0].seller_mobile_no,
                        state: response.data.data[0].state,
                        district: response.data.data[0].district,
                        street: response.data.data[0].street,
                        landmark: response.data.data[0].landmark,
                        pincode: response.data.data[0].pincode,
                        shop_logo: response.data.data[0].shop_logo,
                        shop_image: response.data.data[0].shop_image,



                    });
                    // setData(response.data.data); // Assuming response.data.data contains the array of seller details

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
    // console.log(name);

    return (

        <main className="main">
            <Nav />
            <div className="container mb-30">
                <div className="row">
                    <div className="col-xl-10 col-lg-12 m-auto">
                        <div className="product-detail accordion-detail">
                            <div className="row mb-50 mt-30">
                                <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                                    <div className="detail-gallery">
                                        {/* <span className="zoom-icon"><i className="fi-rs-search"></i></span> */}
                                        <div className="product-image-slider">
                                            <figure className="border-radius-10">
                                                <img src={`https://server-f8g6.onrender.com/uploads/regd_material/${values.material_image}`} alt="product image" />
                                            </figure>

                                        </div>
                                        {/* <div className="slider-nav-thumbnails" style={{ display: 'flex' }}>
                                            <div><img src="assets/imgs/shop/thumbnail-3.jpg" alt="product image" /></div>
                                            <div><img src="assets/imgs/shop/thumbnail-4.jpg" alt="product image" /></div>
                                            <div><img src="assets/imgs/shop/thumbnail-5.jpg" alt="product image" /></div>
                                            <div><img src="assets/imgs/shop/thumbnail-6.jpg" alt="product image" /></div>
                                            <div><img src="assets/imgs/shop/thumbnail-7.jpg" alt="product image" /></div>
                                            <div><img src="assets/imgs/shop/thumbnail-8.jpg" alt="product image" /></div>
                                            <div><img src="assets/imgs/shop/thumbnail-9.jpg" alt="product image" /></div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <div className="detail-info pr-30 pl-30">
                                        {/* <span className="stock-status out-stock"> Sale Off </span> */}
                                        <h2 className="title-detail">{values.material_name}</h2>
                                        <div className="product-detail-rating">
                                            <div className="product-rate-cover text-end">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{ width: '90%' }}></div>
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (32 reviews)</span>
                                            </div>
                                        </div>
                                        <div className="clearfix product-price-cover">
                                            <div className="product-price primary-color float-left">
                                                <span className="current-price text-brand">Rs {values.material_price}</span>
                                                <span>
                                                    {/* <span className="save-price font-md color3 ml-15">26% Off</span> */}
                                                    {/* <span className="old-price font-md ml-15">$52</span> */}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="short-desc mb-30">
                                            <p className="font-lg">Category :{values.material_category}</p>
                                        </div>
                                        {/* <div className="attr-detail attr-size mb-30">
                                            <strong className="mr-10">Size / Weight: </strong>
                                            <ul className="list-filter size-filter font-small">
                                                <li><a href="/">50g</a></li>
                                                <li className="active"><a href="/">60g</a></li>
                                                <li><a href="/">80g</a></li>
                                                <li><a href="/">100g</a></li>
                                                <li><a href="/">150g</a></li>
                                            </ul>
                                        </div> */}
                                        <div className="detail-extralink mb-50">
                                            {/* <div className="detail-qty border radius">
                                                <a href="/" className="qty-down"><i className="fi-rs-angle-small-down"></i></a>
                                                <input type="text" name="quantity" className="qty-val" value="1" min="1" />
                                                <a href="/" className="qty-up"><i className="fi-rs-angle-small-up"></i></a>
                                            </div> */}
                                            <div className="product-extra-link2">
                                                <button type="submit" className="button button-add-to-cart"><i className="fi-rs-shopping-cart"></i>Add to cart</button>
                                                <a aria-label='Add To Wishlist' className='action-btn hover-up' href='shop-wishlist.html'><i className="fi-rs-heart"></i></a>
                                                <a aria-label='Compare' className='action-btn hover-up' href='shop-compare.html'><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                        </div>
                                        {/* <div className="font-xs">
                                            <ul className="mr-50 float-start">
                                                <li className="mb-5">Type: <span className="text-brand">Organic</span></li>
                                                <li className="mb-5">MFG:<span className="text-brand"> Jun 4.2024</span></li>
                                                <li>LIFE: <span className="text-brand">70 days</span></li>
                                            </ul>
                                            <ul className="float-start">
                                                <li className="mb-5">SKU: <a href="/">FWM15VKT</a></li>
                                                <li className="mb-5">Tags: <a href="/" rel="tag">Snack</a>, <a href="/" rel="tag">Organic</a>, <a href="/" rel="tag">Brown</a></li>
                                                <li>Stock:<span className="in-stock text-brand ml-5">8 Items In Stock</span></li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="product-info">
                                <div className="tab-style3">
                                    <ul className="nav nav-tabs text-uppercase">
                                        {/* <li className="nav-item">
                                            <a className="nav-link active" id="Description-tab" data-bs-toggle="tab" href="#Description">Description</a>
                                        </li> */}
                                        <li className="nav-item">
                                            <a className="nav-link active" id="Additional-info-tab" data-bs-toggle="tab" href="#Additional-info"> Information</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="Vendor-info-tab" data-bs-toggle="tab" href="#Vendor-info">Seller</a>
                                        </li>
                                        <li className="nav-item " >
                                            <a className="nav-link " id="Reviews-tab" data-bs-toggle="tab" href="#Reviews" hidden>Reviews</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content shop_info_tab entry-main-content">
                                        {/* <div className="tab-pane fade show active" id="Description">
                                            <div className="">
                                                <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.</p>
                                                <p>Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</p>
                                                <ul className="product-more-infor mt-30">
                                                    <li><span>Type Of Packing</span> Bottle</li>
                                                    <li><span>Color</span> Green, Pink, Powder Blue, Purple</li>
                                                    <li><span>Quantity Per Case</span> 100ml</li>
                                                    <li><span>Ethyl Alcohol</span> 70%</li>
                                                    <li><span>Piece In One</span> Carton</li>
                                                </ul>
                                                <hr className="wp-block-separator is-style-dots" />
                                                <p>Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective limpet.</p>
                                                <h4 className="mt-30">Packaging & Delivery</h4>
                                                <hr className="wp-block-separator is-style-wide" />
                                                <p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.</p>
                                                <p>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.</p>
                                                <h4 className="mt-30">Suggested Use</h4>
                                                <ul className="product-more-infor mt-30">
                                                    <li>Refrigeration not necessary.</li>
                                                    <li>Stir before serving</li>
                                                </ul>
                                                <h4 className="mt-30">Other Ingredients</h4>
                                                <ul className="product-more-infor mt-30">
                                                    <li>Organic raw pecans, organic raw cashews.</li>
                                                    <li>This butter was produced using a LTG (Low Temperature Grinding) process</li>
                                                    <li>Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</li>
                                                </ul>
                                                <h4 className="mt-30">Warnings</h4>
                                                <ul className="product-more-infor mt-30">
                                                    <li>Oil separation occurs naturally. May contain pieces of shell.</li>
                                                </ul>
                                            </div>
                                        </div> */}
                                        <div className="tab-pane fade show active" id="Additional-info">
                                            <table className="font-md">
                                                <tbody>
                                                    <tr className="stand-up">
                                                        <th>material name</th>
                                                        <td>
                                                            <p>{values.material_name}</p>
                                                        </td>
                                                    </tr>
                                                    <tr className="folded-wo-wheels">
                                                        <th>material category</th>
                                                        <td>
                                                            <p>{values.material_category}</p>
                                                        </td>
                                                    </tr>
                                                    <tr className="folded-w-wheels">
                                                        <th>Material price</th>
                                                        <td>
                                                            <p>{values.material_price}</p>
                                                        </td>
                                                    </tr>
                                                    <tr className="door-pass-through">
                                                        <th>material brand</th>
                                                        <td>
                                                            <p>{values.material_brand}</p>
                                                        </td>
                                                    </tr>
                                                    <tr className="frame">
                                                        <th>material color</th>
                                                        <td>
                                                            <p>{values.material_color}</p>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="tab-pane fade" id="Vendor-info">
                                            <div className="vendor-logo d-flex mb-30">
                                                <img src={`https://server-f8g6.onrender.com/uploads/shop_logo/${values.shop_logo}`} alt="" />
                                                <div className="vendor-name ml-15">
                                                    <h4>
                                                        <a href='vendor-details-2.html'>{values.shop_name}</a>
                                                    </h4>
                                                    <div className="product-rate-cover text-end">
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{ width: '90%' }}></div>
                                                        </div>
                                                        <span className="font-small ml-5 text-muted"> (32 reviews)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="contact-infor mb-50">
                                                <li><img src="assets/imgs/theme/icons/icon-location.svg" alt="" /><strong>Address: </strong> <span>{values.street + ' ' + values.district + ' ' + values.state + ' ' + values.pincode}</span></li>
                                                <br />
                                                <li><img src="assets/imgs/theme/icons/icon-contact.svg" alt="" /><strong>Contact Seller: </strong><span> {values.seller_mobile_no}</span></li>
                                            </ul>
                                            <div className="d-flex mb-55">
                                                <div className="mr-30">
                                                    <p className="text-brand font-xs">Rating</p>
                                                    <h4 className="mb-0">92%</h4>
                                                </div>
                                                <div className="mr-30">
                                                    <p className="text-brand font-xs">Ship on time</p>
                                                    <h4 className="mb-0">100%</h4>
                                                </div>
                                                <div>
                                                    <p className="text-brand font-xs">Chat response</p>
                                                    <h4 className="mb-0">89%</h4>
                                                </div>
                                            </div>
                                            <p>Noodles & Company is an American fast-casual restaurant that offers international and American noodle dishes and pasta in addition to soups and salads. Noodles & Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield, Colorado. The company went public in 2013 and recorded a $457 million revenue in 2017.In late 2018, there were 460 Noodles & Company locations across 29 states and Washington, D.C.</p>
                                        </div>
                                        <div className="tab-pane fade" id="Reviews" >
                                            <div className="comments-area">
                                                <div className="row">
                                                    <div className="col-lg-8">
                                                        <h4 className="mb-30">Customer questions & answers</h4>
                                                        <div className="comment-list">
                                                            <div className="single-comment justify-content-between d-flex mb-30">
                                                                <div className="user justify-content-between d-flex">
                                                                    <div className="thumb text-center">
                                                                        <img src="assets/imgs/blog/author-2.png" alt="" />
                                                                        <a href="/" className="font-heading text-brand">Sienna</a>
                                                                    </div>
                                                                    <div className="desc">
                                                                        <div className="d-flex justify-content-between mb-10">
                                                                            <div className="d-flex align-items-center">
                                                                                <span className="font-xs text-muted">December 4, 2024 at 3:12 pm </span>
                                                                            </div>
                                                                            <div className="product-rate d-inline-block">
                                                                                <div className="product-rating" style={{ width: '100%' }}></div>
                                                                            </div>
                                                                        </div>
                                                                        <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? <a href="/" className="reply">Reply</a></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-comment justify-content-between d-flex mb-30 ml-30">
                                                                <div className="user justify-content-between d-flex">
                                                                    <div className="thumb text-center">
                                                                        <img src="assets/imgs/blog/author-3.png" alt="" />
                                                                        <a href="/" className="font-heading text-brand">Brenna</a>
                                                                    </div>
                                                                    <div className="desc">
                                                                        <div className="d-flex justify-content-between mb-10">
                                                                            <div className="d-flex align-items-center">
                                                                                <span className="font-xs text-muted">December 4, 2024 at 3:12 pm </span>
                                                                            </div>
                                                                            <div className="product-rate d-inline-block">
                                                                                <div className="product-rating" style={{ width: '80%' }}></div>
                                                                            </div>
                                                                        </div>
                                                                        <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? <a href="/" className="reply">Reply</a></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-comment justify-content-between d-flex">
                                                                <div className="user justify-content-between d-flex">
                                                                    <div className="thumb text-center">
                                                                        <img src="assets/imgs/blog/author-4.png" alt="" />
                                                                        <a href="/" className="font-heading text-brand">Gemma</a>
                                                                    </div>
                                                                    <div className="desc">
                                                                        <div className="d-flex justify-content-between mb-10">
                                                                            <div className="d-flex align-items-center">
                                                                                <span className="font-xs text-muted">December 4, 2024 at 3:12 pm </span>
                                                                            </div>
                                                                            <div className="product-rate d-inline-block">
                                                                                <div className="product-rating" style={{ width: '80%' }}></div>
                                                                            </div>
                                                                        </div>
                                                                        <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? <a href="/" className="reply">Reply</a></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <h4 className="mb-30">Customer reviews</h4>
                                                        <div className="d-flex mb-30">
                                                            <div className="product-rate d-inline-block mr-15">
                                                                <div className="product-rating" style={{ width: '90%' }}></div>
                                                            </div>
                                                            <h6>4.8 out of 5</h6>
                                                        </div>
                                                        <div className="progress">
                                                            <span>5 star</span>
                                                            <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                                        </div>
                                                        <div className="progress">
                                                            <span>4 star</span>
                                                            <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                                        </div>
                                                        <div className="progress">
                                                            <span>3 star</span>
                                                            <div className="progress-bar" role="progressbar" style={{ width: '45%' }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div>
                                                        </div>
                                                        <div className="progress">
                                                            <span>2 star</span>
                                                            <div className="progress-bar" role="progressbar" style={{ width: '65%' }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
                                                        </div>
                                                        <div className="progress mb-30">
                                                            <span>1 star</span>
                                                            <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                                                        </div>
                                                        <a href="/" className="font-xs text-muted">How are ratings calculated?</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-form">
                                                <h4 className="mb-15">Add a review</h4>
                                                <div className="product-rate d-inline-block mb-30"></div>
                                                <div className="row">
                                                    <div className="col-lg-8 col-md-12">
                                                        <form className="form-contact comment_form" action="#" id="commentForm">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="form-group">
                                                                        <textarea className="form-control w-100" name="comment" id="comment" cols="30" rows="9" placeholder="Write Comment"></textarea>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="form-group">
                                                                        <input className="form-control" name="name" id="name" type="text" placeholder="Name" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <div className="form-group">
                                                                        <input className="form-control" name="email" id="email" type="email" placeholder="Email" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="form-group">
                                                                        <input className="form-control" name="website" id="website" type="text" placeholder="Website" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <button type="submit" className="button button-contactForm">Submit Review</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-60">
                                <div className="col-12">
                                    <h2 className="section-title style-1 mb-30">Related products</h2>
                                </div>
                                <div className="col-12">
                                    <div className="row related-products">
                                        <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                            <div className="product-cart-wrap hover-up">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href='shop-product-right.html' tabindex='0'>
                                                            <img className="default-img" src="assets/imgs/shop/product-2-1.jpg" alt="" />
                                                            <img className="hover-img" src="assets/imgs/shop/product-2-2.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-search"></i></a>
                                                        <a aria-label='Add To Wishlist' className='action-btn small hover-up' href='shop-wishlist.html' tabindex='0'><i className="fi-rs-heart"></i></a>
                                                        <a aria-label='Compare' className='action-btn small hover-up' href='shop-compare.html' tabindex='0'><i className="fi-rs-shuffle"></i></a>
                                                    </div>
                                                    <div className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="hot">Hot</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <h2><a href='shop-product-right.html' tabindex='0'>Ulstra Bass Headphone</a></h2>
                                                    <div className="rating-result" title="90%">
                                                        <span> </span>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>$238.85 </span>
                                                        <span className="old-price">$245.8</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                            <div className="product-cart-wrap hover-up">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href='shop-product-right.html' tabindex='0'>
                                                            <img className="default-img" src="assets/imgs/shop/product-3-1.jpg" alt="" />
                                                            <img className="hover-img" src="assets/imgs/shop/product-4-2.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-search"></i></a>
                                                        <a aria-label='Add To Wishlist' className='action-btn small hover-up' href='shop-wishlist.html' tabindex='0'><i className="fi-rs-heart"></i></a>
                                                        <a aria-label='Compare' className='action-btn small hover-up' href='shop-compare.html' tabindex='0'><i className="fi-rs-shuffle"></i></a>
                                                    </div>
                                                    <div className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="sale">-12%</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <h2><a href='shop-product-right.html' tabindex='0'>Smart Bluetooth Speaker</a></h2>
                                                    <div className="rating-result" title="90%">
                                                        <span> </span>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>$138.85 </span>
                                                        <span className="old-price">$145.8</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                            <div className="product-cart-wrap hover-up">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href='shop-product-right.html' tabindex='0'>
                                                            <img className="default-img" src="assets/imgs/shop/product-4-1.jpg" alt="" />
                                                            <img className="hover-img" src="assets/imgs/shop/product-4-2.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-search"></i></a>
                                                        <a aria-label='Add To Wishlist' className='action-btn small hover-up' href='shop-wishlist.html' tabindex='0'><i className="fi-rs-heart"></i></a>
                                                        <a aria-label='Compare' className='action-btn small hover-up' href='shop-compare.html' tabindex='0'><i className="fi-rs-shuffle"></i></a>
                                                    </div>
                                                    <div className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="new">New</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <h2><a href='shop-product-right.html' tabindex='0'>HomeSpeak 12UEA Goole</a></h2>
                                                    <div className="rating-result" title="90%">
                                                        <span> </span>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>$738.85 </span>
                                                        <span className="old-price">$1245.8</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-12 col-sm-6 d-lg-block d-none">
                                            <div className="product-cart-wrap hover-up mb-0">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <a href='shop-product-right.html' tabindex='0'>
                                                            <img className="default-img" src="assets/imgs/shop/product-5-1.jpg" alt="" />
                                                            <img className="hover-img" src="assets/imgs/shop/product-3-2.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-search"></i></a>
                                                        <a aria-label='Add To Wishlist' className='action-btn small hover-up' href='shop-wishlist.html' tabindex='0'><i className="fi-rs-heart"></i></a>
                                                        <a aria-label='Compare' className='action-btn small hover-up' href='shop-compare.html' tabindex='0'><i className="fi-rs-shuffle"></i></a>
                                                    </div>
                                                    <div className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="hot">Hot</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <h2><a href='shop-product-right.html' tabindex='0'>Dadua Camera 4K 2024EF</a></h2>
                                                    <div className="rating-result" title="90%">
                                                        <span> </span>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>$89.8 </span>
                                                        <span className="old-price">$98.8</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>

    )
};

export default Material_details;