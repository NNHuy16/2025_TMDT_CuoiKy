import React from "react";
import "./footer.css";
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column logo-column">
                    <img src="/src/assets/image/logo.png" alt="Logo" className="footer-logo" />
                    <div className="social-icons">
                        {/*<a href="#"><FaFacebookF /></a>*/}
                        {/*<a href="#"><FaTwitter /></a>*/}
                        {/*<a href="#"><FaInstagram /></a>*/}
                        {/*<a href="#"><FaYoutube /></a>*/}
                    </div>
                </div>
                <div className="footer-column">
                    <h4>Công ty</h4>
                    <ul>
                        <li><a href="#">Về TripleThree</a></li>
                        <li><a href="#">Liên hệ</a></li>
                        <li><a href="#">Tuyển dụng</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Sản phẩm</h4>
                    <ul>
                        <li><a href="#">Đơn vị vận chuyển</a></li>
                        <li><a href="#">Phương thức thanh toán</a></li>
                        <li><a href="#">Chính sách bảo mật</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Hỗ trợ</h4>
                    <ul>
                        <li><a href="#">Liên hệ chúng tôi</a></li>
                        <li><a href="#">FAQS</a></li>
                        <li><a href="#">Vận chuyển</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
