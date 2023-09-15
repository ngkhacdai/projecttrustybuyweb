import React, { useState } from "react";
import PropTypes from 'prop-types'
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
export default function Login({ setToken }) {
    const [user_email, setUserEmail] = useState('');
    const [user_password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const validateEmail = (email) => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    };
    const handleSubmit = async (e) => {
        if (validateEmail(user_email)) {
            e.preventDefault();
            const token = await loginUser({
                user_email,
                user_password
            });

            setToken(token);
            navigate('/');
        } else {
            e.preventDefault();
            setError('*Email có định dạng: @gmail.com');
        }

    }
    return (
        <div className="container-web">
            <div className="customform">
                <img className="logo" src={"/logoshop.png"} alt="logo" />
                <h3>Đăng nhập</h3>
                <div className="error">
                    {error}
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <input value={user_email} onChange={i => setUserEmail(i.target.value)} type="email" id="user" required />
                        <label for="user">user email</label>
                    </div>
                    <div className="input-wrapper">
                        <input onChange={i => setPassword(i.target.value)} minLength={6} type="password" required />
                        <label for="user">password</label>
                    </div>
                    <button type="submit" className="button-71">Đăng nhập</button>
                </form>
            </div>
        </div>
    );
};

async function loginUser(credentials) {
    //sửa đổi link cho phù hợp
    return fetch('http://localhost:8080/v1/api/access/login', {
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
