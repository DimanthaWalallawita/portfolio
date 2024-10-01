import React from "react";
import "../../Assets/CSS/AdminCSS/login.css";

const login = () => {
    return (
    <div className="login-body">
        <div className="login-middle">
            <div className="top-login">
                <h1 style={{ color: '#48abe0' }}>ADMIN PANEL</h1>
            </div>

            <div className="bottom-login">
                <div className="login-filed">
                    <label htmlFor="">User Name</label>
                    <input type="text" />
                </div>

                <div className="login-filed">
                    <label htmlFor="">Password</label>
                    <input type="password" />
                </div>

                <div className="login-filed">
                    <button>Login</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default login;
