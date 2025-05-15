import React from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const products = [
    { id: 1, name: "Mô hình robot", price: "350.000₫", image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpvydovwpo3bef" },
    { id: 2, name: "Chậu cây", price: "120.000₫", image: "https://png.pngtree.com/png-clipart/20230205/original/pngtree-3d-plant-pot-png-image_8944509.png" },
    { id: 3, name: "Móc khóa", price: "50.000₫", image: "https://bizweb.dktcdn.net/100/319/996/files/moc-khoa-cao-su-3d.jpg?v=1621398688052" },
    { id: 4, name: "Linh kiện máy", price: "670.000₫", image: "https://blogin3d.com/wp-content/uploads/2014/03/linh-kien-may-in-3D-Reprap.jpg" },
    { id: 5, name: "Phụ kiện in", price: "430.000₫", image: "https://digman.vn/wp-content/uploads/2022/03/a3-1.jpg" },
    { id: 6, name: "Dụng cụ cơ khí", price: "810.000₫", image: "https://thinksmart.com.vn/wp-content/uploads/2019/04/co-khi1-1024x683.jpg" }
];

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="homepage">
            <Header />

            <section className="hero-section">
                <div className="hero-content">
                    <h1>Thiết kế của bạn, in ấn hoàn hảo!</h1>
                    <p>Biến mọi ý tưởng thành hiện thực bằng công nghệ in 3D hiện đại.</p>
                    <div className="hero-buttons">
                        <button className="btn dark">Thiết kế</button>
                        <button className="btn light">Sản phẩm</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="https://www.meme3d.com/wp-content/uploads/2024/06/dai-ly-may-in-3d-lon-nhat-hcm-web-1.webp" alt="Máy in 3D" />
                </div>
            </section>

            <section className="category-section">
                <h2>Bạn thích tạo ra thứ gì?</h2>
                <p>Hãy chọn danh mục bạn quan tâm để chúng tôi hỗ trợ đúng mục tiêu nhất.</p>
                <div className="category-grid">
                    {products.map((product) => (
                        <div key={product.id} className="category-card">
                            <img src={product.image} alt={product.name} />
                            <h4>{product.name}</h4>
                            <p>{product.price}</p>
                        </div>
                    ))}
                </div>
                <button className="btn see-more">Xem thêm</button>
            </section>

            <section className="steps-section">
                <h2>Quy trình 3 bước</h2>
                <div className="steps">
                    <div className="step">
                        <img src="/icons/design.svg" alt="Thiết kế" />
                        <h4>Tải bản thiết kế</h4>
                        <p>Bạn có thể upload hoặc yêu cầu đội ngũ thiết kế của chúng tôi hỗ trợ.</p>
                    </div>
                    <div className="step">
                        <img src="/icons/select.svg" alt="Chọn sản phẩm" />
                        <h4>Chọn sản phẩm</h4>
                        <p>Lựa chọn mẫu vật liệu, màu sắc và số lượng bạn mong muốn.</p>
                    </div>
                    <div className="step">
                        <img src="/icons/delivery.svg" alt="Giao hàng" />
                        <h4>Giao hàng</h4>
                        <p>Chúng tôi giao hàng nhanh chóng trên toàn quốc.</p>
                    </div>
                </div>
            </section>

            <section className="quality-section">
                <div className="quality-left">
                    <h3>In ấn chất lượng, không thỏa hiệp</h3>
                    <p>Chúng tôi cam kết mang đến sản phẩm in 3D sắc nét, bền đẹp và chính xác.</p>
                    <button className="btn dark">Tư vấn ngay</button>
                </div>
                <div className="quality-right">
                    <img src="/images/quality-showcase.png" alt="In chất lượng cao" />
                </div>
            </section>

            <section className="testimonial-section">
                <h2>Các khách hàng nói gì ?</h2>
                <div className="testimonials">
                    <div className="testimonial">
                        <p>“Sản phẩm in rất đẹp và đúng như yêu cầu. Dịch vụ nhanh chóng.”</p>
                        <span>– Nguyễn Văn A</span>
                    </div>
                    <div className="testimonial">
                        <p>“Mình rất hài lòng với trải nghiệm in mẫu lần đầu tiên tại đây.”</p>
                        <span>– Trần Thị B</span>
                    </div>
                    <div className="testimonial">
                        <p>“Sẽ giới thiệu thêm bạn bè đến sử dụng dịch vụ của 3DPrintHub.”</p>
                        <span>– Lê Minh C</span>
                    </div>
                </div>
            </section>
            <Footer/>
            {/*<footer className="footer">*/}
            {/*    <div className="footer-content">*/}
            {/*        <div className="footer-logo">TD Triple D</div>*/}
            {/*        <div className="footer-links">*/}
            {/*            <p>Trang chủ | Sản phẩm | Dịch vụ | Liên hệ</p>*/}
            {/*            <p>Email: contact@3dprint.vn</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <p className="footer-copy">© 2025 TD Triple D. All rights reserved.</p>*/}
            {/*</footer>*/}
        </div>
    );
}