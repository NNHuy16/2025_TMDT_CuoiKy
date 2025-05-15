import React from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) => {
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <>
            <Header />
            <div className="cart-page">
                <h1 className="cart-title">Giỏ Hàng Của Bạn</h1>

                {cartItems.length === 0 ? (
                    <p className="cart-empty">Giỏ hàng đang trống.</p>
                ) : (
                    <div className="cart-content">
                        {/* BÊN TRÁI - SẢN PHẨM */}
                        <div className="cart-left">
                            <table className="cart-table">
                                <thead>
                                <tr>
                                    <th>Sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Tổng</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td className="product-info">
                                            <img src={item.image} alt={item.name} className="item-image" />
                                            <div>
                                                <strong>{item.name}</strong>
                                                <p>Mã SP: #{item.id}</p>
                                            </div>
                                        </td>
                                        <td>{item.price.toLocaleString()}₫</td>
                                        <td>
                                            <input
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                onChange={(e) =>
                                                    onUpdateQuantity(item.id, parseInt(e.target.value))
                                                }
                                            />
                                        </td>
                                        <td>{(item.price * item.quantity).toLocaleString()}₫</td>
                                        <td>
                                            <button className="btn-remove" onClick={() => onRemoveItem(item.id)}>
                                                🗑
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>

                            <div className="cart-actions">
                                <button onClick={onClearCart} className="btn-clear">Xóa tất cả</button>
                                <Link to="/" className="btn-continue">Tiếp tục mua sắm</Link>
                            </div>
                        </div>

                        {/* BÊN PHẢI - TÓM TẮT ĐƠN HÀNG */}
                        <div className="cart-right">
                            <h2>Tóm tắt đơn hàng</h2>
                            <div className="summary-row">
                                <span>Tạm tính</span>
                                <span>{getTotalPrice().toLocaleString()}₫</span>
                            </div>
                            <div className="summary-row">
                                <span>Phí vận chuyển</span>
                                <span>Miễn phí</span>
                            </div>
                            <div className="summary-row">
                                <span>Thuế</span>
                                <span>0₫</span>
                            </div>
                            <hr />
                            <div className="summary-row total">
                                <strong>Tổng cộng</strong>
                                <strong>{getTotalPrice().toLocaleString()}₫</strong>
                            </div>

                            <Link to="/checkout" className="btn-checkout">Thanh toán</Link>

                            <div className="promo-code">
                                <input type="text" placeholder="Nhập mã khuyến mãi" />
                                <button>Áp dụng</button>
                            </div>

                            <p className="note">Chi phí vận chuyển sẽ được tính tại trang thanh toán.</p>
                        </div>
                    </div>
                )}
            </div>
            <Footer/>
        </>
    );
};

export default Cart;
