
import React, { useState } from "react";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";


import './App.css'

import {BrowserRouter, Routes,Route}  from "react-router-dom";
import Category from "./pages/categorys/categorys.jsx";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";


function App() {
    // 3 sản phẩm mẫu
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Mô hình Iron Man 3D",
            price: 250000,
            quantity: 1,
            image: "https://images-cdn.ubuy.co.in/667c19fcd8a32c7ae42e5ea9-metal-earth-fascinations-marvel-iron-man.jpg"
        },
        {
            id: 2,
            name: "Khủng long in 3D",
            price: 180000,
            quantity: 2,
            image: "https://down-vn.img.susercontent.com/file/sg-11134201-7rd44-lvsy064ngampa9"
        },
        {
            id: 3,
            name: "Mô hình nhà 3D",
            price: 320000,
            quantity: 1,
            image: "https://xaydungducthao.com/uploads/images/m%E1%BA%ABu%20nh%C3%A0%20nh%E1%BB%8F%20%C4%91%E1%BA%B9p/m%E1%BA%ABu%20nh%C3%A0%20nh%E1%BB%8F%20%C4%91%E1%BA%B9p%202/mo-hinh-nha-cap-4/mo-hinh-nha-cap-4-3d-hien-dai-1.jpg"
        },
    ]);

    // Hàm cập nhật số lượng
    const onUpdateQuantity = (id, quantity) => {
        if (quantity < 1) return;
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    // Hàm xóa sản phẩm
    const onRemoveItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const handlePlaceOrder = (formData) => {
        // Xử lý đơn hàng tại đây
        console.log("Đơn hàng:", formData, cartItems);
        // Sau khi xử lý, có thể xóa giỏ hàng
        setCartItems([]);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/cart"
                    element={
                        <Cart
                            cartItems={cartItems}
                            onUpdateQuantity={onUpdateQuantity}
                            onRemoveItem={onRemoveItem}
                        />
                    }
                />
                <Route
                    path="/checkout"
                    element={
                        <Checkout cartItems={cartItems} onPlaceOrder={handlePlaceOrder} />
                    }
                />
                <Route path='/' element={<Home />} />
                <Route path='/category' element={<Category />} />
                <Route path="/product/:id" element={<ProductDetail />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
