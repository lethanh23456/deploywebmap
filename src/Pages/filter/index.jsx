import React, { useState } from "react";
import "./filter.scss";

function Filter() {
    // Dữ liệu mẫu - bạn có thể thay bằng API call
    const [filterData] = useState({
        regions: [
            {
                id: 1,
                name: "Quận Ba Đình",
                cases: [
                    { id: 101, name: "Gia đình bà Nguyễn Thị Lan", location: { lat: 21.0285, lng: 105.8542 }, description: "Mẹ già ốm đau, con thất nghiệp" },
                    { id: 102, name: "Anh Trần Văn Minh", location: { lat: 21.0295, lng: 105.8552 }, description: "Bị tai nạn lao động, mất khả năng làm việc" },
                    { id: 103, name: "Chị Phạm Thu Hà", location: { lat: 21.0305, lng: 105.8562 }, description: "Góa chồng, nuôi 3 con nhỏ" }
                ]
            },
            {
                id: 2,
                name: "Quận Hoàn Kiếm",
                cases: [
                    { id: 201, name: "Cụ Lê Văn Sơn", location: { lat: 21.0245, lng: 105.8412 }, description: "Sống một mình, không nơi nương tựa" },
                    { id: 202, name: "Gia đình anh Hoàng Minh", location: { lat: 21.0255, lng: 105.8422 }, description: "Con bị bệnh hiểm nghèo" }
                ]
            },
            {
                id: 3,
                name: "Quận Đống Đa",
                cases: [
                    { id: 301, name: "Bà Trần Thị Hoa", location: { lat: 21.0145, lng: 105.8312 }, description: "Nhà bị cháy, mất chỗ ở" },
                    { id: 302, name: "Anh Nguyễn Đức Anh", location: { lat: 21.0155, lng: 105.8322 }, description: "Thất nghiệp lâu ngày, nợ nần chồng chất" },
                    { id: 303, name: "Chị Vũ Thị Mai", location: { lat: 21.0165, lng: 105.8332 }, description: "Đơn thân nuôi con nhỏ bị khuyết tật" }
                ]
            }
        ],
        allCityOption: {
            name: "Toàn thành phố Hà Nội",
            totalCases: 8
        }
    });

    const [selectedRegion, setSelectedRegion] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    // Hàm xử lý khi click vào một hoàn cảnh
    const handleCaseClick = (caseItem) => {
        console.log("Chuyển đến vị trí:", caseItem);
        // Ở đây bạn sẽ gọi hàm để map di chuyển đến vị trí
        // Ví dụ: moveMapToLocation(caseItem.location);
        
        // Có thể dispatch event hoặc callback để thông báo cho map component
        const event = new CustomEvent('moveToLocation', { 
            detail: { 
                location: caseItem.location,
                name: caseItem.name 
            } 
        });
        window.dispatchEvent(event);
    };

    // Lọc danh sách theo search
    const getFilteredCases = () => {
        if (selectedRegion === "all") {
            return filterData.regions.flatMap(region => 
                region.cases.filter(c => 
                    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    c.description.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        } else if (selectedRegion) {
            const region = filterData.regions.find(r => r.id === selectedRegion);
            return region ? region.cases.filter(c => 
                c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                c.description.toLowerCase().includes(searchTerm.toLowerCase())
            ) : [];
        }
        return [];
    };

    const getTotalCases = () => {
        return filterData.regions.reduce((total, region) => total + region.cases.length, 0);
    };

    return (
        <div className="filter">
            <div className="filter__header">
                <h4>Bộ lọc hoàn cảnh khó khăn</h4>
                <p className="filter__description">
                    Chọn khu vực để xem danh sách các hoàn cảnh cần hỗ trợ
                </p>
            </div>

            {/* Tìm kiếm */}
            <div className="filter__search">
                <input 
                    type="text"
                    placeholder="Tìm kiếm theo tên hoặc mô tả..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    disabled={!selectedRegion}
                />
            </div>

            {/* Chọn khu vực */}
            <div className="filter__regions">
                <h5>Chọn khu vực:</h5>
                
                {/* Option: Toàn thành phố */}
                <div 
                    className={`filter__region-item ${selectedRegion === "all" ? "active" : ""}`}
                    onClick={() => setSelectedRegion("all")}
                >
                    <div className="region-header">
                        <span className="region-icon">🏙️</span>
                        <span className="region-name">{filterData.allCityOption.name}</span>
                    </div>
                    <span className="region-count">{getTotalCases()} hoàn cảnh</span>
                </div>

                {/* Các quận */}
                {filterData.regions.map(region => (
                    <div 
                        key={region.id}
                        className={`filter__region-item ${selectedRegion === region.id ? "active" : ""}`}
                        onClick={() => setSelectedRegion(region.id)}
                    >
                        <div className="region-header">
                            <span className="region-icon">📍</span>
                            <span className="region-name">{region.name}</span>
                        </div>
                        <span className="region-count">{region.cases.length} hoàn cảnh</span>
                    </div>
                ))}
            </div>

            {/* Danh sách hoàn cảnh */}
            {selectedRegion && (
                <div className="filter__cases">
                    <div className="cases-header">
                        <h5>Danh sách hoàn cảnh</h5>
                        <span className="cases-count">
                            {getFilteredCases().length} kết quả
                        </span>
                    </div>
                    
                    <div className="cases-list">
                        {getFilteredCases().length > 0 ? (
                            getFilteredCases().map(caseItem => (
                                <div 
                                    key={caseItem.id}
                                    className="case-item"
                                    onClick={() => handleCaseClick(caseItem)}
                                >
                                    <div className="case-icon">📌</div>
                                    <div className="case-info">
                                        <h6 className="case-name">{caseItem.name}</h6>
                                        <p className="case-description">{caseItem.description}</p>
                                    </div>
                                    <div className="case-arrow">→</div>
                                </div>
                            ))
                        ) : (
                            <div className="no-results">
                                <p>Không tìm thấy kết quả phù hợp</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Hướng dẫn */}
            {!selectedRegion && (
                <div className="filter__guide">
                    <div className="guide-icon">ℹ️</div>
                    <p>Vui lòng chọn một khu vực để xem danh sách các hoàn cảnh khó khăn</p>
                </div>
            )}
        </div>
    );
}

export default Filter;