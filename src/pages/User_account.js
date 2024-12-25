import React, { useEffect, useState } from 'react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

function User_account() {
    // const [info, setInfo] = useState([]);

    const [values, setValues] = useState({
        name: '',
        email: '',
        mobile_number: '',
        password: '',


    });
    console.log(values.name);
    // const navigate = useNavigate();
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    axios.defaults.withCredentials = true;
    useEffect(() => {
        const handleSubmit = async () => {
            try {
                const response = await axios.get('http://localhost:8081/user_account');
                if (response.data.success) {
                    // alert(response.data.size);
                    // console.log(response.data.data[0]);
                    setValues({
                        name: response.data.data[0].user_name,
                        email: response.data.data[0].user_email,
                        mobile_number: response.data.data[0].mobile_no,
                        password: response.data.data[0].user_password,



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

        handleSubmit();

    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();

        // Passwords match, proceed with form submission
        axios.post('http://localhost:8081/update_user', values)
            .then(res => alert(res.data.message))
            .catch(err => alert("An error occurred: " + err));

    };
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="main-body">
                    <h2 align="center" classNameName='p-15'>My Account</h2>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center pt-30">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" className="rounded-circle p-1 bg-primary" width="110" />
                                        <div className="mt-3">
                                            <h4>{values.name}</h4>
                                            {/* <p className="text-secondary mb-1">Full Stack Developer</p> */}
                                            <p className="text-muted font-size-sm">{values.email}</p>
                                            <p className="text-muted font-size-sm">{values.mobile_number}</p>
                                            {/* <button className="btn btn-primary">Follow</button>
                                            <button className="btn btn-outline-primary">Message</button> */}
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card">
                                <form method="post" onSubmit={handleSubmit}>

                                    <div className="card-body">
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Full Name</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="text" className="form-control" name='name' value={values.name} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Email</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="text" className="form-control" name='email' value={values.email} onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Mobile</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="number" className="form-control" name='mobile_number' value={values.mobile_number} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Change Password</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="password" className="form-control" value={values.password} name='password' onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-3"></div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="submit" className="btn btn-primary px-4" value="Save Changes" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.bundle.min.js"></script>
            <script type="text/javascript">

            </script> */}
            <Footer />
        </div>

    )
}
export default User_account;