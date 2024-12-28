import React from 'react';
import { Link } from 'react-router-dom';
import "./Style.css";

function Signin() {
    return (
        <div className="signinDiv">
            <div className="signBox">
                <h1 className="signin_head">Helpdesk System</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Sign In</button>
                </form>
                <div className="row">
                    <Link to="/forget-password" className="forgetLink">
                        Forget password
                    </Link>
                    <Link to="/Signup" className="signupLink">
                        Signup
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signin;
