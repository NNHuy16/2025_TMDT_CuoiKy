import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="main-header">
        <div className="logo-section" onClick={() => navigate("/")}>
    <img src="/src/assets/image/logo.png" alt="Logo" className="logo-img" />
    <span className="brand-name">Triple D</span>
    </div>

    <nav className="nav-links">
    <a onClick={() => navigate("/")}>Trang chủ</a>
    <a onClick={() => navigate("/category")}>Sản phẩm</a>
    <a href="#">Dịch vụ</a>
    <a href="#">Liên hệ</a>
    </nav>

    <div className="header-icons">
    <i className="fas fa-shopping-cart" onClick={() => navigate("/cart")}>🛒</i>
    <i className="fas fa-user" onClick={() => navigate("/login")}>Login</i>
    </div>
    </header>
);
}
