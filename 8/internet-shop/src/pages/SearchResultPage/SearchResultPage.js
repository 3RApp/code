import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import cn from "classnames/bind";
import { ProductList, Menu, Sorter, ViewMode } from "../../business";
import { Header } from "../../components";
import { NothingFound } from "./NothingFound";
import { russianNounEndingDependNumber } from "../../functions";
import { selectSortingType, selectSortingOrder } from "../../store/sortingSlice";
import { selectViewMode } from "../../store/viewModeSlice";
import { extractProductData } from "./utils";

import css from './SearchResultPage.module.css';

const cx = cn.bind(css);

export const SearchResultPage = () => {
    const { categories, products } = useLoaderData();
    const { length, list, search } = extractProductData(products);
    const sortingType = useSelector(selectSortingType('search'));
    const sortingOrder = useSelector(selectSortingOrder('search'));
    const viewMode = useSelector(selectViewMode('search'));

    const productList = length ? <ProductList data={list} viewMode={viewMode} /> : <NothingFound search={search}/>;

    return (
      <main className={cx('search-result-page')}>
        <Menu categories={categories.data} />
        <section>
          <Header title={`По вашему запросу найдено: ${length} ${russianNounEndingDependNumber(length, "товар")}`} type="h3" />
          <div className={cx('search-result-page__toolbar')}>
          <Sorter 
            page="search"
            type={sortingType} 
            order={sortingOrder} />
          <span className={cx('search-result-page__view-mode')}><ViewMode page="search" /></span>  
          </div>
            {productList}
        </section>
    </main>);
};