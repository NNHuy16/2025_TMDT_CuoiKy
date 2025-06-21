import React, { useState } from "react";
import "./checkout.css";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Checkout = ({ cartItems = [], orderData = null, onPlaceOrder }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        note: "",
        promoCode: "",
        paymentMethod: "COD"
    });
    const [discount, setDiscount] = useState(0);
    const [message, setMessage] = useState("");
    const [activeTab, setActiveTab] = useState(orderData ? "custom" : "normal");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleApplyPromo = () => {
        if (formData.promoCode === "GIAM10") {
            setDiscount(10);
            setMessage("Áp dụng mã khuyến mãi thành công!");
        } else {
            setDiscount(0);
            setMessage("Mã không hợp lệ.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, address } = formData;
        if (!name || !phone || !address) {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }
        onPlaceOrder({ ...formData, discount });
    };

    const isCustom = activeTab === "custom";
    const subtotal = isCustom
        ? orderData?.quantity * 500000 || 0
        : cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const shipping = 30000;
    const tax = Math.floor(subtotal * 0.05);
    const totalBeforeDiscount = subtotal + shipping + tax;
    const total = totalBeforeDiscount - Math.floor((totalBeforeDiscount * discount) / 100);

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
                        <label>
                            Phương thức thanh toán
                            <select
                                name="paymentMethod"
                                value={formData.paymentMethod}
                                onChange={handleChange}
                            >
                                <option value="COD">Thanh toán khi nhận hàng</option>
                                <option value="VNPAY">VNPay</option>
                                <option value="MOMO">Momo</option>
                            </select>
                        </label>
                        <button className="btn-place-order" type="submit">
                            Đặt hàng
                        </button>
                        {message && <p className="checkout-message">{message}</p>}
                    </form>

                    <div className="checkout-right">
                        <h2>Đơn hàng</h2>
                        <div className="checkout-tabs">
                            <button
                                className={activeTab === "normal" ? "active" : ""}
                                onClick={() => setActiveTab("normal")}
                            >
                                Sản phẩm có sẵn
                            </button>
                            <button
                                className={activeTab === "custom" ? "active" : ""}
                                onClick={() => setActiveTab("custom")}
                            >
                                Sản phẩm custom
                            </button>
                        </div>

                        {isCustom ? (
                            orderData ? (
                                <ul className="custom-summary">
                                    <li><strong>Vật liệu:</strong> {orderData.material}</li>
                                    <li><strong>Màu sắc:</strong> {orderData.color}</li>
                                    <li><strong>Số lượng:</strong> {orderData.quantity}</li>
                                    {orderData.filename && <li><strong>File thiết kế:</strong> {orderData.filename}</li>}
                                    {orderData.size && <li><strong>Kích thước:</strong> {orderData.size}</li>}
                                    {orderData.description && <li><strong>Mô tả thêm:</strong> {orderData.description}</li>}
                                </ul>
                            ) : (
                                <p>Không có dữ liệu sản phẩm tùy chỉnh.</p>
                            )
                        ) : (
                            cartItems.length > 0 ? (
                                cartItems.map((item, index) => (
                                    <div key={index} className="cart-summary-item">
                                        <span>{item.title} x {item.quantity}</span>
                                        <span>{(item.price * item.quantity).toLocaleString()}₫</span>
                                    </div>
                                ))
                            ) : (
                                <p>Giỏ hàng trống.</p>
                            )
                        )}

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
                        {discount > 0 && (
                            <div className="summary-row">
                                <span>Giảm giá ({discount}%)</span>
                                <span>-{Math.floor((totalBeforeDiscount * discount) / 100).toLocaleString()}₫</span>
                            </div>
                        )}
                        <div className="summary-row total">
                            <span>Tổng cộng</span>
                            <span>{total.toLocaleString()}₫</span>
                        </div>

                        <div className="promo-code">
                            <input
                                type="text"
                                name="promoCode"
                                value={formData.promoCode}
                                onChange={handleChange}
                                placeholder="Nhập mã giảm giá"
                            />
                            <button type="button" onClick={handleApplyPromo}>Áp dụng</button>
                        </div>

                        <p className="note">
                            Phí giao hàng sẽ được tính dựa trên địa chỉ nhận hàng. Tổng tiền đã bao gồm VAT nếu có.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Checkout;
