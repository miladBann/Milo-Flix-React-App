import { useState } from "react";
import pic from "../assests/logo.png";
import {Link} from "react-router-dom"


function Navigation({value, onSearch})
{
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          onSearch(inputValue);
        }
    };

    function openMenu() {
        document.body.classList += " menu--open"
    }
    
    
    function closeMenu() {
        document.body.classList.remove("menu--open")
    }

    return (
        <section id="top_header">
        <div className="row1">
            <div className="container1">
                <nav>
                    <ul>
                        <li>
                            <figure>
                                <Link to="/" className="link_fix"><img src={pic} alt="" /></Link>
                            </figure>
                        </li>

                        <div className="nav_links">
                            <Link to="/" className="link_fix"><li>Home</li></Link>
                            <Link to="/Subscription" className="link_fix"><li>Subscription</li></Link>
                            <Link to="/rigester" className="link_fix"><li className="special">Register</li></Link>
                        </div>

                        <button className="btn__menu" onClick={openMenu}>
                        <i className="fas fa-bars"></i>
                        </button>
            
                        <div className="menu__backdrop">
                            <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                                <i className="fas fa-times"></i>
                            </button>
                            <ul className="menu__links">
                                <li className="menu__list"><Link to="/" className="menu__link link_fix" onClick={closeMenu}>Home</Link></li>
                                <li className="menu__list"><Link to="/Subscription" className="menu__link link_fix" onClick={closeMenu}>Subscription</Link></li>
                                <li className="menu__list"><Link to="/rigester" className="menu__link link_fix" onClick={closeMenu}>Register</Link></li>
                            </ul>
                        </div>

                    </ul>          
                </nav>

                <div className="seach_box">
                    <h3>Search for movies</h3>
                    
                    <div className="search_bar">
                        <input type="text" className="search" placeholder="Enter Movie Name..." value={value} onChange={handleInputChange} onKeyPress={handleKeyPress}/>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Navigation;