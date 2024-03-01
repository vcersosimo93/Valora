import LogoLogin from "./logo/LogoLogin";
import Navbar from "./navbar/Navbar";
import "../../../css/HeaderLoginModule.css";

const HeaderLogin = () => {
    return (
        <header className="header">
            <div className="logo_container">
                <LogoLogin />
            </div>
        </header>
    );
};

export default HeaderLogin;