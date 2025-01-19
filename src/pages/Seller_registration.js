import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

import '../pages/Pages.css';
import Footer from "../components/Footer";

import Nav from "../components/Nav";
function Seller_registration() {
    // const [shop_name, setshop_name] = useState('');
    // const [shop_email, setshop_email] = useState('');
    // const [shop_mo_no, setshop_mo_no] = useState('');
    // const [shop_password, setshop_password] = useState('');
    // const [shop_cnf_password, setshop_cnf_password] = useState('');

    const [values, setValues] = useState({
        shop_email: '',
        shop_mo_no: '',
        shop_name: '',
        shop_password: '',
        shop_cnf_password: ''
    });




    const [passwordMatch, setPasswordMatch] = useState(true);
    // const navigate = useNavigate();

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.shop_password === values.shop_cnf_password) {
            // Passwords match, proceed with form submission
            axios.post('https://server-f8g6.onrender.com/seller_reg', values)
                .then(res => alert(res.data.message))
                .catch(err => alert("An error occurred: " + err));
        } else {
            // Passwords don't match, display an error message or handle accordingly
            alert('Passwords do not match!');
            setPasswordMatch(false);
        }
    };

    // try {
    //     const response = await axios.post('http://localhost/api/seller_reg.php', formData);
    //     console.log(response.data);
    //     // Handle response from PHP server
    // } catch (error) {
    //     console.error('Error inserting data:', error);
    // }
    // if (shop_name === "") {
    //     alert("ok");
    // }
    // else {
    //     const url = 'http://localhost/api/seller_reg.php';
    //     let fData = new FormData();
    //     fData.append("shop_name", shop_name);
    //     fData.append("shop_email", shop_email);
    //     fData.append("shop_mo_no", shop_mo_no);
    //     fData.append("shop_password", shop_password);
    //     axios.post(url, fData).then(response => alert(response.data)).catch(error => alert(error));
    // }
    // };



    return (
        <div>
            <Nav />
            <section className="vh-200">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="Register" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={handleSubmit}>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-10 me-3">Register as Seller</p>
                                    {/* <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-linkedin-in"></i>
                                    </button> */}
                                </div>
                                <hr />

                                {/* <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div> */}

                                <div className="form-outline mb-4">
                                    <label className="form-label" for="form3Example3">Shop Name</label>
                                    <input type="text" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter Your Shop Name" name="shop_name" onChange={handleChange} required />
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label" for="form3Example3">Email address</label>
                                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" name="shop_email" onChange={handleChange} required />
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label" for="form3Example3">Mobile Number</label>
                                    <input type="number" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" name="shop_mo_no" onChange={handleChange} required />
                                </div>

                                <div className="form-outline mb-3">
                                    <label className="form-label" for="form3Example4">Create Password</label>
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Create password" name="shop_password" onChange={handleChange} required />
                                </div>

                                <div className="form-outline mb-3">
                                    <label className="form-label" for="form3Example4">Confirm Password</label>
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Confirm password" name="shop_cnf_password" onChange={handleChange} required />
                                </div>

                                {/* <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" for="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div> */}

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg"
                                        // style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
                                        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', }} >Register</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a href="/Seller_login"
                                        className="link-danger">Login</a></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </div>
    )
}
export default Seller_registration;

