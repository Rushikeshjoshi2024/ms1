import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Signup() {

    const [values, setValues] = useState({
        user_name: '',
        user_email: '',
        user_password: '',
        user_cnf_password: '',
    });


    const [passwordMatch, setPasswordMatch] = useState(true);
    // const navigate = useNavigate();


    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.user_password === values.user_cnf_password) {
            // Passwords match, proceed with form submission
            axios.post('https://server-f8g6.onrender.com/user_reg', values)
                .then(res => alert(res.data.message))
                .catch(err => alert("An error occurred: " + err));
        } else {
            // Passwords don't match, display an error message or handle accordingly
            alert('Passwords do not match!');
            setPasswordMatch(false);
        }
    };
    return (
        <div className="form-body without-side">
            <div className="website-logo">
                <a href="/">
                    <div className="logo">
                        {/* <img className="logo-size" src="assets/imgs/logo-light.svg" alt="" /> */}
                    </div>
                </a>
            </div>
            <div className="row">
                <div className="img-holder">
                    <div className="bg"></div>
                    <div className="info-holder">
                        <img src="assets/imgs/graphic3.svg" alt="" />
                    </div>
                </div>
                <div className="form-holder">
                    <div className="form-content">
                        <div className="form-items">
                            <h3>Register new account</h3>
                            {/* <p>Access to the most powerfull tool in the entire design and web industry.</p> */}
                            <form onSubmit={handleSubmit}>
                                <input className="form-control" type="text" name="user_name" placeholder="Full Name" required onChange={handleChange} />
                                <input className="form-control" type="email" name="user_email" placeholder="E-mail Address" required onChange={handleChange} />
                                <input className="form-control" type="password" name="user_password" placeholder="Password" required onChange={handleChange} />
                                <input className="form-control" type="password" name="user_cnf_password" placeholder="Confirm Password" required onChange={handleChange} />
                                <div className="form-button">
                                    <button id="submit" type="submit" className="ibtn">Register</button>
                                </div>
                            </form>
                            <div className="other-links">
                                <a href="/"><i className="fab fa-facebook-f"></i>Facebook</a><a href="/"><i className="fab fa-google"></i>Google</a><a href="/"></a>
                            </div>
                            <div className="page-links">
                                <a href="/Login">Login to account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Signup;