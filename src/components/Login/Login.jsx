import React, { useState } from "react";
import PropTypes from 'prop-types'
import "./Login.css";
export default function Login({ setToken }) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }
    return (
        <div className="container-web">
            <div className="customform">
                <img className="logo" src={"/logoshop.png"} alt="logo" />
                <h3>Đăng nhập</h3>
                <div className="error">

                </div>
                <form onSubmit={handleSubmit}>
                    <div class="input-wrapper">
                        <input value={username} onChange={i => setUserName(i.target.value)} type="text" id="user" required />
                        <label for="user">user name</label>
                    </div>
                    <div class="input-wrapper">
                        <input onChange={i => setPassword(i.target.value)} type="password" required />
                        <label for="user">password</label>
                    </div>
                    <button class="button-71">Đăng nhập</button>
                </form>
            </div>
        </div>
    );
};

async function loginUser(credentials) {
    //sửa đổi link cho phù hợp
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
