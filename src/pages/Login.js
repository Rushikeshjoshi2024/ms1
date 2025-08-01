import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

// import Nav from "../components/Nav";




function Login() {
    // const [name, setName] = useState('');
    const [values, setValues] = useState({
        user_email: '',
        user_password: '',

    });

    const [user, setUser] = useState(null);

    const handleLoginSuccess = async (credentialResponse) => {
        console.log("Google Login Success:", credentialResponse);
        const token = credentialResponse.credential;

        try {
            // Send the token to the backend for verification
            const serverResponse = await axios.post(
                `https://server-f8g6.onrender.com/api/auth/google`,
                { token }
            );

            console.log("Server Response:", serverResponse.data);
            // Set the user state with the data from the backend
            setUser(serverResponse.data.user);

        } catch (error) {
            console.error("Login Failed:", error);
        }
    };

    const handleLoginError = () => {
        console.log('Login Failed');
    };

    const handleLogout = () => {
        setUser(null);
    };
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
                                <main className="main-content">
                                    {user ? (
                                        // If user is logged in, show their info and a logout button
                                        <div className="profile-card">
                                            <h2>Welcome!</h2>
                                            <img src={user.picture} alt={user.fullName} className="profile-picture" />
                                            <h3>{user.fullName}</h3>
                                            <p>{user.email}</p>
                                            <button onClick={handleLogout} className="logout-button">
                                                Logout
                                            </button>
                                        </div>
                                    ) : (
                                        // If user is not logged in, show the login button
                                        <div className="login-card">
                                            <h2>Please Log In</h2>
                                            <p>Sign in with your Google account to continue.</p>
                                            <GoogleLogin
                                                onSuccess={handleLoginSuccess}
                                                onError={handleLoginError}
                                            />
                                        </div>
                                    )}
                                </main>
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
