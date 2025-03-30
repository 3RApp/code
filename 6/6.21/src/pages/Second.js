import { Fragment } from "react";
import { useLocation } from "react-router-dom";

export const Second = () => {
    const location = useLocation();

    return (
        <Fragment>
            <main>
                <h1>Эта страница {location.pathname}</h1>
                <section>
                    <p>
                        Содержимое страницы
                    </p>
                </section>
            </main>
        </Fragment>
    );
}