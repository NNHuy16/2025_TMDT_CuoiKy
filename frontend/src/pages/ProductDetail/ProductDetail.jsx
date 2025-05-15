import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import './ProductDetail.css';

import product1 from '../../assets/image/goku.jpg';
import product2 from '../../assets/image/dragon.jpg';
import product3 from '../../assets/image/ww.jpg';
import product4 from '../../assets/image/pain.jpg';
import product5 from '../../assets/image/gokuVsGohan.jpg';
import product6 from '../../assets/image/gozila.jpg';
import product7 from '../../assets/image/ayaka.png';
import product8 from '../../assets/image/daoBuom.png';
import Footer from "../../components/Footer/Footer.jsx";

const productList = [
    {
        id: '1',
        name: 'Mô hình goku',
        price: '350.000₫',
        image: product1,
        description: 'Mô hình nhân vật goku cực ngầu',
        features: [
            'Chất liệu nhựa PLA cao cấp',
            'In chi tiết, rõ nét đến từng đường nét',
            'Kích thước phù hợp trang trí: 15x15 cm',
            'An toàn cho trẻ em',
            'Bền bỉ với thời gian',
            'Không phai màu khi sử dụng lâu dài',
            'Phù hợp để trưng bày hoặc làm quà tặng'
        ]
    },
    {
        id: '2',
        name: 'Mô hình rồng châu á',
        price: '120.000₫',
        image: product2,
        description: 'Rồng châu Á được in chi tiết',
        features: [
            'Chất liệu nhựa cao cấp',
            'Kích thước 20x20 cm',
            'Màu sắc sống động',
            'Phù hợp trang trí nhà cửa và văn phòng',
            'Dễ dàng vệ sinh'
        ]
    },
    {
        id: '3',
        name: 'Mô hình wonder woman',
        price: '50.000₫',
        image: product3,
        description: 'Siêu anh hùng Wonder Woman',
        features: [
            'In 3D rõ nét',
            'Sơn thủ công tỉ mỉ',
            'Kích thước nhỏ gọn, tiện dụng',
            'Chất liệu an toàn, không độc hại'
        ]
    },
    {
        id: '4',
        name: 'Mô hình pain',
        price: '200.000₫',
        image: product4,
        description: 'Nhân vật phản diện nổi bật',
        features: [
            'Tỉ lệ 1:10',
            'Chất liệu bền đẹp',
            'Sắc nét từng chi tiết',
            'Phù hợp để trưng bày'
        ]
    },
    {
        id: '5',
        name: 'Mô hình goku & gohan',
        price: '400.000₫',
        image: product5,
        description: 'Goku và Gohan cùng chiến đấu',
        features: [
            'Chất liệu resin cao cấp',
            'Chi tiết sắc nét',
            'Kích thước lớn, gây ấn tượng',
            'Món quà lý tưởng cho fan Dragon Ball'
        ]
    },
    {
        id: '6',
        name: 'Mô hình gozila',
        price: '150.000₫',
        image: product6,
        description: 'Quái vật Gozila hùng mạnh',
        features: [
            'Khớp linh hoạt',
            'Chiều cao 25cm',
            'Độ bền cao',
            'Trang trí phòng khách hoặc bàn làm việc'
        ]
    },
    {
        id: '7',
        name: 'Mô hình ayaka',
        price: '150.000₫',
        image: product7,
        description: 'Nhân vật Ayaka từ Genshin Impact',
        features: [
            'Sắc sảo, tinh tế',
            'Màu sắc đẹp',
            'Chất liệu bền bỉ',
            'Thích hợp làm quà tặng'
        ]
    },
    {
        id: '8',
        name: 'Mô hình Dao xương cá',
        price: '150.000₫',
        image: product8,
        description: 'Độc đáo - sắc nét',
        features: [
            'Thích hợp trang trí',
            'Nhựa PLA cao cấp',
            'Thiết kế độc đáo',
            'Dễ dàng vệ sinh và bảo quản'
        ]
    },
];

const ProductDetail = () => {
    const { id } = useParams();
    const product = productList.find(item => item.id === id);

    if (!product) return <p style={{ padding: '40px' }}>Sản phẩm không tồn tại.</p>;

    return (
        <>
            <Header />
            <div className="product-detail-container">
                <div className="image-section">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="info-section">
                    <h2>{product.name}</h2>
                    <p className="price">{product.price}</p>
                    <p className="description">{product.description}</p>

                    <div className="options">
                        <label>Màu sắc</label>
                        <select>
                            <option>Chọn màu sắc</option>
                            <option>Đỏ</option>
                            <option>Xanh</option>
                            <option>Đen</option>
                            <option>Trắng</option>
                        </select>

                        <label>Vị trí in</label>
                        <select>
                            <option>Chọn vị trí in</option>
                            <option>Phía trước</option>
                            <option>Phía sau</option>
                            <option>Bên hông</option>
                        </select>

                        <label>Số lượng</label>
                        <div className="quantity">
                            <button>-</button>
                            <input type="number" value="1" readOnly />
                            <button>+</button>
                        </div>

                        <button className="add-to-cart">Thêm vào giỏ hàng</button>
                    </div>

                    <div className="features">
                        <h4>Đặc điểm nổi bật</h4>
                        <ul>
                            {product.features.map((item, idx) => <li key={idx}>• {item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ProductDetail;
