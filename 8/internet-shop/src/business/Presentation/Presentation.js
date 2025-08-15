import { useState } from "react";
import cn from "classnames/bind";
import { imageRepository, imageFillerBig } from "../../const";
import left from './image/left.svg';
import right from './image/right.svg';

import css from './Presentation.module.css';

const cx = cn.bind(css);

export const Presentation = ({ images, imagesInCarousel = 3 }) => {

   /** 
   * imagesInCarousel - размер подсписка
   * currentSubList - это порядковый номер подсписка (подмножество элементов равное imagesInCarousel)
   * Список элементов существует в виде структуры массив (images.small). Однако массив логически разделяется на целое число подсписков 
   * равного размера и одного переменного числа - последнего. 
   * Если вся длина массива меньше imagesInCarousel, то последний подсписок (он же первый и единственный) будет равен длине массива.
   * currentIndexInSubList - это индекс элемента в подсписке размером imagesInCarousel и соответственно индекс последнего элемент 
   * всегда меньше на единицу длины подсписка.
   * currentSubList - целое неотрицательное число не превышающее subListCount. 
   */
  const { small, big } = images; // small.length - длина всего списка
  const imageListLength = small.length;
  const subListCount = Math.ceil(imageListLength / imagesInCarousel);

  const [currentIndexInSubList, setCurrentIndexInSubList] = useState(0); // Текущий выбранный элемент или текущий элемент в подсписке
  const [currentSubList, setCurrentSubList] = useState(0);

  const handleClickLeft = () => {

    if (currentIndexInSubList - 1 >= 0) {
      setCurrentIndexInSubList(currentIndexInSubList - 1);
    } else {
      if (currentSubList - 1 >= 0) {

        setCurrentSubList(currentSubList - 1);
        setCurrentIndexInSubList(imagesInCarousel - 1);
      }
    }
  };

  const handleClickRight = () => {

    if (currentIndexInSubList + 1 < imagesInCarousel) {
      const isLastSubList = currentSubList + 1 === subListCount;
      const lastSubListLength = imageListLength - currentSubList * imagesInCarousel;
      const index = currentIndexInSubList + 1 < lastSubListLength ? currentIndexInSubList + 1 : currentIndexInSubList;
      setCurrentIndexInSubList(isLastSubList ? index : currentIndexInSubList + 1);
    } else {
      if (currentSubList + 1 < subListCount) {
        setCurrentSubList(currentSubList + 1);
        setCurrentIndexInSubList(0);
      }
    }
  };
  
  if (!imageListLength || !big.length || imageListLength !== big.length) {
    return (
      <section className={cx('presentation')}>
        <div className={cx('big-image')}>
          <img src={`${imageFillerBig}`} />
        </div>
      </section>      
    );
  }
  
  return (
      <section className={cx('presentation')}>
        <div className={cx('big-image')}>
          <img src={`${imageRepository}${big[currentSubList * imagesInCarousel + currentIndexInSubList]}`} />
        </div>
        <ul className={cx('small-image-container')}>
          <li onClick={handleClickLeft}>
            <img src={left} />
          </li>
          {
            small.slice(currentSubList * imagesInCarousel, (currentSubList + 1 ) * imagesInCarousel).map((image, index) => (
            <li key={image} className={cx('small-image-item', {'current': currentIndexInSubList === index })}>
              <img src={`${imageRepository}${image}`} onClick={() => { setCurrentIndexInSubList(index); }} />
            </li>))
          }
          <li onClick={handleClickRight}>
            <img src={right} />
          </li>
        </ul>
      </section>
  );
};
