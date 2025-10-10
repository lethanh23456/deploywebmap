import { useState } from "react";
import "./home.scss";
import anh1 from "../../assets/anh1.png";
import cuuho from "../../assets/cuuho.png";
import Trans from "../trans/index";
import Help from "../help";

function Home () {
    const [isTransOpen, setIsTransOpen] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    
    const toggleTrans = () => {
        setIsTransOpen(!isTransOpen);
    }; 

    const toggleHelp = () => {
        setIsHelpOpen(!isHelpOpen);
    }; 

    return (
        <div className="home">
            <img src={anh1} className="vtri"/>
            <button 
                onClick={toggleHelp} 
                className="help-button"
            >
                <img src={cuuho} className="cuuho"/>
            </button>
            
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

            {isHelpOpen && (
                <>
                    <div className="help_open">
                            <Help />
                    </div>
                     <div 
                        className="help-overlay" 
                        onClick={toggleHelp}
                    ></div>
                </>
            )}
        </div>
    )
}

export default Home;