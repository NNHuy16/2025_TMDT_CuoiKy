import React from 'react';
import './Category.css';
import Header from '../../components/Header/Header.jsx';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

import product1 from '../../assets/image/goku.jpg';
import product2 from '../../assets/image/dragon.jpg';
import product3 from '../../assets/image/ww.jpg';
import product4 from '../../assets/image/pain.jpg';
import product5 from '../../assets/image/gokuVsGohan.jpg';
import product6 from '../../assets/image/gozila.jpg';
import product7 from '../../assets/image/ayaka.png';
import product8 from '../../assets/image/daoBuom.png';
import Footer from "../../components/Footer/Footer.jsx";

const products = [
    { id: 1, name: 'Mô hình goku', price: '350.000₫', image: product1 },
    { id: 2, name: 'Mô hình rồng châu á', price: '120.000₫', image: product2 },
    { id: 3, name: 'Mô hình wonder woman', price: '50.000₫', image: product3 },
    { id: 4, name: 'Mô hình pain', price: '200.000₫', image: product4 },
    { id: 5, name: 'Mô hình goku & gohan', price: '400.000₫', image: product5 },
    { id: 6, name: 'Mô hình gozila', price: '150.000₫', image: product6 },
    { id: 7, name: 'Mô hình ayaka', price: '150.000₫', image: product7 },
    { id: 8, name: 'Mô hình Dao xương cá', price: '150.000₫', image: product8 },
];

const categories = ['Tất cả', 'Đồ chơi 3D', 'Mô hình', 'Phụ kiện 3D', 'Trang trí', 'Đồ dùng cá nhân'];

const Category = () => {


    return (
        <>
            <Header />
            <div className="category-page">
                <div className="category-header">
                    <h2>Sản phẩm của chúng tôi</h2>
                    <p>Tìm kiếm mẫu có sẵn chất lượng cao của chúng tôi cho thiết kế của bạn</p>
                </div>

                <div className="category-filter">
                    <div className="category-tabs">
                        {categories.map((cat, index) => (
                            <span key={index} className={`tab ${index === 0 ? 'active' : ''}`}>{cat}</span>
                        ))}
                    </div>
                    <div className="category-sort">
                        <span>Lọc</span>
                        <i className="fas fa-filter"></i>
                    </div>
                </div>

                <div className="product-grid">
                    {products.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} />
                            <div className="product-info">
                                <h4>{product.name}</h4>
                                <p>{product.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Category;