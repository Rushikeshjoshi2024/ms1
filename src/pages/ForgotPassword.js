import React from "react";

function ForgotPassword() {
    return (
        <div>
            <div className="form-body without-side">
                <div className="website-logo">
                    <a href="/">
                        <div className="logo">
                            <img className="logo-size" src="assets/imgs/logo-light.svg" alt="" />
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
                                <h3>Password Reset</h3>
                                <p>To reset your password, enter the email address you use to sign in to iofrm</p>
                                <form>
                                    <input className="form-control" type="text" name="username" placeholder="E-mail Address" required />
                                    <div className="form-button full-width">
                                        <button id="submit" type="submit" className="ibtn btn-forget">Send Reset Link</button>
                                    </div>
                                </form>
                            </div>
                            <div className="form-sent">
                                <div className="tick-holder">
                                    <div className="tick-icon"></div>
                                </div>
                                <h3>Password link sent</h3>
                                <p>Please check your inbox <a href="https://brandio.io/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b0d9dfd6c2ddf0d9dfd6c2ddc4d5ddc0dcd1c4d59ed9df">[email&#160;protected]</a></p>
                                <div className="info-holder">
                                    <span>Unsure if that email address was correct?</span> <a href="/">We can help</a>.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default ForgotPassword;
