import {NavLink} from'react-router-dom';
import  './Header.css';

export const Header = ({ list }) => {
   
    return (
        <header>
            <nav>
                {
                    list.map((item, index) => <NavLink
                        to={item.to}
                        state={item.to}
                        key={index}
                        className={({ isActive }) => isActive ? "active" : "nav-item"
                    }>{item.name}</NavLink>)
                }
            </nav>
            <hr />
        </header>
    );
}