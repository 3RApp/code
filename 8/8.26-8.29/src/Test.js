import {useSelector, useDispatch} from'react-redux';
import { selectSortingOrder, selectSortingType, setSortingType, setSortingOrder } from './store/sortingSlice';
export const Test = () => {
    const dispatch = useDispatch();
    const order = useSelector(selectSortingOrder('search'));
    const type = useSelector(selectSortingType('search'));

    console.log(order, type);

    return <div>Test
        <button onClick={() => dispatch(setSortingOrder({ page: 'search', order: 'asc'}))}>Order</button>
        <button onClick={() => dispatch(setSortingType({ page: 'search', type: 'price'}))}>Type</button>
    </div>;
}