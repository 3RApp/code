import { Link, useLoaderData } from "react-router-dom";
import { Slider, ProductList } from "../../business";
import { Header } from "../../components";

import css from "./MainPage.module.css";

export const MainPage = () => {
    const { special, popular, lastordered } = useLoaderData();

    return (
        <main>
            <section>
                <Header title="Специальные предложения недели" type="h3" upper />
                <Slider list={special.data} />
            </section>
            <section>
                <Header title="Популярный товар" type="h3" upper />
                <ProductList data={popular.data} />
            </section>
            <section>
                <Header title="Последние заказанные товары" type="h3" upper />
                <ProductList data={lastordered.data} />
            </section>
        </main>
    );
};