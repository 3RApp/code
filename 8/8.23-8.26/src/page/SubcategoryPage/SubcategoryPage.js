import React, {Fragment} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux';
import {
    useGetMenuCategoriesQuery, 
    useGetMenuSubcategoriesQuery
} from "../../store/menuAPI";
import {useGetProductsSubcategoriesQuery} from "../../store/productsAPI";
import { selectSortingType, selectSortingOrder } from "../../store/sortingSlice";
import { selectViewMode } from "../../store/viewModeSlice";
//import {ProductList, Menu, Sorter, ViewMode, FilterCheckbox} from '../business';
//import {Header, Spinner} from '../../components';
import styles from "./SubcategoryPage.module.css";
// Все @TODO Удалить после реализации и импорта компонентов
export const SubcategoryPage = (/** Шаг 1 не нужен */) => {
    const navigate = useNavigate();
    // Шаг 6
    const sortingType = useSelector(selectSortingType('subcategory'));
    const sortingOrder = useSelector(selectSortingOrder('subcategory'));
    const viewMode = useSelector(selectViewMode('subcategory'));
    // Шаг 10
    const {category, subcategory} = useParams();
    // Шаг 2
    const {
        isLoading: isLoadingCategory, error: errorCategory, data: dataCategory
    } = useGetMenuCategoriesQuery();
    const {
        isLoading: isLoadingSubcategory, error: errorSubcategory, data: dataSubcategory,
    } = useGetMenuSubcategoriesQuery(category);
    const {
        isLoading: isLoadingProducts, error: errorProducts, data: dataProducts, refetch: refetchProducts,
    } = useGetProductsSubcategoriesQuery({ category, subcategory });
    // Шаг 20
    const handleChangeSubcategory = (newSubcategory) => {
        navigate(`/catalog/${category}/${newSubcategory}`);
    }
    // Шаг 18
    if (!isLoadingCategory || !isLoadingSubcategory || !isLoadingProducts) {
        return (<Fragment>"Загрузка..."{/**@TODO <Spinner /> */}</Fragment>);
    }

    const [categoryTitle, subcategoryTitle] = [dataCategory.selected, dataSubcategory.selected];
    
    return (
        <Fragment>
            {/** Шаг 13 */}
            <aside>Menu{/**@TODO <Menu 
             * className={styles.menu}
             * selectedCategory={categoryTitle.code} 
             * selectedSubcategory={subcategoryTitle.code} 
             * category={dataCategory} 
             * subcategory={dataSubcategory} /> */}
            </aside>
            <header>{/*subcategoryTitle.title*/}{/**@TODO <Header 
             * className={styles.header}
             * title={subcategoryTitle.title} 
             * />} */}</header>
            <section>
                {/**@TODO <FilterCheckbox 
                 * className={styles.filterCheckbox}
                 * onChange={handleChangeSubcategory}
                 * current={subcategory}
                 * list={dataSubcategory} /> */}
            </section>
            <section>
                <div>{sortingType}, {sortingOrder}
                    {/**@TODO <Sorter 
                     * className={styles.sorter}
                     * type={sortingType} 
                     * order={sortingOrder} /> */}
                </div>
                <div>{viewMode}
                    {/**@TODO <ViewMode 
                     * className={styles.viewMode}
                     * mode={viewMode} /> */}
                </div>
            </section>
            <section>
                {/** Также Шаг 16 */}
                {/**@TODO <ProductList 
                 * className={styles.productList}
                 * productList={dataProducts} /> */}
            </section>
        </Fragment>
    );
}