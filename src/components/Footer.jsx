import logo from "../assests/logo.png";

function Footer()
{
    return (
        <div className="footer_background">
            <div className="footer_cont">
                <figure>
                    <img src={logo} alt="" />
                </figure>

                <h3>MiloFlix and Chill 😘</h3>
                <h3>Done by: Milad Bannourah, 2023</h3>
            </div>
        </div>
    );
}

export default Footer;