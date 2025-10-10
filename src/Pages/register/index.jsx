import React, { useState } from 'react';
import './register.scss';
import { Link } from 'react-router-dom';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <h2 className="register-title">Đăng Ký</h2>
          <p className="register-subtitle">Tạo tài khoản mới để bắt đầu</p>
        </div>

        <form className="register-form">
          <div className="input-group">
            <div className="input-icon">
              <i className="icon">👤</i>
            </div>
            <input
              type="text"
              name="fullname"
              placeholder="Họ và tên"
              className="form-input"
            />
          </div>

          <div className="input-group">
            <div className="input-icon">
              <i className="icon">📧</i>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-input"
            />
          </div>

          <div className="input-group">
            <div className="input-icon">
              <i className="icon">📱</i>
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Số điện thoại"
              className="form-input"
            />
          </div>

          <div className="input-group">
            <div className="input-icon">
              <i className="icon">🔒</i>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Mật khẩu"
              className="form-input password-input"
            />
            <button 
              type="button" 
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '👁' : '👁‍🗨'}
            </button>
          </div>

          <div className="input-group">
            <div className="input-icon">
              <i className="icon">🔑</i>
            </div>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Xác nhận mật khẩu"
              className="form-input password-input"
            />
            <button 
              type="button" 
              className="password-toggle"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? '👁' : '👁‍🗨'}
            </button>
          </div>

          <div className="form-checkbox">
            <label className="terms-agreement">
              <input type="checkbox" className="checkbox" />
              <span>Tôi đồng ý với <a href="#" className="terms-link">Điều khoản sử dụng</a> và <a href="#" className="terms-link">Chính sách bảo mật</a></span>
            </label>
          </div>

          <button type="submit" className="submit-button">
            <span className="button-icon">✨</span> Đăng ký ngay
          </button>
        </form>

        <div className="login-link">
          <span>Đã có tài khoản? </span>
          <Link to="/login" className="login-link-text">Đăng nhập</Link>
        </div>

        <div className="home-link">
          <Link to="/" className="home-link-text">
            <span className="home-icon">⬅</span>
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;