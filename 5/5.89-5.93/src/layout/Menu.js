import {NavLink} from'react-router-dom';
import './Menu.css';
import {changeClassName} from './changeClassName';

export const Menu = () => {
    return (
        <nav className="menu">
            <NavLink to="/" className={changeClassName}>Родитель-Дочерний</NavLink>
            <NavLink to="/child-parent" className={changeClassName}>Дочерний-Родитель</NavLink>
            <NavLink to="/ancestor-descendant" className={changeClassName}>Предок-Потомок</NavLink>
            <NavLink to="/descendant-ancestor" className={changeClassName}>Потомок-Предок</NavLink>
            <NavLink to="/from-different-subtrees-one" className={changeClassName}>Из разных поддеревьев 1</NavLink>
            <NavLink to="/from-different-subtrees-two" className={changeClassName}>Из разных поддеревьев 2</NavLink>
        </nav>
    )
}