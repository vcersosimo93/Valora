import Logo from "./logo/Logo";
import Navbar from "./navbar/Navbar";
import "../../../css/HeaderModule.css";

const Header = () => {
    return (
      <header className="header">
        <Navbar />
        <Logo />
      </header>
    );
  };
  
  export default Header;