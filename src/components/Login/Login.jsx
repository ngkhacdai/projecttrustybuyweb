import React from "react";
import "./Login.css";
const Login = () => {
    return (
        <div className="container-web">
            <div className="customform">
                <img className="logo" src={"/logoshop.png"} alt="logo" />
                <h3>Đăng nhập</h3>
                <form>
                    <div class="input-wrapper">
                        <input type="text" id="user" required />
                        <label for="user">user name</label>
                    </div>
                    <div class="input-wrapper">
                        <input type="password" required />
                        <label for="user">password</label>
                    </div>
                    <button class="button-71">Đăng nhập</button>
                </form>
            </div>
        </div>
    );
};
export default Login;
