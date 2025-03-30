import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className="Navigation">
            <h4>Другие страницы</h4>
            <div>
                <Link to="/">/</Link>
            </div>
            <div>
                <Link to="/order">/order</Link>
            </div>
            <div>
                <Link to="/contacts/has/some/address">/contacts/has/some/address</Link>
            </div>
        </nav>
    );
};