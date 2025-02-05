import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../pages/Pages.css';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
function Seller_login() {
    const [values, setValues] = useState({
        seller_email: '',
        seller_password: '',

    });
    const navigate = useNavigate();
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };
    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('https://server-f8g6.onrender.com')
            .then(res => {
                if (res.data.user === 'seller') {
                    console.log(res.data);
                    navigate('/')


                }
                else {
                    navigate('/Seller_login')
                }
            })
            .catch(err => console.log(err))

    }, [])
    const handleSubmit = (event) => {
        event.preventDefault();
        // Passwords match, proceed with form submission
        axios.post('https://server-f8g6.onrender.com/seller_login', values)
            .then(res => {
                if (res.data.Login) {
                    alert("Login successful.Welcome.");
                    navigate('/')
                }
                else {
                    alert("Invalid User name or password");
                }
            }
            )
            .catch(err => alert("An error occurred: " + err));

    };
    return (
        <div>
            <Nav />
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="Login" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={handleSubmit}>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-10 me-3">Login as Seller</p>
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
                                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" name='seller_email' required onChange={handleChange} />
                                    <label className="form-label" for="form3Example3">Email address</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password" name='seller_password' required onChange={handleChange} />
                                    <label className="form-label" for="form3Example4">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" for="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="/ForgotPassword" className="text-body">Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg"
                                        // style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
                                        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', }}>Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/Seller_registration"
                                        className="link-danger">Register</a></p>
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
export default Seller_login;