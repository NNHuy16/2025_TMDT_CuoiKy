import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const products = [
    {
        id: 1,
        name: "Mô hình robot 3D",
        price: "350.000₫",
        image: "/images/robot.jpg",
    },
    {
        id: 2,
        name: "Chậu cây in 3D",
        price: "120.000₫",
        image: "/images/plantpot.jpg",
    },
    {
        id: 3,
        name: "Móc khóa 3D",
        price: "50.000₫",
        image: "/images/keychain.jpg",
    },
];

export default function HomePage() {
    return (
        <div className="homepage">
            {/* Header */}
            <header className="header">
                <h1 className="logo">3DPrintHub</h1>
                <nav className="nav">
                    <a href="/">Trang chủ</a>
                    <a href="#">Sản phẩm</a>
                    <a href="#">Dịch vụ</a>
                    <a href="#">Liên hệ</a>
                </nav>
                <Link to="/cart" className="cart-button">🛒</Link>
            </header>

            {/* Banner */}
            <section className="banner">
                <h2 className="banner-title">In 3D chất lượng cao theo yêu cầu</h2>
                <p className="banner-subtitle">
                    Từ ý tưởng đến sản phẩm thật – chúng tôi biến mọi thiết kế của bạn thành hiện thực
                </p>
                <button className="btn">Xem sản phẩm</button>
            </section>

            {/* Sản phẩm nổi bật */}
            <section className="section">
                <h3 className="section-title">Sản phẩm nổi bật</h3>
                <div className="product-list">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} className="product-img" />
                            <h4 className="product-name">{product.name}</h4>
                            <p className="product-price">{product.price}</p>
                            <button className="btn full">Thêm vào giỏ</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Lý do chọn chúng tôi */}
            <section className="section gray">
                <h3 className="section-title">Tại sao chọn 3DPrintHub?</h3>
                <div className="features">
                    <div className="feature-card">
                        <h4>Chất lượng in cao</h4>
                        <p>Thiết bị hiện đại đảm bảo độ chính xác và sắc nét cho mọi sản phẩm.</p>
                    </div>
                    <div className="feature-card">
                        <h4>Tùy chỉnh theo yêu cầu</h4>
                        <p>Gửi bản thiết kế hoặc ý tưởng, chúng tôi sẽ hiện thực hóa giúp bạn.</p>
                    </div>
                    <div className="feature-card">
                        <h4>Giao hàng toàn quốc</h4>
                        <p>Dịch vụ giao hàng nhanh chóng đến tận tay bạn dù ở bất cứ đâu.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2025 3DPrintHub. All rights reserved</p>
            </footer>
        </div>
    );
}
