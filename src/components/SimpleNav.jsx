import pic from "../assests/logo.png";
import { Link } from "react-router-dom";

function SimpleNav()
{

    function openMenu() {
        document.body.classList += " menu--open"
    }
    
    
    function closeMenu() {
        document.body.classList.remove("menu--open")
    }

    
    return (
        <div>
            <nav className="simple_nav">
                <ul>
                    <li className="cont1">
                        <figure>
                            <Link to="/"><img src={pic} alt="" /></Link>   
                        </figure>
                    </li>

                    <div className="nav_links2">
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
        </div>
    );

}

export default SimpleNav;