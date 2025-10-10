import { useState } from "react";
import "./help.scss";

function Help() {
    return (
        <div className="help-popup">
            <div className="help-popup__header">
                <h2>Thông tin cần hỗ trợ</h2>
            </div>
            
            <div className="help-popup__content">
                <div className="help-popup__field">
                    <span className="label">Tên:</span>
                    <span className="value">Nguyễn A</span>
                </div>
                
                <div className="help-popup__field">
                    <span className="label">Địa chỉ:</span>
                    <span className="value">abc</span>
                </div>
                
                <div className="help-popup__field">
                    <span className="label">Hoàn cảnh:</span>
                    <span className="value">Bị lụt sau bão</span>
                </div>
            

                <div className="help-popup__actions">
                    <button className="help-popup__btn help-popup__btn--transfer">
                        Chuyển khoản
                    </button>
                    <button className="help-popup__btn help-popup__btn--helped">
                        Đã được giúp đỡ
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Help;