import {useParams, useLoaderData, useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux';
import cn from "classnames/bind";
import { extractTitle } from "../utils";
import { selectSortingType, selectSortingOrder } from "../../store/sortingSlice";
import { selectViewMode } from "../../store/viewModeSlice";
import { selectFilter } from "../../store/filterSlice";
import {ProductList, Menu, Sorter, ViewMode, FilterCheckbox} from "../../business";
import { Header } from '../../components';
import {pathNavigateToPage} from "../../pathNavigateToPage";

import css from "./SubcategoryPage.module.css";

const cx = cn.bind(css);

export const SubcategoryPage = () => {
    const navigate = useNavigate();
    const { categories, subcategories, products, vendors } = useLoaderData();
    const sortingType = useSelector(selectSortingType('subcategory'));
    const sortingOrder = useSelector(selectSortingOrder('subcategory'));
    const viewMode = useSelector(selectViewMode('subcategory'));
    const manufacturer = useSelector(selectFilter);
    const {categoryId, subcategoryId} = useParams();
    const titleSubcategory = extractTitle(subcategories.data, subcategoryId);
    const {subcategory: createPathToSubcategoryPage} = pathNavigateToPage;
    const handleChangeSubcategory = (newSubcategoryId) => {navigate(createPathToSubcategoryPage(categoryId, newSubcategoryId));};
    const productListByManufacturer = products.data.filter((product) => product.vendorId === manufacturer);

    return (
        <main className={cx('subcategory-page')}>
            <Menu 
             categoryId={categoryId} 
             subcategoryId={subcategoryId} 
             categories={categories.data} 
             subcategories={subcategories.data} />
            <section>
                <Header title={titleSubcategory} type="h3" upper />
                <section>
                    <FilterCheckbox 
                     onChange={handleChangeSubcategory}
                     current={manufacturer}
                     list={vendors.data} />
                </section>
                <div className={cx('subcategory-page__toolbar')}>
                    <Sorter 
                       page="subcategory"
                       type={sortingType} 
                       order={sortingOrder} />
                    <span className={cx('subcategory-page__view-mode')}><ViewMode page="subcategory" /></span>
                </div>
                <section>
                    <ProductList 
                      data={manufacturer ? productListByManufacturer: products.data} 
                      viewMode={viewMode} 
                    />
                </section>
            </section>
        </main>
    );
}