import React from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { FaFileUpload } from "react-icons/fa";
import { CgSelectR } from "react-icons/cg";
import { CiDeliveryTruck } from "react-icons/ci";

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
                        <FaFileUpload size={32}/>
                        <h4>Tải bản thiết kế</h4>
                        <p>Bạn có thể upload hoặc yêu cầu đội ngũ thiết kế của chúng tôi hỗ trợ.</p>
                    </div>
                    <div className="step">
                        <CgSelectR size={32}/>
                        <h4>Chọn sản phẩm</h4>
                        <p>Lựa chọn mẫu vật liệu, màu sắc và số lượng bạn mong muốn.</p>
                    </div>
                    <div className="step">
                        <CiDeliveryTruck size={32}/>
                        <h4>Giao hàng</h4>
                        <p>Chúng tôi giao hàng nhanh chóng trên toàn quốc.</p>
                    </div>
                    {/* Nút tiến hành */}
                    <div className="proceed-button-container">
                        <Link to="/custom" className="proceed-button">
                            Tiến hành
                        </Link>
                    </div>
                </div>
            </section>

            <section className="quality-section">
                <div className="quality-left">
                    <p className="why-title">Tại sao chọn chúng tôi</p>
                    <h3>In ấn chất lượng,<br />không thỏa hiệp</h3>
                    <p className="subtext">
                        Chúng tôi sử dụng công nghệ in hiện đại và vật liệu cao cấp để đảm bảo thiết kế của bạn trông đẹp nhất.
                    </p>
                    <div className="features-grid">
                        <div className="feature-card">
                            <strong>No Minimum Orders</strong>
                            <p>Đặt đúng số lượng bạn cần, kể cả chỉ một sản phẩm.</p>
                        </div>
                        <div className="feature-card">
                            <strong>Fast Production</strong>
                            <p>Hầu hết các đơn hàng sẽ được giao trong vòng 2–3 ngày làm việc sau khi được duyệt.</p>
                        </div>
                        <div className="feature-card">
                            <strong>Premium Materials</strong>
                            <p>Chúng tôi sử dụng vật liệu chất lượng cao, đẹp mắt và bền lâu.</p>
                        </div>
                        <div className="feature-card">
                            <strong>Eco-Friendly Options</strong>
                            <p>Các lựa chọn in ấn bền vững dành cho những khách hàng quan tâm đến môi trường.</p>
                        </div>
                    </div>
                    <button className="btn black">Xem thêm về chất lượng</button>
                </div>
                <div className="quality-right">
                    <img src="https://png.pngtree.com/png-clipart/20230528/original/pngtree-3d-sale-tag-design-10-off-order-now-banner-png-image_9172342.png" alt="Máy in 3D" />
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

        </div>
    );
}