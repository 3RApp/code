import { useLoaderData, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import cn from "classnames/bind";
import { ProductList, ProductSubcategories, Menu, Sorter, ViewMode } from "../../business";
import { Header } from "../../components";
import { selectSortingType, selectSortingOrder } from "../../store/sortingSlice";
import { selectViewMode } from "../../store/viewModeSlice";
import { extractTitle } from "../utils";

import css from './CategoryPage.module.css';

const cx = cn.bind(css);

export const CategoryPage = () => {
    const { categories, subcategories, popular } = useLoaderData();
    const { categoryId } = useParams();
    const sortingType = useSelector(selectSortingType('category'));
    const sortingOrder = useSelector(selectSortingOrder('category'));
    const viewMode = useSelector(selectViewMode('category'));
    const title = extractTitle(categories.data, categoryId);

    return (<main className={cx('category-page')}>
            <Menu categoryId={categoryId} categories={categories.data} />
            <section>
                <Header title={title} type="h3" upper />
                <ProductSubcategories categoryId={categoryId} data={subcategories.data} />
                <Header title="Популярные товары" type="h3" upper />
                <div className={cx('category-page__toolbar')}>
                    <Sorter 
                        page="category"
                        type={sortingType} 
                        order={sortingOrder} 
                    />
                    <span className={cx('category-page__view-mode')}><ViewMode page="category" /></span>
                </div>
                <ProductList data={popular.data} viewMode={viewMode} />
            </section>
    </main>);
};