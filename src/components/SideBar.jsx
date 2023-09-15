import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/SideBar.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
const SideBar = ({ children }) => {
    const [account, setAccount] = useState({})
    const menuItem = [
        {
            path: '/',
            name: "Trang chủ",
            icon: 'assets/home.png'
        },
        {
            path: '/accounts',
            name: "Tài khoản",
            icon: 'assets/group.png'
        },
        {
            path: '/products',
            name: "Sản phẩm",
            icon: 'assets/skin-care.png'
        },
        {
            path: '/invoices',
            name: "Hóa đơn",
            icon: 'assets/invoice.png'
        },
    ]


    return (
        <div className="main-container">
            <div className='sidebar-container'>
                <img className='sidebar-logo' src={require('../assets/logo.png')} />
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="sidebar-item" activeclassName="active">
                            <div className="sidebar-icon">
                                <img src={require(`../${item.icon}`)} alt={item.name} />
                            </div>
                            <div className="sidebar-label">{item.name}</div>
                        </NavLink>
                    ))
                }
                <div className="sidebar-account">
                    <img className='avatar' src='https://inanh.net/wp-content/uploads/2020/07/in_anh_the_2.jpg' />
                    <div>
                        <p className='sidebar-account-name'>Nguyễn Văn A</p>
                        <p className='sidebar-account-email'>Admin1</p>
                    </div>
                    <img src={require('../assets/exit.png')} width={'9%'} height={'14%'} style={{ margin: '7% 0 0 -10px' }} />
                </div>
            </div>
            <main>{children}</main>
        </div>
    )
}

export default SideBar
