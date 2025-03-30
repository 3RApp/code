import { Form, Outlet, useLoaderData } from "react-router-dom";

export const Main = () => {

    const data = useLoaderData();

    return (<main>
        <Form action="/">
            <input
            aria-label="search products"
            type="text"
            name="search"
        />
            <button type="submit">Найти</button>
        </Form>
            <div>Вы ввели поисковый запрос: {data}</div>
        <Outlet />
    </main>);
};