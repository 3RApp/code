import { useState } from "react";
import cn from "classnames/bind";
import { ProductCardRect } from "../ProductCardRect";
import { ProductCardSquare } from "../ProductCardSquare";
import { Pagination } from "./Pagination";
import { Navigation } from "./Navigation";
import { Header } from "../../components";
import { navigationDictionary } from "../../const";
import { getProductListIndexes } from "./getProductListIndexes";

import css from './ProductList.module.css';

const cx = cn.bind(css);

/**
 * На компонент ProductList возложено управление состоянием переменной состояния current.
 * Значением переменной состояния current управляет пользователь. Он выбирает страницу, которую он хочет видеть, нажимая 
 * на какой-либо UI-элемент << < 1 2 3 ... 21 22 23 ... 39 40 41 > >>. Любой из этих элементов при нажатии на нём изменяет значение 
 * текущего индекса (current). Таким образом пользователь управляет состоянием компонента.
 * С подсписками Page (нужно ознакомиться с терминами в компоненте Pagination) мы работаем при помощи индексов (current). 
 */
export const ProductList = ({ data, viewMode = "square", productPageSize = 10 }) => {

  const [current, setCurrent] = useState(0);
  const isSquareMode = viewMode === 'square';
  const Item = isSquareMode ?  ProductCardSquare : ProductCardRect;
  const cssClass = isSquareMode ? 'product-list__square' : 'product-list__rect';
  const handlePaginationClick = (index) => { setCurrent(index) };
  const handleLeftNavigationClick = (buttonDirection) => {
    if (buttonDirection === navigationDictionary.first) {
      setCurrent(0);
    } else {
      setCurrent(current - 1);
    }
  };
  const pageSize = 5; // необходимо реализовать компонент PageSize, чтобы менять размер страниц с товарами
  const pageCount = Math.ceil(data.length / pageSize);
  const [startIndex, endIndex] = getProductListIndexes(data.length, pageSize, current);
  const handleRightNavigationClick = (buttonDirection) => {
    if (buttonDirection === navigationDictionary.last) {
      setCurrent(pageCount - 1);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <>
      <section className={cx("product-list")}>
        <section className={cx(cssClass)}>
          {
            data.slice(startIndex, endIndex)?.map((product) => (
              <Item key={product.uid} product={product} />
            ))
          }
        </section>
      </section>
      <section className={cx("product-list__pagination")}>
        {
          pageCount > 1 && (<>
            <Navigation 
              isEdgeButtonEnabled={current !== 0} 
              isOneStepButtonEnabled={current !== 0} 
              direction="head" 
              onClick={handleLeftNavigationClick} />
            <Pagination 
              pageCount={pageCount} 
              currentIndex={current} 
              onClick={handlePaginationClick} />
            <Navigation 
              isEdgeButtonEnabled={current !== (pageCount - 1)} 
              isOneStepButtonEnabled={current !== (pageCount - 1)} 
              direction="tail" 
              onClick={handleRightNavigationClick} />
          </>)
        }
      </section>
    </>
  );
};
    