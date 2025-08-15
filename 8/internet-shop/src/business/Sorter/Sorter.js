import { useDispatch } from "react-redux";
import cn from "classnames/bind";
import { options } from "./data";
import { getOptionList } from "./getOptionList";
import { setSortingType, setSortingOrder, resetSorting } from "../../store/sortingSlice";
import up from './image/up.svg';
import down from './image/down.svg';

import css from './Sorter.module.css';

const cx = cn.bind(css);

export const Sorter = ({ page, type, order }) => {

  const dispatch = useDispatch();
  const handleSortingType = (e) => {
    const value = e.target.value;

    if (value === ''){
      dispatch(resetSorting({ page }));
    } else {
      dispatch(setSortingType({ page, type: value }));
      dispatch(setSortingOrder({ page, order: 'asc' }));
    }
  };

  const handleSortingOrder = (e) => {
    dispatch(setSortingOrder({ page, order: e.target.value }));
  };

  return (
      <section className={cx('sorter')}>
        <label htmlFor="type" className={cx('sorter__label')}>
          сортировать:
          <select id="type" name="type" className={cx('sorter__container')} onChange={handleSortingType}>
            {
              getOptionList(options).map((option) => (
                <option key={option.key} value={option.key} selected={type && type === option.key || option.selected}>{option.title}</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="asc" className={cx('order__label')}>
          {
            order && (
              <>
                порядок сортировки: 
                <span className={cx('order__container')}>
                  <input 
                    type="image" 
                    src={up} 
                    id="asc" 
                    name="order" 
                    value="asc" 
                    onClick={handleSortingOrder}
                    title="В возрастающем порядке" />
                  <input 
                    type="image" 
                    src={down} 
                    id="desc" 
                    name="order" 
                    value="desc" 
                    onClick={handleSortingOrder}
                    title="В убывающем порядке" />
                </span>
              </>
            )
          }
        </label>
      </section>
  );
};
    