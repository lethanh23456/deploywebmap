import { useState } from "react";
import "./trans.scss";
import qrCode from "../../assets/qr.png"; 

function Trans() {
    const [activeTab, setActiveTab] = useState('info');

    const bankAccounts = [
        {
            bank: "Vietcombank",
            accountNumber: "1234567890",
            accountName: "Ủy ban Mặt trận Tổ quốc Việt Nam",
            content: "Ủng hộ đồng bào bão lũ"
        },
        {
            bank: "BIDV",
            accountNumber: "0987654321",
            accountName: "Ủy ban Mặt trận Tổ quốc Việt Nam",
            content: "Ủng hộ đồng bào bão lũ"
        },
        {
            bank: "Agribank",
            accountNumber: "1122334455",
            accountName: "Ủy ban Mặt trận Tổ quốc Việt Nam",
            content: "Ủng hộ đồng bào bão lũ"
        }
    ];

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert('Đã sao chép!');
    };

    return (
        <div className="trans">
            <div className="trans__tabs">
                <button 
                    className={`trans__tab ${activeTab === 'info' ? 'active' : ''}`}
                    onClick={() => setActiveTab('info')}
                >
                    Thông tin chuyển khoản
                </button>
                <button 
                    className={`trans__tab ${activeTab === 'qr' ? 'active' : ''}`}
                    onClick={() => setActiveTab('qr')}
                >
                    Mã QR
                </button>
            </div>

            <div className="trans__content">
                {activeTab === 'info' ? (
                    <div className="trans__info">
                        <div className="trans__description">
                            <p>Đây là những tin tức hot, cập bách cần người giúp đỡ vì dụ như ngập lụt, bão.</p>
                            <p>Bạn có thể chuyển tiền đến các tài khoản dưới đây để ủng hộ đồng bào gặp khó khăn.</p>
                        </div>

                        <div className="trans__accounts">
                            {bankAccounts.map((account, index) => (
                                <div key={index} className="trans__account-card">
                                    <h4 className="trans__bank-name">{account.bank}</h4>
                                    
                                    <div className="trans__account-row">
                                        <span className="trans__label">Số tài khoản:</span>
                                        <div className="trans__value-group">
                                            <span className="trans__value">{account.accountNumber}</span>
                                            <button 
                                                className="trans__copy-btn"
                                                onClick={() => copyToClipboard(account.accountNumber)}
                                            >
                                                📋
                                            </button>
                                        </div>
                                    </div>

                                    <div className="trans__account-row">
                                        <span className="trans__label">Chủ tài khoản:</span>
                                        <span className="trans__value">{account.accountName}</span>
                                    </div>

                                    <div className="trans__account-row">
                                        <span className="trans__label">Nội dung:</span>
                                        <div className="trans__value-group">
                                            <span className="trans__value">{account.content}</span>
                                            <button 
                                                className="trans__copy-btn"
                                                onClick={() => copyToClipboard(account.content)}
                                            >
                                                📋
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="trans__qr">
                        <div className="trans__qr-container">
                            <img src={qrCode} alt="QR Code" className="trans__qr-image" />
                            <p className="trans__qr-label">MTTQ</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Trans;