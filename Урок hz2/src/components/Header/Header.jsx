import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
    return (
        <div className="header">
            <p className="header__logo">Company Bobus</p>
            <div className="header__nav">
                <Link to="/">Главная</Link>
                <Link to="/goods">Товары</Link>
                <Link to="/contacts">Контакты</Link>
                <Link to="/about">Про нас</Link>
            </div>
        </div>
    );
};

export default Header;
