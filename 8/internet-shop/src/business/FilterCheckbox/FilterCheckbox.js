import {useDispatch} from "react-redux";
import cn from "classnames/bind";
import { setFilter, clearFilter } from "../../store/filterSlice";

import css from './FilterCheckbox.module.css';

const cx = cn.bind(css);

export const FilterCheckbox = ({ current, list }) => {

    const dispatch = useDispatch();

    return (
        <nav className={cx('filter-checkbox')}>
            {
                list.map((item) => {
                    const {vendorId, vendorTitle} = item;

                    return (<span 
                        className={cx('checkbox', {'current': current === vendorId})} 
                        key={vendorId} 
                        onClick={() => {
                            if (current === vendorId) {
                                dispatch(clearFilter());
                            } else {
                                dispatch(setFilter(vendorId));
                            }
                        }}>
                            {vendorTitle}
                    </span>);
                })
            }
        </nav>
    );
};