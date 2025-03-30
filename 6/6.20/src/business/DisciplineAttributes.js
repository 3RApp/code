import { useLoaderData } from "react-router-dom";

import "./DisciplineAttribute.css";

export const DisciplineAttributes = () => {
    const {success, data} = useLoaderData();

    if (!success) {
        return (
            <section className="attribute-description">
                <p>Error while loading data!</p>
            </section>
        );
    }

    return (
        <section className="attribute-description">
            {data}
        </section>
    );
}