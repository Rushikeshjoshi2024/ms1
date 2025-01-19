import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import '../components/component.css';
import axios from "axios";
function Search() {
    const navigate = useNavigate();
    const [searchVal, setSearchVal] = useState({
        searchQuery: ''
    });
    // const [data, setData] = useState([]);
    const handleSearchChange = (event) => {
        setSearchVal({ ...searchVal, [event.target.name]: event.target.value });
    };
    axios.defaults.withCredentials = true;
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://server-f8g6.onrender.com/search', searchVal);
            if (response.data.success) {
                // console.log(response.data.data);
                navigate('/Result', { state: { data: response.data.data, query: searchVal.searchQuery } });

                // localStorage.setItem('searchData', response.data.data);
                // window.location.href = '/Result';
                // setData(response.data.data);
            } else {
                alert("Invalid data");
            }
        } catch (err) {
            alert("No result match.");
        }
    };

    return (
        <div>
            <Nav />
            <section className="search-section">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-8 mx-auto">
                            <div className="title d-block text-center">
                                <h2>Search for products</h2>
                                <span className="title-leaf">

                                </span>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="search-box">
                                    <div className="input-group">

                                        <input type="text" className="form-control" name="searchQuery" placeholder="Search something..."
                                            onChange={handleSearchChange} />

                                        <button className="btn theme-bg-color text-white m-0" type="submit" style={{ maxHeight: '3.1rem', maxWidth: '6rem', padding: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }} id="button-addon1">
                                            <img alt="Search" src="assets/imgs/theme/icons/search.svg" style={{ width: '40%', height: '100%', objectFit: 'contain' }} />
                                        </button>

                                        {/* </form> */}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
            <div style={{ paddingTop: '15rem' }}>

                <Footer />
            </div>
        </div >
    )


}
export default Search;