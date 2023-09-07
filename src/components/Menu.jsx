import { NavLink } from "react-router-dom";

function Menu() {
    return (
        <nav className="menu">
            <NavLink className="menu__item" to="/">Главная</NavLink>
            <NavLink className="menu__item" to="/Drift">Дрифт-такси</NavLink>
            <NavLink className="menu__item" to="/Timeattack">Time Attack</NavLink>
            <NavLink className="menu__item" to="/Forza">Forza Karting</NavLink>
        </nav>
    )
}

export default Menu