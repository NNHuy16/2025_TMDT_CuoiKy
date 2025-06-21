import React, { useState } from 'react';
import axios from 'axios';
import './CustomPage.css';
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const CustomPage = () => {
    const [file, setFile] = useState(null);
    const [material, setMaterial] = useState('');
    const [color, setColor] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file || !material || !color || quantity <= 0) {
            setMessage('Vui lòng nhập đầy đủ thông tin.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('material', material);
        formData.append('color', color);
        formData.append('quantity', quantity);

        try {
            const response = await axios.post('http://localhost:8080/api/orders', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage('Tạo đơn hàng thành công!');
        } catch (error) {
            console.error(error);
            setMessage('Lỗi khi tạo đơn hàng.');
        }
    };

    return (
        <>
            <Header />
        <div className="custom-container">
            <h2>Custom sản phẩm</h2>
            <form onSubmit={handleSubmit} className="custom-form">
                <label>
                    Tải bản thiết kế:
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                </label>

                <label>
                    Vật liệu:
                    <select value={material} onChange={(e) => setMaterial(e.target.value)}>
                        <option value="">-- Chọn vật liệu --</option>
                        <option value="Gỗ">Gỗ</option>
                        <option value="Nhựa">Nhựa</option>
                        <option value="Kim loại">Kim loại</option>
                    </select>
                </label>

                <label>
                    Màu sắc:
                    <select value={color} onChange={(e) => setColor(e.target.value)}>
                        <option value="">-- Chọn màu sắc --</option>
                        <option value="Đen">Đen</option>
                        <option value="Trắng">Trắng</option>
                        <option value="Xám">Xám</option>
                        <option value="Vàng">Vàng</option>
                    </select>
                </label>

                <label>
                    Số lượng:
                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                </label>

                <button type="submit">Tạo đơn hàng</button>
                {message && <p className="message">{message}</p>}
            </form>
        </div>
    <Footer />
    </>
    );
};

export default CustomPage;
