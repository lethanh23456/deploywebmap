import React, { useState, useEffect } from "react";
import "./thongke.scss";

function Thongke() {
    // Dữ liệu thống kê mẫu
    const [stats] = useState({
        totalVisitors: 15847,
        totalCasesHelped: 3421,
        regions: [
            { name: "Ba Đình", value: 28, color: "#5eb3f6" },
            { name: "Hoàn Kiếm", value: 22, color: "#a78bfa" },
            { name: "Đống Đa", value: 25, color: "#4ade80" },
            { name: "Hai Bà Trưng", value: 15, color: "#60d5f5" },
            { name: "Cầu Giấy", value: 10, color: "#fbbf24" }
        ],
        sponsors: [
            { name: "Nhà hảo tâm A", avatar: "👤", amount: "50M", cases: 12 },
            { name: "Công ty B", avatar: "🏢", amount: "120M", cases: 35 },
            { name: "Tổ chức C", avatar: "🏛️", amount: "80M", cases: 22 },
            { name: "Cá nhân D", avatar: "👨", amount: "30M", cases: 8 }
        ]
    });

    // Animation counter
    const [visitorCount, setVisitorCount] = useState(0);
    const [casesCount, setCasesCount] = useState(0);

    useEffect(() => {
        // Animate visitor count
        const visitorInterval = setInterval(() => {
            setVisitorCount(prev => {
                if (prev >= stats.totalVisitors) {
                    clearInterval(visitorInterval);
                    return stats.totalVisitors;
                }
                return prev + Math.ceil(stats.totalVisitors / 100);
            });
        }, 20);

        // Animate cases count
        const casesInterval = setInterval(() => {
            setCasesCount(prev => {
                if (prev >= stats.totalCasesHelped) {
                    clearInterval(casesInterval);
                    return stats.totalCasesHelped;
                }
                return prev + Math.ceil(stats.totalCasesHelped / 100);
            });
        }, 20);

        return () => {
            clearInterval(visitorInterval);
            clearInterval(casesInterval);
        };
    }, []);

    // Tính tổng để vẽ pie chart
    const total = stats.regions.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = 0;

    const getCoordinates = (percentage, radius = 100) => {
        const angle = (percentage / 100) * 360;
        const rad = ((angle - 90) * Math.PI) / 180;
        return {
            x: 150 + radius * Math.cos(rad),
            y: 150 + radius * Math.sin(rad)
        };
    };

    return (
        <div className="thongke">
            <div className="thongke-container">
                {/* Header Stats */}
                <div className="thongke-header">
                    <div className="stat-card">
                        <div className="stat-icon">👥</div>
                        <div className="stat-info">
                            <div className="stat-number">{visitorCount.toLocaleString()}</div>
                            <div className="stat-label">Số người vào web</div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">🤝</div>
                        <div className="stat-info">
                            <div className="stat-number">{casesCount.toLocaleString()}</div>
                            <div className="stat-label">Hoàn cảnh được giúp đỡ</div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="thongke-main">
                    {/* Info Box */}
                    <div className="info-box">
                        <div className="info-header">
                            <h2>Statistics</h2>
                        </div>
                        <div className="info-content">
                            <p className="info-title">
                                Đây là trang thống kê số người vào web, cũng số hoàn cảnh được giúp đỡ.
                            </p>
                            <p className="info-description">
                                Ở đây cũng sẽ có những hình ảnh cũng danh tính của những mạnh thường quân
                            </p>
                            <div className="info-author">Minh Nguyễn</div>
                        </div>
                    </div>

                    {/* Pie Chart */}
                    <div className="chart-container">
                        <svg viewBox="0 0 300 300" className="pie-chart">
                            {stats.regions.map((region, index) => {
                                const percentage = (region.value / total) * 100;
                                const startAngle = currentAngle;
                                currentAngle += percentage;
                                const endAngle = currentAngle;

                                const startCoord = getCoordinates(startAngle);
                                const endCoord = getCoordinates(endAngle);
                                const largeArc = percentage > 50 ? 1 : 0;

                                const pathData = [
                                    `M 150 150`,
                                    `L ${startCoord.x} ${startCoord.y}`,
                                    `A 100 100 0 ${largeArc} 1 ${endCoord.x} ${endCoord.y}`,
                                    `Z`
                                ].join(' ');

                                return (
                                    <path
                                        key={index}
                                        d={pathData}
                                        fill={region.color}
                                        className="pie-slice"
                                    />
                                );
                            })}
                        </svg>

                        {/* Legend */}
                        <div className="chart-legend">
                            <h3>Statistics</h3>
                            <div className="legend-items">
                                {stats.regions.map((region, index) => (
                                    <div key={index} className="legend-item">
                                        <div 
                                            className="legend-color" 
                                            style={{ backgroundColor: region.color }}
                                        ></div>
                                        <span className="legend-label">{region.name}</span>
                                        <span className="legend-value">{region.value}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sponsors Section */}
                <div className="sponsors-section">
                    <h2 className="sponsors-title">Mạnh Thường Quân</h2>
                    <div className="sponsors-grid">
                        {stats.sponsors.map((sponsor, index) => (
                            <div key={index} className="sponsor-card">
                                <div className="sponsor-avatar">{sponsor.avatar}</div>
                                <div className="sponsor-info">
                                    <h4>{sponsor.name}</h4>
                                    <div className="sponsor-stats">
                                        <div className="sponsor-stat">
                                            <span className="stat-icon">💰</span>
                                            <span>{sponsor.amount}</span>
                                        </div>
                                        <div className="sponsor-stat">
                                            <span className="stat-icon">📊</span>
                                            <span>{sponsor.cases} hoàn cảnh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Thongke;