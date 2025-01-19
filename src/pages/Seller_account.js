import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from "../components/Nav";
import { useNavigate } from 'react-router-dom'; import '../pages/Pages.css';

import Footer from "../components/Footer";
function Seller_account() {
    // const [images, setImages] = useState([]);

    const [formData, setFormData] = useState({
        // Define your form fields here
        // For example:
        shop_name: '',
        seller_email: '',
        seller_address: '',
        owner_name: '',
        seller_mobile_no: '',
        seller_password: '',
        login_status: '',
        total_material: '',
        state: '',
        district: '',
        street: '',
        landmark: '',
        pincode: '',
        img: '',
        // new_img: 'fdbfhdbhfsdbhhb',
        logo: ''
        // Add more fields as needed
    });
    // useEffect(() => {
    //     fetchImages();
    // }, []);
    const navigate = useNavigate();
    const [file, setFile] = useState();
    const [logo, setLogo] = useState();

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        const formData = new FormData();
        formData.append('image', file);
        // Passwords match, proceed with form submission
        axios.post('https://server-f8g6.onrender.com/update_seller_image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }

        })


            .then(res => alert(res.data.message))
            .catch(err => alert("An error occurred: " + err));

        window.location.reload();
    };
    const handleLogoChange = (event) => {
        const logo = event.target.files[0];

        const formData = new FormData();
        formData.append('logo', logo);
        // Passwords match, proceed with form submission
        axios.post('https://server-f8g6.onrender.com/update_seller_logo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }

        })


            .then(res => alert(res.data.message))
            .catch(err => alert("An error occurred: " + err));

        window.location.reload();
    };
    // const handleLogout = () => {
    //     axios.get('https://server-f8g6.onrender.com/logout')
    //         .then(res => {
    //             // console.log(res.data.valid);
    //             window.location.reload();
    //             alert("See you soon.");

    //         })
    //         .catch(err => console.log(err))
    // };
    // console.log(logo);
    axios.defaults.withCredentials = true;
    // const handleChange = (e) => {
    //     const { shop_name, value } = e.target;
    //     console.log('Name:', shop_name);
    //     console.log('Value:', value);
    //     // Handle changes in form fields and update the state accordingly
    //     setFormData({
    //         ...formData,
    //         [shop_name]: value,
    //         [e.target.seller_email]: e.target.value,
    //         [e.target.seller_address]: e.target.value,
    //         [e.target.seller_mobile_no]: e.target.value,
    //         [e.target.seller_password]: e.target.value,
    //         [e.target.login_status]: e.target.value,
    //     });
    // };
    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(value);
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
            // [seller_email]: value,
            // [seller_address]: value,
            // [seller_mobile_no]: value,
            // [seller_password]: value,
            // [login_status]: value,
        }));
    };
    // console.log(formData.seller_password);


    const handleSubmit = (event) => {
        event.preventDefault();

        // Passwords match, proceed with form submission
        axios.post('https://server-f8g6.onrender.com/update_seller', formData)


            .then(res => alert(res.data.message))
            .catch(err => alert("An error occurred: " + err));

        // window.location.reload();
    };
    useEffect(() => {
        axios.get('https://server-f8g6.onrender.com')
            .then(res => {
                // console.log(res);
                if (res.data.valid) {
                    // navigate('')

                }
                else {
                    navigate('/Seller_login')
                }
            })
            .catch(err => console.log(err))



        const handleSubmit1 = async () => {
            try {
                const response = await axios.get('https://server-f8g6.onrender.com/my_account');
                if (response.data.success) {
                    // alert(response.data.size);
                    // console.log(response.data.data[0]);
                    setFormData({
                        shop_name: response.data.data[0].shop_name,
                        seller_email: response.data.data[0].seller_email,
                        owner_name: response.data.data[0].owner_name,
                        seller_address: response.data.data[0].seller_address,
                        seller_mobile_no: response.data.data[0].seller_mobile_no,
                        seller_password: response.data.data[0].seller_password,
                        login_status: response.data.data[0].login_status,
                        reg_date: response.data.data[0].reg_date,
                        pincode: response.data.data[0].pincode,
                        landmark: response.data.data[0].landmark,
                        street: response.data.data[0].street,
                        district: response.data.data[0].district,
                        img: response.data.data[0].shop_image,
                        logo: response.data.data[0].shop_logo,
                        state: response.data.data[0].state,
                        total_material: response.data.size,


                    });
                    // setData(response.data.data); // Assuming response.data.data contains the array of seller details

                    // console.log(response.data.data[0].shop_name);
                } else {
                    alert("Invalid data");
                }
            } catch (err) {
                alert("An error occurred: " + err);
            }
        };

        handleSubmit1();
    }, []);
    if (formData.login_status === 'N') {
        formData.login_status = 'Not activated'
    }
    else if (formData.login_status === 'Y') {
        formData.login_status = 'Activated'
    }
    if (file !== undefined) {

        // console.log(file.name);
        formData.img = file.name;
    }
    if (logo !== undefined) {

        // console.log(file.name);
        formData.logo = logo.name;
    }
    // const fetchImages = async () => {
    //     try {
    //         const response = await axios.get('https://server-f8g6.onrender.com/images');
    //         console.log(response.data)
    //         setImages(response.data[0]);
    //     } catch (error) {
    //         console.error('Error fetching images', error);
    //     }
    // };
    return (
        <div>
            <Nav />


            <div className="mobile-menu d-md-none d-block mobile-cart">
                <ul>
                    <li className="active">
                        <a href="/">
                            <i className="iconly-Home icli"></i>
                            <span>Home</span>
                        </a>
                    </li>

                    <li className="mobile-category">
                        <a href="/">
                            <i className="iconly-Category icli js-link"></i>
                            <span>Category</span>
                        </a>
                    </li>

                    <li>
                        <a href="/" className="search-box">
                            <i className="iconly-Search icli"></i>
                            <span>Search</span>
                        </a>
                    </li>

                    <li>
                        <a href="/" className="notifi-wishlist">
                            <i className="iconly-Heart icli"></i>
                            <span>My Wish</span>
                        </a>
                    </li>

                    <li>
                        <a href="/">
                            <i className="iconly-Bag-2 icli fly-cate"></i>
                            <span>Cart</span>
                        </a>
                    </li>
                </ul>
            </div>

            {/* <section className="breadcrumb-section pt-0">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-contain">
                                <h2>User Dashboard</h2>
                                <nav>
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <a href="index.html">
                                                <i className="fa-solid fa-house"></i>
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active">User Dashboard</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


            {/*--------------------------------- mobile sidebar offcanvas---------------------------------*/}
            <div className="user-dashboard-section section-b-space" >
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-xxl-3 col-lg-4">
                            <div className="dashboard-left-sidebar">
                                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ height: '45rem', marginTop: '0', width: '70%' }}>

                                    <div className="profile-box">
                                        <div className="cover-image">
                                            <img src={`https://server-f8g6.onrender.com/uploads/${formData.img}`} className="img-fluid  lazyload"
                                                alt="" />
                                        </div>

                                        <div className="profile-contain">
                                            <div className="profile-image">
                                                <div className="position-relative">
                                                    <img src={`http://localhost:3001/${formData.img}`}
                                                        // <img src={'../assets/imgs/vendor/' + formData.logo}
                                                        className=" lazyload update_img" alt="" />
                                                    <div className="cover-icon">
                                                        <i className="fa-solid fa-pen">
                                                            <input type="file" onChange={handleFileChange} />

                                                        </i>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="profile-name">
                                                <h3>{formData.shop_name}</h3>
                                                <h6 className="text-content" name='shop_name'>{formData.seller_email}</h6>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="nav nav-pills user-nav-pills" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-dashboard-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-dashboard" type="button"><i data-feather="home"></i>
                                                DashBoard</button>
                                        </li>

                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-address-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-address" type="button" role="tab"><i
                                                    data-feather="map-pin"></i>Address</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-profile" type="button" role="tab"><i data-feather="user"></i>
                                                Profile</button>
                                        </li>

                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-security-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-security" type="button" role="tab"><i
                                                    data-feather="shield"></i>
                                                Privacy</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*--------------------------------- mobile sidebar offcanvas end ---------------------------------*/}

            {/*--------------------------------- lg screen sidebar offcanvas start---------------------------------*/}


            <section className="user-dashboard-section section-b-space">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-xxl-3 col-lg-4">
                            <div className="dashboard-left-sidebar">
                                <div className="profile-box">

                                    <div className="cover-image">
                                        <img src={`https://server-f8g6.onrender.com/uploads/${formData.img}`} className=" lazyload update_img"
                                            alt="" />
                                        <div className="cover-icon" style={{ height: '10px', width: '10px', }}>
                                            <i className="fa fa-upload">
                                                <input type="file" name='new_cover_img' onChange={handleFileChange} />

                                            </i>
                                        </div>

                                    </div>

                                    <div className="profile-contain">
                                        <div className="profile-image">
                                            <div className="position-relative">
                                                <img src={`https://server-f8g6.onrender.com/uploads/${formData.logo}`}
                                                    className=" lazyload update_img" alt="" />
                                                <div className="cover-icon">
                                                    <i className="fa fa-upload">

                                                        <input type="file" name='new_img' onChange={handleLogoChange} />

                                                    </i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="profile-name">
                                            <h3>{formData.shop_name}</h3>
                                            <h6 className="text-content" name='shop_name'>{formData.seller_email}</h6>
                                        </div>
                                    </div>

                                    <ul className="nav nav-pills user-nav-pills" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-dashboard-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-dashboard" type="button"><i data-feather="home"></i>
                                                DashBoard</button>
                                        </li>

                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-material-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-material" type="button" role="tab"><i
                                                    data-feather="map-pin"></i>Registered Materials</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-address-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-address" type="button" role="tab"><i
                                                    data-feather="map-pin"></i>Address</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-profile" type="button" role="tab"><i data-feather="user"></i>
                                                Profile</button>
                                        </li>

                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-security-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-security" type="button" role="tab"><i
                                                    data-feather="shield"></i>
                                                Privacy</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-9 col-lg-8">
                            <button className="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" >

                                Menu</button>
                            <div className="dashboard-right-sidebar">
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-dashboard" role="tabpanel">
                                        <div className="dashboard-home">
                                            <div className="title">
                                                <h2>My Dashboard</h2>
                                                <span className="title-leaf">
                                                    <svg className="icon-width bg-gray">
                                                        {/* <use xlink:href="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></use> */}
                                                    </svg>
                                                </span>
                                            </div>

                                            <div className="dashboard-user-name">
                                                <h6 className="text-content">Hello, <b className="text-title">{formData.owner_name}</b></h6>
                                                <p className="text-content">From your My Account Dashboard you have the ability to
                                                    view a snapshot of your recent account activity and update your account
                                                    information. Select a link below to view or edit information.</p>
                                            </div>

                                            <div className="total-box">
                                                <div className="row g-sm-4 g-3">
                                                    <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                                        <div className="total-contain">
                                                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/order.svg"
                                                                className="img-1 blur-up lazyload" alt="" />
                                                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/order.svg" className="blur-up lazyload"
                                                                alt="" />
                                                            <div className="total-detail">
                                                                <h5>Total material registered.</h5>
                                                                <h3>{formData.total_material}</h3>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                                        <div className="total-contain">
                                                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/pending.svg"
                                                                className="img-1 blur-up lazyload" alt="" />
                                                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/pending.svg" className="blur-up lazyload"
                                                                alt="" />
                                                            <div className="total-detail">
                                                                <h5>Total material views</h5>
                                                                <h3>count</h3>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                                        <div className="total-contain">
                                                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/wishlist.svg"
                                                                className="img-1 blur-up lazyload" alt="" />
                                                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/svg/wishlist.svg"
                                                                className="blur-up lazyload" alt="" />
                                                            <div className="total-detail">
                                                                <h5>Total Wishlist</h5>
                                                                <h3>32158</h3>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>

                                            <div className="dashboard-title">
                                                <h3>Account Information</h3>
                                            </div>

                                            <div className="row g-4">
                                                <div className="col-xxl-12">
                                                    <div className="dashboard-content-title">
                                                        {/* <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                                            data-bs-target="#pills-profile" type="button" role="tab"><i data-feather="user"></i>
                                                            Profile
                                                        </button> */}
                                                        <h4>Contact Information
                                                            {/* <p id="pills-profile-tab" data-bs-toggle="pill"
                                                            data-bs-target="#pills-profile" type="button" role="tab">Edit</p> */}


                                                        </h4>
                                                    </div>
                                                    <div className="dashboard-detail">
                                                        <h6 className="text-content">{formData.owner_name}</h6>
                                                        <h6 className="text-content">{formData.seller_email}</h6>
                                                        {/* <a href="javascript:void(0)">Change Password</a> */}
                                                    </div>
                                                </div>

                                                {/* <div className="col-xxl-6">
                                                    <div className="dashboard-content-title">
                                                        <h4>Newsletters <a href="javascript:void(0)" data-bs-toggle="modal"
                                                            data-bs-target="#editProfile">Edit</a></h4>
                                                    </div>
                                                    <div className="dashboard-detail">
                                                        <h6 className="text-content">You are currently not subscribed to any
                                                            newsletter</h6>
                                                    </div>
                                                </div> */}

                                                <div className="col-12">
                                                    <div className="dashboard-content-title">
                                                        <h4>Address
                                                            {/* <a href="javascript:void(0)" data-bs-toggle="modal"
                                                            data-bs-target="#editProfile">Edit</a> */}
                                                        </h4>
                                                    </div>

                                                    <div className="row g-4">
                                                        <div className="col-xxl-6">
                                                            <div className="dashboard-detail">
                                                                <h6 className="text-content">Shop Address</h6>
                                                                <h6 className="text-content">{formData.seller_address}</h6>
                                                                {/* <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#editProfile">Edit Address</a> */}
                                                            </div>
                                                        </div>

                                                        <div className="col-xxl-6">
                                                            <div className="dashboard-detail">
                                                                <h6 className="text-content">See on Google Map.</h6>
                                                                <h6 className="text-content">Google map</h6>
                                                                {/* <a href="javascript:void(0)" data-bs-toggle="modal"
                                                                    data-bs-target="#editProfile">Edit Address</a> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel">
                                        <div className="dashboard-profile">
                                            <div className="title">
                                                <h2>My Profile</h2>
                                                <span className="title-leaf">
                                                    <svg className="icon-width bg-gray">
                                                        {/* <use xlink:href="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></use> */}
                                                    </svg>
                                                </span>
                                            </div>

                                            <div className="profile-detail dashboard-bg-box">
                                                <div className="dashboard-title">
                                                    <h3>Profile Name</h3>
                                                </div>

                                                <div className="location-profile">
                                                    <ul>
                                                        <li>
                                                            <div className="location-box">
                                                                <i data-feather="map-pin"></i>
                                                                <h6>{formData.owner_name}</h6>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="location-box">
                                                                <i data-feather="mail"></i>
                                                                <h6>{formData.seller_email}</h6>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="location-box">
                                                                <i data-feather="check-square"></i>
                                                                <h6>Account status:{formData.login_status}</h6>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="profile-description">
                                                    <p>Residences can be classNameified by and how they are connected to
                                                        neighbouring residences and land. Different types of housing tenure can
                                                        be used for the same physical type.</p>
                                                </div>
                                            </div>


                                            <div className="profile-about dashboard-bg-box">
                                                <div className="row">
                                                    <div className="col-xxl-7">
                                                        <div className="dashboard-title mb-3">
                                                            <h3>Profile About</h3>
                                                        </div>
                                                        <form onSubmit={handleSubmit}>
                                                            <div className="table-responsive">
                                                                <table className="table">
                                                                    <tbody>
                                                                        {/* <tr>
                                                                        <td>Gender :</td>
                                                                        <td><input type='text' /></td>
                                                                    </tr> */}
                                                                        {/* <tr>
                                                                        <td>Birthday :</td>
                                                                        <td>21/05/1997</td>
                                                                    </tr> */}
                                                                        <tr>
                                                                            <td>Phone Number :</td>
                                                                            <td>
                                                                                <input type='text' value={formData.seller_mobile_no} name='seller_mobile_no' onChange={handleChange} />
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Address :</td>
                                                                            <td>
                                                                                <input type='text' value={formData.seller_address} name='seller_address' onChange={handleChange} />
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>

                                                            <div className="dashboard-title mb-3">
                                                                <h3>Login Details</h3>
                                                            </div>

                                                            <div className="table-responsive">
                                                                <table className="table">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>Email :</td>
                                                                            <td>
                                                                                <input type='text' value={formData.seller_email} name='seller_email' onChange={handleChange} />
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Password :</td>
                                                                            <td>
                                                                                <input type='password' value={formData.seller_password} name='seller_password' onChange={handleChange} />
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>

                                                            <button className="btn btn-sm add-button w-100 " ><i data-feather="edit"></i>
                                                                Submit</button>
                                                        </form>
                                                    </div>

                                                    <div className="col-xxl-5">
                                                        <div className="profile-image">
                                                            <img src="../assets/images/inner-page/dashboard-profile.png"
                                                                className="img-fluid blur-up lazyload" alt="" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-address" role="tabpanel">
                                        <div className="dashboard-address">
                                            <div className="title title-flex">
                                                <div>
                                                    <h2>Shop Address</h2>
                                                    <span className="title-leaf">
                                                        <svg className="icon-width bg-gray">
                                                            {/* <use
                                                                xlink:href="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf">
                                                            </use> */}
                                                        </svg>
                                                    </span>
                                                </div>

                                                {/* <button className="btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 mt-3"
                                                    data-bs-toggle="modal" data-bs-target="#add-address"><i data-feather="plus"
                                                        className="me-2"></i> Shop Address</button> */}
                                            </div>

                                            <div className="row g-sm-4 g-3">
                                                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-6 ">
                                                    <div className="address-box">
                                                        <form onSubmit={handleSubmit}>
                                                            <select className="form-group" name='state' style={{ border: '1px groove', padding: '18px', borderRadius: '5px' }} onChange={handleChange} value={formData.state}>
                                                                <option disabled selected>Select State</option>
                                                                <option value='Mahatrashtra'>Mahatrashtra</option>
                                                                <option>Andhra pradesh</option>
                                                                <option>Telangana</option>

                                                            </select>
                                                            <select className="form-group" name='district' style={{ border: '1px groove', padding: '18px', borderRadius: '5px' }} onChange={handleChange} value={formData.district} >
                                                                <option disabled selected>Select District</option>
                                                                <option>Nanded</option>
                                                                <option>Mumbai</option>
                                                                <option>Pune</option>

                                                            </select>
                                                            <input type='text' className="form-group" placeholder='city' name='seller_address' value={formData.seller_address} onChange={handleChange} />
                                                            <input type='text' className="form-group" placeholder='street' name='street' value={formData.street} onChange={handleChange} />
                                                            <input type='text' className="form-group" placeholder='Landmark' name='landmark' value={formData.landmark} onChange={handleChange} />
                                                            <input type='text' className="form-group" placeholder='pincode' name='pincode' value={formData.pincode} onChange={handleChange} />
                                                            <div className="button-group">
                                                                <button className="btn btn-sm add-button w-100" ><i data-feather="edit"></i>
                                                                    Submit</button>

                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-material" role="tabpanel">
                                        <div className="dashboard-address">
                                            <div className="title title-flex">
                                                <div>
                                                    <h2>Registered material</h2>
                                                    <span className="title-leaf">
                                                        <svg className="icon-width bg-gray">
                                                            {/* <use
                                                                xlink:href="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf">
                                                            </use> */}
                                                        </svg>
                                                    </span>
                                                </div>

                                                {/* <button className="btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 mt-3"
                                                    data-bs-toggle="modal" data-bs-target="#add-address"><i data-feather="plus"
                                                        className="me-2"></i> Shop Address</button> */}
                                            </div>

                                            <div className="row g-sm-4 g-3">
                                                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-6 ">
                                                    <div className="address-box">
                                                        <form onSubmit={handleSubmit}>
                                                            <select className="form-group" name='state' style={{ border: '1px groove', padding: '18px', borderRadius: '5px' }} onChange={handleChange} value={formData.state}>
                                                                <option disabled selected>Select State</option>
                                                                <option value='Mahatrashtra'>Mahatrashtra</option>
                                                                <option>Andhra pradesh</option>
                                                                <option>Telangana</option>

                                                            </select>
                                                            <select className="form-group" name='district' style={{ border: '1px groove', padding: '18px', borderRadius: '5px' }} onChange={handleChange} value={formData.district} >
                                                                <option disabled selected>Select District</option>
                                                                <option>Nanded</option>
                                                                <option>Mumbai</option>
                                                                <option>Pune</option>

                                                            </select>
                                                            <input type='text' className="form-group" placeholder='city' name='seller_address' value={formData.seller_address} onChange={handleChange} />
                                                            <input type='text' className="form-group" placeholder='street' name='street' value={formData.street} onChange={handleChange} />
                                                            <input type='text' className="form-group" placeholder='Landmark' name='landmark' value={formData.landmark} onChange={handleChange} />
                                                            <input type='text' className="form-group" placeholder='pincode' name='pincode' value={formData.pincode} onChange={handleChange} />
                                                            <div className="button-group">
                                                                <button className="btn btn-sm add-button w-100" ><i data-feather="edit"></i>
                                                                    Submit</button>

                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>



                                            </div>
                                        </div>
                                    </div>


                                    <div className="tab-pane fade" id="pills-security" role="tabpanel">
                                        <div className="dashboard-privacy">
                                            <div className="dashboard-bg-box">
                                                <div className="dashboard-title mb-4">
                                                    <h3>Privacy</h3>
                                                </div>

                                                <div className="privacy-box">
                                                    <div className="d-flex align-items-start">
                                                        <h6>Allows others to see my profile</h6>
                                                        <div className="form-check form-switch switch-radio ms-auto">
                                                            <input className="form-check-input" type="checkbox" role="switch"
                                                                id="redio" />
                                                            <label className="form-check-label" for="redio"></label>
                                                        </div>
                                                    </div>

                                                    <p className="text-content">all peoples will be able to see my profile</p>
                                                </div>

                                                <div className="privacy-box">
                                                    <div className="d-flex align-items-start">
                                                        <h6>who has save this profile only that people see my profile</h6>
                                                        <div className="form-check form-switch switch-radio ms-auto">
                                                            <input className="form-check-input" type="checkbox" role="switch"
                                                                id="redio2" />
                                                            <label className="form-check-label" for="redio2"></label>
                                                        </div>
                                                    </div>

                                                    <p className="text-content">all peoples will not be able to see my profile</p>
                                                </div>

                                                <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white">Save
                                                    Changes</button>
                                            </div>

                                            <div className="dashboard-bg-box mt-4">
                                                <div className="dashboard-title mb-4">
                                                    <h3>Account settings</h3>
                                                </div>

                                                <div className="privacy-box">
                                                    <div className="d-flex align-items-start">
                                                        <h6>Deleting Your Account Will Permanently</h6>
                                                        <div className="form-check form-switch switch-radio ms-auto">
                                                            <input className="form-check-input" type="checkbox" role="switch"
                                                                id="redio3" />
                                                            <label className="form-check-label" for="redio3"></label>
                                                        </div>
                                                    </div>
                                                    <p className="text-content">Once your account is deleted, you will be logged out
                                                        and will be unable to log in back.</p>
                                                </div>

                                                <div className="privacy-box">
                                                    <div className="d-flex align-items-start">
                                                        <h6>Deleting Your Account Will Temporary</h6>
                                                        <div className="form-check form-switch switch-radio ms-auto">
                                                            <input className="form-check-input" type="checkbox" role="switch"
                                                                id="redio4" />
                                                            <label className="form-check-label" for="redio4"></label>
                                                        </div>
                                                    </div>

                                                    <p className="text-content">Once your account is deleted, you will be logged out
                                                        and you will be create new account</p>
                                                </div>

                                                <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white">Delete My
                                                    Account</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section >
            <Footer />

        </div >
    )
}
export default Seller_account;