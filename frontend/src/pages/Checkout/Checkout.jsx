import React, { useState } from "react";
import "./checkout.css";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Checkout = ({ cartItems, onPlaceOrder }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        note: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.phone || !formData.address) {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }
        onPlaceOrder(formData);
    };

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    const shipping = 30000;
    const tax = Math.floor(subtotal * 0.05);
    const total = subtotal + shipping + tax;

    return (
        <>
            <Header />
        <div className="checkout-page">
            <h1 className="checkout-title">Thanh toán</h1>
            <div className="checkout-content">
                <form className="checkout-left" onSubmit={handleSubmit}>
                    <label>
                        Họ và tên
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Số điện thoại
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Địa chỉ giao hàng
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Ghi chú
                        <textarea
                            name="note"
                            value={formData.note}
                            onChange={handleChange}
                            placeholder="Ghi chú thêm (tuỳ chọn)"
                        />
                    </label>
                    <button className="btn-place-order" type="submit">
                        Đặt hàng
                    </button>
                </form>

                <div className="checkout-right">
                    <h2>Đơn hàng</h2>
                    <div className="summary-row">
                        <span>Tạm tính</span>
                        <span>{subtotal.toLocaleString()}₫</span>
                    </div>
                    <div className="summary-row">
                        <span>Phí vận chuyển</span>
                        <span>{shipping.toLocaleString()}₫</span>
                    </div>
                    <div className="summary-row">
                        <span>Thuế (5%)</span>
                        <span>{tax.toLocaleString()}₫</span>
                    </div>
                    <div className="summary-row total">
                        <span>Tổng cộng</span>
                        <span>{total.toLocaleString()}₫</span>
                    </div>

                    <div className="promo-code">
                        <input type="text" placeholder="Nhập mã giảm giá" />
                        <button>Áp dụng</button>
                    </div>

                    <p className="note">
                        Phí giao hàng sẽ được tính dựa trên địa chỉ nhận hàng. Tổng tiền đã bao gồm VAT nếu có.
                    </p>
                </div>
            </div>
        </div>
            <Footer/>
            </>
    );
};

export default Checkout;
