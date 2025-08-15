import { useLoaderData } from "react-router-dom";
import { ProductList, ProductCategories } from "../../business";
import { Header } from "../../components";

export const CatalogPage = () => {
    const {categories, popular} = useLoaderData();

    return (
        <main>
            <Header title="Каталог" type="h3" upper />
            <ProductCategories data={categories.data} />
            <ProductList data={popular.data} />
        </main>
    );
};