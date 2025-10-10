import React from 'react';
import './login.scss';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2 className="login-title">Đăng Nhập</h2>
          <p className="login-subtitle">Chào mừng bạn quay trở lại</p>
        </div>

        <form className="login-form">
          <div className="input-group">
            <div className="input-icon">
              <i className="icon">👤</i>
            </div>
            <input
              type="text"
              name="username"
              placeholder="Nhập tên đăng nhập"
              className="form-input"
            />
          </div>

          <div className="input-group">
            <div className="input-icon">
              <i className="icon">🔒</i>
            </div>
            <input
              type="password"
              name="password"
              placeholder="Nhập mật khẩu"
              className="form-input password-input"
            />
            <button type="button" className="password-toggle">
              👁
            </button>
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" className="checkbox" />
              Ghi nhớ tài khoản
            </label>
            <button type="button" className="forgot-password">
              Quên mật khẩu?
            </button>
          </div>

          <button type="submit" className="submit-button">
            <span className="button-icon">➡️</span> Đăng nhập
          </button>
        </form>

        <div className="register-link">
          <span>Chưa có tài khoản? </span>
          <Link to="/register" className="register-link-text">Đăng ký</Link>
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

export default Login;