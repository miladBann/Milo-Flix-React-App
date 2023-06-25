import SimpleNav from "../components/SimpleNav";

function Register()
{
    return (
        <div className="register_cont">
            <SimpleNav />
            <div className="row1 register_form">

                <div className="form_cont">
                    <div className="reg">
                        <h3>Name</h3>
                        <input type="text" />
                    </div>

                    <div className="reg">
                        <h3>Email</h3>
                        <input type="email" />
                    </div>

                    <div className="reg">
                        <h3>Password</h3>
                        <input type="password" />
                    </div>

                    <input type="submit" className="submit" value={"Register"}/>
                </div>

            </div>
        </div>
    );
}

export default Register;