import React from "react";
import {Link, useLoaderData} from "react-router-dom";

export const RequestDemo = () => {

    const data = useLoaderData();

    if (!data) {

        return <Link to="/?search=собака баскервилей">Собака баскервилей</Link>;
    }

    return (<main>
        <h3>Ссылка содержала</h3>
        <div>{data}</div>
        <blockquote>Вернуться на <Link to="/">главную</Link></blockquote>
    </main>);
};