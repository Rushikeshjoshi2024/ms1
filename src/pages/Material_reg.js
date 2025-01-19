import React, { useEffect, useState } from 'react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Material_reg() {
    const [categories, setCategories] = useState([]);
    const [image, setImage] = useState(null);
    const [Material_Name, setMaterialName] = useState('');
    const [Material_category, setMaterialcategory] = useState('');
    const [Material_price, setMaterialprice] = useState('');
    const [Material_sell_price, setMaterial_sell_price] = useState('');
    const [Material_brand, setMaterialbrand] = useState('');
    const [Material_color, setMaterialcolor] = useState('');
    const [isExec, setisExec] = useState('');
    const [id, setId] = useState('');
    const [values, setValues] = useState({
        Material_Name: '',
        Material_category: '',
        Material_price: '',
        Material_sell_price: '',
        Material_brand: '',
        Material_color: '',
        isExec: '',
        Material_img: '',
        id: ''
    });

    const navigate = useNavigate();
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    axios.defaults.withCredentials = true;
    useEffect(() => {
        const handleSubmit = async () => {
            try {
                const response = await axios.get('https://server-f8g6.onrender.com/all_category');
                if (response.data.success) {
                    setCategories(response.data.data);
                } else {
                    // alert("Invalid data");
                }
            } catch (err) {
                // alert("An error occurred: " + err);
            }
        };
        handleSubmit();
    }, []);

    useEffect(() => {
        axios.get('https://server-f8g6.onrender.com')
            .then(res => {
                setId(res.data.id);
                if (res.data.user === 'seller') {
                    navigate('/Material_reg')
                }
                else {
                    navigate('/Seller_login')
                }
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('Material_Name', Material_Name);
        formData.append('Material_category', Material_category);
        formData.append('Material_price', Material_price);
        formData.append('Material_sell_price', Material_sell_price);
        formData.append('Material_brand', Material_brand);
        formData.append('Material_color', Material_color);
        formData.append('isExec', isExec);
        formData.append('id', id);
        if (image) {
            formData.append('image', image);
        }
        if (true) {
            axios.post('https://server-f8g6.onrender.com/mat_reg', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => alert(res.data.message))
                .catch(err => alert("An error occurred: " + err));
        } else {
            alert('Error!');
        }
    };

    return (
        <div>
            <Nav />
            <div className="page-content pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                            <div className="row">
                                <div className="col-lg-12 col-md-8">
                                    <div className="login_wrap widget-taber-content background-white">
                                        <div className="padding_eight_all bg-white">
                                            <div className="heading_s1">
                                                <h1 className="mb-5">Register your material</h1>
                                                {/* <p className="mb-30">Already have an account? <a href='page-login.html'>Login</a></p> */}
                                            </div>
                                            <form method="post" onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <input type="text" required="" name="Material_Name" placeholder="Material Name" onChange={(e) => setMaterialName(e.target.value)} />
                                                </div>
                                                <select className="form-group" name='Material_category' style={{ border: '1px groove', padding: '18px', borderRadius: '5px' }} onChange={(e) => setMaterialcategory(e.target.value)} >
                                                    <option selected disabled>Select category</option>
                                                    {categories.map(item => (

                                                        <option value={item.category_id}>{item.category}</option>
                                                    ))}
                                                </select>
                                                <div className="form-group">
                                                    <input required="" type="number" name="Material_price" placeholder="Material original price" onChange={(e) => setMaterialprice(e.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <input required="" type="number" name="Material_sell_price" placeholder="Material selling price" onChange={(e) => setMaterial_sell_price(e.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <input required="" type="text" name="Material_brand" placeholder="Material Brand" onChange={(e) => setMaterialbrand(e.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <input required="" type="text" name="Material_color" placeholder="Material color (if applicable.)" onChange={(e) => setMaterialcolor(e.target.value)} />
                                                </div>
                                                <select className="form-group" name='Material_category' style={{ border: '1px groove', padding: '18px', borderRadius: '5px' }} onChange={(e) => setisExec(e.target.value)} >
                                                    <option selected disabled>Exclusive material ?</option>
                                                    <option value="1">True</option>
                                                    <option value="0">False</option>
                                                </select>
                                                <div className="form-group" >
                                                    <input required="" type="file" name="Material_img" style={{ borderStyle: 'hidden' }} onChange={(e) => setImage(e.target.files[0])} />
                                                </div>
                                                {/* <div className="login_footer form-group">
                                                    <div className="chek-form">
                                                        <input type="text" required="" name="email" placeholder="Security code *" />
                                                    </div>
                                                    <span className="security-code">
                                                        <b className="text-new">8</b>
                                                        <b className="text-hot">6</b>
                                                        <b className="text-sale">7</b>
                                                        <b className="text-best">5</b>
                                                    </span>
                                                </div> */}
                                                {/* <div className="payment_option mb-50">
                                                    <div className="custome-radio">
                                                        <input className="form-check-input" required="" type="radio" name="payment_option" id="exampleRadios3" checked="" />
                                                        <label className="form-check-label" for="exampleRadios3" data-bs-toggle="collapse" data-target="#bankTranfer" aria-controls="bankTranfer">I am a customer</label>
                                                    </div>
                                                    <div className="custome-radio">
                                                        <input className="form-check-input" required="" type="radio" name="payment_option" id="exampleRadios4" checked="" />
                                                        <label className="form-check-label" for="exampleRadios4" data-bs-toggle="collapse" data-target="#checkPayment" aria-controls="checkPayment">I am a vendor</label>
                                                    </div>
                                                </div> */}
                                                <div className="login_footer form-group mb-50">
                                                    <div className="chek-form">
                                                        <div className="custome-checkbox">
                                                            <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox12" value="" required />
                                                            <label className="form-check-label" for="exampleCheckbox12"><span>I agree to terms &amp; Policy.</span></label>
                                                        </div>
                                                    </div>
                                                    {/* <a href='page-privacy-policy.html'><i className="fi-rs-book-alt mr-5 text-muted"></i>Lean more</a> */}
                                                </div>
                                                <div className="form-group mb-30">
                                                    <button type="submit" className="btn btn-fill-out btn-block hover-up font-weight-bold" name="login">Submit &amp; Register</button>
                                                </div>
                                                <p className="font-xs text-muted"><strong>Note:</strong>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default Material_reg;