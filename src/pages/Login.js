import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// import Nav from "../components/Nav";

function Login() {
    // const [name, setName] = useState('');
    const [values, setValues] = useState({
        user_email: '',
        user_password: '',

    });
    const navigate = useNavigate();
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };
    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('https://server-f8g6.onrender.com')
            .then(res => {
                // console.log(res);
                if (res.data.valid) {
                    // setName(res.data.user_email);
                    navigate('/')

                }
                else {
                    navigate('/Login')
                }
            })
            .catch(err => console.log(err))

    }, [])
    const handleSubmit = (event) => {
        event.preventDefault();
        // Passwords match, proceed with form submission
        axios.post('https://server-f8g6.onrender.com/user_login', values)
            .then(res => {
                if (res.data.Login) {
                    alert("Login successful. Welcome.");
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

            <div className="form-body without-side">
                <div className="website-logo">
                    <a href="/">
                        <div className="logo">
                            {/* <img className="logo-size" src="assets/imgs/logo-light.svg" alt="" /> */}
                            {/* <h4>MaterialSeller</h4> */}
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
                                <h3>Login to account</h3>
                                <p>Access to the most powerfull tool in the entire design and web industry.</p>
                                <form onSubmit={handleSubmit}>
                                    <input className="form-control" type="email" name="user_email" placeholder="E-mail Address" required onChange={handleChange} />
                                    <input className="form-control" type="password" name="user_password" placeholder="Password" required onChange={handleChange} />
                                    <div className="form-button">
                                        <button id="submit" type="submit" className="ibtn">Login</button> <a href="/#">Forget password?</a>
                                    </div>
                                </form>
                                <div className="other-links">
                                    {/* <div className="text">Or login with</div> */}
                                    <a href="'"><i className="fab fa-facebook-f"></i>Facebook</a><a href="/"><i className="fab fa-google"></i>Google</a><a href="/"><i className="fab fa-linkedin-in"></i>Linkedin</a>
                                </div>
                                <div className="page-links">
                                    <a href="/#">Register new account</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Login;
