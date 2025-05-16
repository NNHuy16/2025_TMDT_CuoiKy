import './login.css';
import facebookIcon from '../../assets/image/2023_Facebook_icon.svg.webp';
import googleIcon from '../../assets/image/google-logo.png';

import backgroundImage from '../../assets/image/31836BDF-C3E7-48E2-98D1-92C64F5CF39A.jpeg';
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/header.jsx"; // panda low poly

export default function LoginPage() {
    return (
        <div className="login-page">
            {/* Header */}
            <Header/>

            {/* Login Form */}
            <div
                className="login-container"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="login-box">
                    <input type="text" placeholder="Tên đăng nhập" />
                    <input type="password" placeholder="Mật khẩu" />
                    <div className="forgot-password">Quên mật khẩu?</div>
                    <button className="login-btn">Đăng nhập</button>
                    <div className="social-icons">
                        <img src={facebookIcon} alt="Facebook" />
                        <img src={googleIcon} alt="Gmail" />

                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer/>
        </div>
    );
}
