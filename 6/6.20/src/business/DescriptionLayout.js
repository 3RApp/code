import { Link } from "react-router-dom";

export const DescriptionLayout = () => {
    return (
        <section>
            DescriptionLayout
            <div>
                <Link to="/otherpageusesamelayout">Посмотреть другой компонент</Link> на с лэйаутом, как у текущего
            </div>
        </section>
    )
}