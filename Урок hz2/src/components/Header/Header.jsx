import "./Header.scss"

const Header = () => {
    return <div className="header">
        <p className="header__logo">Company Bobus</p>
        <div className="header__nav">
            <p>Главная</p>
            <p>Товары</p>
            <p>Контакты</p>
            <p>Про нас</p>
        </div>
    </div>
};

export default Header;
