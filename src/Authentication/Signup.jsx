import React from 'react';
import { Link } from 'react-router-dom';
import "./Style.css";

function Signup() {
    return (
        <div className="signinDiv">
            <div className="signBox">
                <h1 className="signin_head">Helpdesk System - Sign Up</h1>
                 <p> Sign up here </p>
                <form>
                    <input type="text" placeholder="Username" />
                    
                    <input type="password" placeholder="Password" />
                    <input type="email" placeholder="Email" />
                    <button type="submit" className="signup-button">Sign Up</button>
                </form>
                <div className="row">
                                    <Link to="/forget-password" className="forgetLink">
                                        Forget password
                                    </Link>
                                    <Link to="/Signup" className="signupLink">
                                        Signin
                                    </Link>
                                </div>
            </div>
        </div>
    );
}

export default Signup;
