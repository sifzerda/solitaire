import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Hrefs() {
    const [isListVisible, setIsListVisible] = useState(false);

    const toggleListVisibility = () => {
        setIsListVisible(!isListVisible);
    };

    const handleLinkClick = () => {
        setTimeout(() => {
            window.location.reload();
        }, 100);
    };

    return (
        <div className="sidebar-container">
            <div className="button-container">
                <button
                    className={`toggle-btn ${isListVisible ? 'active' : ''}`}
                    onClick={toggleListVisibility}
                >
                    Subjects
                </button>
            </div>
            <div className={`list-content ${isListVisible ? 'visible' : ''}`}>
                <ol>
                    <li><Link to="/Solitaire" onMouseDown={handleLinkClick}>Solitaire</Link></li>
                </ol>
            </div>
        </div>
    );
}

export default Hrefs;