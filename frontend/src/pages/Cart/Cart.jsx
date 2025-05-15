import React from "react";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) => {
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart-page">
            <h1 className="cart-title">Your Cart</h1>

            {cartItems.length === 0 ? (
                <p className="cart-empty">Giỏ hàng đang trống.</p>
            ) : (
                <div className="cart-content">
                    {/* LEFT SIDE - PRODUCTS */}
                    <div className="cart-left">
                        <table className="cart-table">
                            <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
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
                            <button onClick={onClearCart} className="btn-clear">Clear Cart</button>
                            <Link to="/" className="btn-continue">Continue Shopping</Link>
                        </div>
                    </div>

                    {/* RIGHT SIDE - ORDER SUMMARY */}
                    <div className="cart-right">
                        <h2>Order Summary</h2>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>{getTotalPrice().toLocaleString()}₫</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>Miễn phí</span>
                        </div>
                        <div className="summary-row">
                            <span>Tax</span>
                            <span>0₫</span>
                        </div>
                        <hr />
                        <div className="summary-row total">
                            <strong>Total</strong>
                            <strong>{getTotalPrice().toLocaleString()}₫</strong>
                        </div>

                        <Link to="/checkout" className="btn-checkout">Proceed to Checkout</Link>

                        <div className="promo-code">
                            <input type="text" placeholder="Enter promo code" />
                            <button>Apply</button>
                        </div>

                        <p className="note">Shipping costs calculated at checkout.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
