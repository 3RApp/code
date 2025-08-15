import { useDispatch } from "react-redux";
import cn from "classnames/bind";
import { setViewMode } from "../../store/viewModeSlice";
import square from './image/square.svg';
import rect from './image/rect.svg';

import css from './ViewMode.module.css';

const cx = cn.bind(css);

export const ViewMode = ({ page }) => {

  const dispatch = useDispatch();

  const handleViewMode = (e) => {
    dispatch(setViewMode({ page, mode: e.target.value }));
  }

  return (
      <section className={cx('view-mode')}>
        <input 
          className={cx('square')}
          type="image" 
          src={square} 
          id="square" 
          name="viewMode" 
          value="square" 
          onClick={handleViewMode}
          title="Квадратными плитками" />
        <input 
          className={cx('rect')}
          type="image" 
          src={rect} 
          id="rect" 
          name="viewMode" 
          value="rect" 
          onClick={handleViewMode}
          title="Списком" />
      </section>
    );
};
    