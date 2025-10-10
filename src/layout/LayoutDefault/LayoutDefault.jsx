import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss";
import anh2 from "../../assets/anh2.png";
import Filter from "../../Pages/filter/index";

function LayoutDefault() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    return (
        <div className="layout-default">
            <header className="layout-default__header">
                <nav className="layout-default__nav">
                    <div className="container">
                        <Link to="/login" className="navbar-brand">
                            <img src={anh2} className="login"/>
                        </Link>
                        <div className="navbarHeader">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to="/home" className="nav-link">
                                        <span className="text-upcase">Home</span>
                                    </NavLink>
                                </li>
                                {/* <li className="nav-item">
                                    <NavLink to="/aboutus" className="nav-link">
                                        <span className="text-upcase">aboutus</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/pinpoint" className="nav-link">
                                    <span className="text-upcase">pinpoint</span>
                                    </NavLink>
                                </li> */}
                                <li className="nav-item">
                                    <NavLink to="/thongke" className="nav-link">
                                    <span className="text-upcase">thongke</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <button 
                                        onClick={toggleFilter} 
                                        className="nav-link nav-button"
                                    >
                                        <span className="text-upcase">filter</span>
                                    </button>
                                </li>
                                {/* <li className="nav-item">
                                    <NavLink to="/campaign" className="nav-link">
                                    <span className="text-upcase">campaign</span>
                                    </NavLink>
                                </li>
                                 <li className="nav-item">
                                    <NavLink to="/hotsearch" className="nav-link">
                                    <span className="text-upcase">hotsearch</span>
                                    </NavLink>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Filter Sidebar - chỉ render khi isFilterOpen = true */}
            {isFilterOpen && (
                <>
                    <div className={`filter-sidebar open`}>
                        <div className="filter-sidebar__header">
                            <h3>Bộ lọc</h3>
                            <button 
                                className="filter-sidebar__close" 
                                onClick={toggleFilter}
                            >
                                ✕
                            </button>
                        </div>
                        <div className="filter-sidebar__content">
                            <Filter />
                        </div>
                    </div>

                    {/* Overlay */}
                    <div 
                        className="filter-overlay" 
                        onClick={toggleFilter}
                    ></div>
                </>
            )}

            <main className="layout-default__main">
                <Outlet />
            </main>
            
            <footer className="layout-default__footer">
                <div className="footer-content">
                    <div className="footer-main">
                        <div className="footer-section">
                            <h3>Về Chúng Tôi</h3>
                            <p>Trang web map hàng đầu Việt Nam với những trải nghiệm tuyệt vời nhất.</p>
                        </div>
                        
                        <div className="footer-section">
                            <h3>Liên Kết</h3>
                            <ul>
                                <li>aboutus</li>
                                <li>pinpoint</li>
                                <li>thongke</li>
                                <li>filter</li>
                                <li>campaign</li>
                                <li>hotseatch</li>
                            </ul>
                        </div>
                        
                        <div className="footer-section">
                            <h3>Hỗ Trợ</h3>
                            <ul>
                                <li>Trung tâm trợ giúp</li>
                                <li>Báo cáo lỗi</li>
                                <li>Điều khoản sử dụng</li>
                                <li>Chính sách bảo mật</li>
                            </ul>
                        </div>
                        
                        <div className="footer-section">
                            <h3>Liên Hệ</h3>
                            <p>📧 contact@nronline.com</p>
                            <p>📞 1900-xxxx</p>
                            <p>📍 Hà Nội, Việt Nam</p>
                        </div>
                    </div>
                    
                    <div className="footer-bottom">
                        <div className="social-icons">
                            <a href="#" className="social-icon">📘</a>
                            <a href="#" className="social-icon">📷</a>
                            <a href="#" className="social-icon">🐦</a>
                            <a href="#" className="social-icon">📺</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default LayoutDefault;