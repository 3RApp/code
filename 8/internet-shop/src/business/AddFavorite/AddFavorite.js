import { useDispatch } from "react-redux";
import cn from "classnames/bind";
import { addToFavorite, removeFromFavorite } from "../../store/favoriteSlice";
import infavorite from './image/checked.svg';
import unchecked from './image/unchecked.svg';

import css from './AddFavorite.module.css';

const cx = cn.bind(css);

export const AddFavorite = ({ productId, checked }) => {

  const dispatch = useDispatch();

  const handleClick = () => { 
    if (checked) {
      dispatch(removeFromFavorite({ id: productId }));
    } else {
      dispatch(addToFavorite({ id: productId }));
    }
  };

  return (
    <div className={cx('add-favorite')}>
      <input src={checked ? infavorite : unchecked} type="image" name="favorite" value={productId} onClick={handleClick} />
    </div>
  );
};
    