import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';

import '../components/component.css';
import axios from "axios";
function Nav() {
    const [search, setSearch] = useState('');
    const [service, setService] = useState('');
    const [auth, setAuth] = useState(false);
    const [email, setEmail] = useState('');
    const [utype, userType] = useState('');
    // const navigate = useNavigate();
    // console.log(utype);
    var location = Location;
    const search_value = (event) => {
        setSearch(event.target.value);//gives the search field value
    };
    const service_value = (event) => {
        setService(event);//gives the selected value for dropdown in services
    };
    // console.log(search);
    // console.log(service);

    useEffect(() => {
        axios.get('https://server-f8g6.onrender.com')
            .then(res => {
                // console.log(res.data);
                if (res.data.valid) {
                    // setName(res.data.user_email);
                    setAuth(true)
                    setEmail(res.data.user_email)
                    // navigate('/')


                    if (res.data.user === 'seller') {
                        setAuth(true)
                        setEmail(res.data.user_email)
                        userType(true)
                    }
                }
                else {
                    // navigate('/Login')
                    setAuth(false)
                    userType(false)

                }
            })
            .catch(err => console.log(err))

    }, [])

    const handleLogout = () => {
        axios.get('https://server-f8g6.onrender.com/logout')
            .then(res => {
                // console.log(res.data.valid);
                window.location.reload();
                alert("See you soon.");

            })
            .catch(err => console.log(err))
    };
    return (
        <div>
            <header className="header-area header-style-1 header-height-2">


                {/* <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="header-wrap">
                            <div className="logo logo-width-1">
                                <a href='index.html'><img src="assets/imgs/theme/logo.svg" alt="logo" /></a>
                            </div>

                        </div>
                    </div>
                </div> */}
                <div className="header-bottom header-bottom-bg-color sticky-bar">
                    <div className="container">

                        <div className="header-wrap header-space-between position-relative">
                            <div className="logo logo-width-1 d-block d-lg-none">
                                <div className="logo navbar-brand">
                                    <a href='/'>MaterialSeller</a>
                                </div>                            </div>
                            <div className="header-nav d-none d-lg-flex">

                                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                                    <nav>

                                        <ul>
                                            <li className="hot-deals">
                                                <div className="logo navbar-brand">
                                                    <a href='/'>MaterialSeller</a>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="/" className='active' >Home </a>

                                            </li>
                                            <li>
                                                <a href='/#/About'>About</a>
                                            </li>
                                            <li>
                                                <a href='/#/Contact'>Contact</a>
                                            </li>
                                            <li>
                                                <a>Services <i className="fi-rs-angle-down"></i></a>
                                                <ul className="sub-menu">
                                                    <li><a href='/#/Products'>Buy Material</a></li>
                                                    <li><a href='/#/Seller_registration'>Register as seller</a></li>

                                                </ul>
                                            </li>
                                            <li>
                                                <a> Account <i className="fi-rs-angle-down"></i></a>
                                                <ul className="sub-menu">
                                                    <li>  {
                                                        auth ?
                                                            <div>
                                                                {/* <button type="button"  onClick={handleLogout}>Logout</button> */}
                                                                Hello, {email}
                                                                <li><a onClick={handleLogout}>Logout</a></li>
                                                                <li><a href="/#/Seller_account"> My account</a></li>
                                                            </div>
                                                            :
                                                            // <div className="account" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                                                            // </div>
                                                            <li><a href="/#/login">Login</a></li>

                                                    }
                                                        {
                                                            utype ?

                                                                <div>
                                                                    <li ><a href="/#/Material_reg"> Material Register</a></li>
                                                                </div>
                                                                :
                                                                null

                                                        }
                                                        <li><a href="/#/ForgotPassword">Forgot Password</a></li>
                                                        <li><a href="/#/Sellers">Sellers</a></li>
                                                        <li><a href="/#/Signup">Signup</a></li>
                                                        <li><a href="/#/Seller_login">Sellers login</a></li>
                                                        <li><a href="/#/Sellers">Sellers list</a></li>
                                                        <li><a href="/#/Products">Products</a></li>
                                                        <li><a href="/#/categories">Category</a></li>
                                                    </li>
                                                    <li><a href='/#/Seller_registration'>Register as seller</a></li>

                                                </ul>
                                            </li>

                                            {/* <li className="position-static">
                                                <a href="/">More <i className="fi-rs-angle-down"></i></a>
                                                <ul className="mega-menu">
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a className="menu-title" href="/">Fruit & Vegetables</a>
                                                        <ul>
                                                            <li><a href='shop-product-right.html'>Meat & Poultry</a></li>
                                                            <li><a href='shop-product-right.html'>Fresh Vegetables</a></li>
                                                            <li><a href='shop-product-right.html'>Herbs & Seasonings</a></li>
                                                            <li><a href='shop-product-right.html'>Cuts & Sprouts</a></li>
                                                            <li><a href='shop-product-right.html'>Exotic Fruits & Veggies</a>
                                                            </li>
                                                            <li><a href='shop-product-right.html'>Packaged Produce</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a className="menu-title" href="/">Breakfast & Dairy</a>
                                                        <ul>
                                                            <li><a href='shop-product-right.html'>Milk & Flavoured Milk</a></li>
                                                            <li><a href='shop-product-right.html'>Butter and Margarine</a></li>
                                                            <li><a href='shop-product-right.html'>Eggs Substitutes</a></li>
                                                            <li><a href='shop-product-right.html'>Marmalades</a></li>
                                                            <li><a href='shop-product-right.html'>Sour Cream</a></li>
                                                            <li><a href='shop-product-right.html'>Cheese</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a className="menu-title" href="/">Meat & Seafood</a>
                                                        <ul>
                                                            <li><a href='shop-product-right.html'>Breakfast Sausage</a></li>
                                                            <li><a href='shop-product-right.html'>Dinner Sausage</a></li>
                                                            <li><a href='shop-product-right.html'>Chicken</a></li>
                                                            <li><a href='shop-product-right.html'>Sliced Deli Meat</a></li>
                                                            <li><a href='shop-product-right.html'>Wild Caught Fillets</a></li>
                                                            <li><a href='shop-product-right.html'>Crab and Shellfish</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-34">
                                                        <div className="menu-banner-wrap">
                                                            <a href='shop-product-right.html'><img
                                                                src="assets/imgs/banner/banner-menu.png" alt="Nest" /></a>
                                                            <div className="menu-banner-content">
                                                                <h4>Hot deals</h4>
                                                                <h3>
                                                                    Don't miss<br />
                                                                    Trending
                                                                </h3>
                                                                <div className="menu-banner-price">
                                                                    <span className="new-price text-success">Save to 50%</span>
                                                                </div>
                                                                <div className="menu-banner-btn">
                                                                    <a href='shop-product-right.html'>Shop now</a>
                                                                </div>
                                                            </div>
                                                            <div className="menu-banner-discount">
                                                                <h3>
                                                                    <span>25%</span>
                                                                    off
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
 */}


                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="d-none d-lg-flex">
                                <div className="srch-acc-logo">
                                    <a href='/#/Search'>
                                        <div className="search ">


                                            <img alt="Nest" className="search-hover" src="assets/imgs/theme/icons/search.svg" />

                                        </div>
                                    </a>

                                    {/* <div className="account-logo" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                                    </div> */}


                                </div>

                            </div>
                            <div className="header-action-icon-2 d-block d-lg-none">
                                <div className="burger-icon burger-icon-white">
                                    {/* <button class="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" >

                                        Menu</button> */}
                                    {/* <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></button> */}

                                    <span className="burger-icon-top">  <button class="btn  d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" >

                                    </button></span>
                                    <span className="burger-icon-mid"></span>
                                    <span className="burger-icon-bottom"></span>
                                </div>
                            </div>
                            <div className="header-action-right d-block d-lg-none">
                                <div className="header-action-2">
                                    <div className="header-action-icon-2">
                                        <a href='/#/Search'>
                                            <img alt="Nest" src="assets/imgs/theme/icons/search.svg" />
                                            {/* <span className="pro-count white">4</span> */}
                                        </a>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <a className="mini-cart-icon" href="/">
                                            <img alt="Nest" src="assets/imgs/theme/icons/account_logo.svg" />
                                            {/* <span className="pro-count white">2</span> */}
                                        </a>
                                        <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                            <ul>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <a href='shop-product-right.html'><img alt="Nest"
                                                            src="assets/imgs/shop/thumbnail-3.jpg" /></a>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4><a href='shop-product-right.html'>Plain Striola Shirts</a></h4>
                                                        <h3><span>1 × </span>$800.00</h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <a href="/"><i className="fi-rs-cross-small"></i></a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <a href='shop-product-right.html'><img alt="Nest"
                                                            src="assets/imgs/shop/thumbnail-4.jpg" /></a>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4><a href='shop-product-right.html'>Macbook Pro 2024</a></h4>
                                                        <h3><span>1 × </span>$3500.00</h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <a href="/"><i className="fi-rs-cross-small"></i></a>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="shopping-cart-footer">
                                                <div className="shopping-cart-total">
                                                    <h4>Total <span>$383.00</span></h4>
                                                </div>
                                                <div className="shopping-cart-button">
                                                    <a href='shop-cart.html'>View cart</a>
                                                    <a href='shop-checkout.html'>Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header >


            {/* <div className="offcanvas offcanvas-end " tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Account</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul class="list-group">
                        {
                            auth ?
                                <div>


                                    {/* <button type="button"  onClick={handleLogout}>Logout</button> */}
            {/* Hello, {email} */}
            {/* <li class="list-group-item"><a onClick={handleLogout}>Logout</a></li>
                                    <li class="list-group-item"><a href="/Seller_account"> My account</a></li>
                                </div> */}
            {/* //:
                                // <div className="account" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                                // </div> */}
            {/* <li class="list-group-item"><a href="/login">Login</a></li> */}

            {/* // }
                        // { */}
            {/* //     utype ?

                        //         <div>
                        //             <li class="list-group-item"><a href="/Material_reg"> Material Register</a></li>
                        //         </div>
                        //         :
                        //         null */}

            {/* // }
            //             <li class="list-group-item"><a href="/Signup">Signup</a></li>
            //             <li class="list-group-item"><a href="/ForgotPassword">Forgot Password</a></li>
            //             <li class="list-group-item"><a href="/Sellers">Sellers</a></li>
            //             <li class="list-group-item"><a href="/Seller_login">Sellers login</a></li>
            //             <li class="list-group-item"><a href="/Sellers">Sellers list</a></li>
            //             <li class="list-group-item"><a href="/Products">Products</a></li>
            //             <li class="list-group-item"><a href="/categories">Category</a></li>
                       
            //         </ul> */}
            {/* //     </div> */}

            {/* // </div > */}
            {/* //} */}

            {/*--------------------------------- mobile sidebar offcanvas start ---------------------------------*/}


            {/* <div class="mobile-header-active mobile-header-wrapper-style"> */}


            {/* <div class="mobile-header-content-area"> */}
            {/* <div class="mobile-search search-style-3 mobile-header-border">
                            <form action="#">
                            <input type="text" placeholder="Search for items…" />
                            <button type="submit"><i class="fi-rs-search"></i></button>
                            </form>
                            </div> */}
            {/* <div class="mobile-menu-wrap mobile-header-border"> */}
            <div class="dashboard-left-sidebar">
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ height: '45rem', marginTop: '0', width: '70%' }}>

                    <div class="profile-box">


                        <div class="profile-contain">
                            <div class="profile-image">
                                <div class="position-relative">
                                    <img src='h ttps://cdn2.iconfinder.com/data/icons/font-awesome/1792/upload-512.png'
                                        // <img src={'../assets/imgs/vendor/' + formData.logo}
                                        class=" lazyload update_img" alt="" />
                                    {/* <div class="cover-icon">
                                        <i class="fa-solid fa-pen">
                                            <input type="file" />

                                        </i>
                                    </div> */}
                                </div>

                            </div>
                            <div className="main-menu main-menu-padding-1 main-menu-lh-1   font-heading">

                                <nav>
                                    <ul>
                                        <li className="hot-deals">
                                            <div className="logo navbar-brand">
                                                <a href='/'>MaterialSeller</a>
                                            </div>
                                        </li>
                                        <li>
                                            <a className='active' href='/'>Home </a>

                                        </li>
                                        <br />
                                        <li>
                                            <a href="/">Login <i className="fi-rs-angle-down"></i></a>
                                            <ul className="sub-menu" >
                                                <li ><a href='/Login'>As user</a></li>
                                                <li><a href='/Seller_login'>As seller</a></li>

                                            </ul>
                                        </li>
                                        <br />
                                        <li>
                                            <a href='/About'>About</a>
                                        </li>
                                        <br />
                                        <li>
                                            <a href='/Contact'>Contact</a>
                                        </li>
                                        <br />

                                        <li>
                                            <a>Services <i className="fi-rs-angle-down"></i></a>
                                            <ul className="sub-menu" >
                                                <li ><a href='/Products'>Buy Material</a></li>
                                                <li><a href='/Seller_registration'>Register as seller</a></li>

                                            </ul>
                                        </li>
                                        <br />



                                        <li>
                                            <a>Account <i className="fi-rs-angle-down"></i></a>
                                            <ul className="sub-menu">
                                                <li>  {
                                                    auth ?
                                                        <div>


                                                            {/* <button type="button"  onClick={handleLogout}>Logout</button> */}
                                                            Hello, {email}
                                                            <li><a onClick={handleLogout}>Logout</a></li>
                                                            <li><a href="/Seller_account"> My account</a></li>
                                                        </div>
                                                        :
                                                        // <div className="account" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                                                        // </div>
                                                        <li><a href="/login">Login</a></li>

                                                }
                                                    {
                                                        utype ?

                                                            <div>
                                                                <li ><a href="/Material_reg"> Material Register</a></li>
                                                            </div>
                                                            :
                                                            null

                                                    }
                                                    <li><a href="/ForgotPassword">Forgot Password</a></li>
                                                    <li><a href="/Sellers">Sellers</a></li>
                                                    <li><a href="/Signup">Signup</a></li>
                                                    <li><a href="/Seller_login">Sellers login</a></li>
                                                    <li><a href="/Sellers">Sellers list</a></li>
                                                    <li><a href="/Products">Products</a></li>
                                                    <li><a href="/categories">Category</a></li>
                                                </li>
                                                <li><a href='/Seller_registration'>Register as seller</a></li>

                                            </ul>
                                        </li>

                                    </ul>
                                </nav>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div >

    )
}

export default Nav;