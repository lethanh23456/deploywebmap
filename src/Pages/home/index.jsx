import { useState } from "react";
import "./home.scss";
import anh1 from "../../assets/anh1.png";
import Trans from "../trans/index";

function Home () {
    const [isTransOpen, setIsTransOpen] = useState(false);
    
    const toggleTrans = () => {
        setIsTransOpen(!isTransOpen);
    };

    return (
        <div className="home">
            <img src={anh1} className="vtri"/>
            <button 
                onClick={toggleTrans} 
                className="trans-button"
            >
                <span className="text-upcase">chuyển tiền cứu trợ</span>
            </button>

            {isTransOpen && (
                <>
                    <div className="filter-sidebar open">
                        <div className="filter-sidebar__header">
                            <h3>Bộ lọc</h3>
                            <button 
                                className="filter-sidebar__close" 
                                onClick={toggleTrans}
                            >
                                ✕
                            </button>
                        </div>
                        <div className="filter-sidebar__content">
                            <Trans />
                        </div>
                    </div>

                    <div 
                        className="filter-overlay" 
                        onClick={toggleTrans}
                    ></div>
                </>
            )}
        </div>
    )
}

export default Home;