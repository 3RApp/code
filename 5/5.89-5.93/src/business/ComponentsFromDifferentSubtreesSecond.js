import {Fragment} from'react';
import {useSelector, useDispatch} from "react-redux";
import { change } from '../store/inputText/inputTextSlice';

// Этот компонент не связан с другим компонентом ComponentsFromDifferentSubtreesFirst, который
// также читает из стора и записывает в него данные. Но этот компонент связан со стором. 
// Таким образом связываясь с единым посредником, компоненты, вне зависимости от того, где они
// расположены в дереве приложения, могут обмениваться данными

export const ComponentsFromDifferentSubtreesSecond = () => {
    const dispatch = useDispatch();
    const inputText = useSelector(state => state.inputText);
    const handleChange = (e) => {
        dispatch(change(e.target.value));
    }

    return (
        <Fragment>
            <div className='row bgGray'>
                <div className='cell'>
                <input type='text' value={inputText} onChange={handleChange} />
                </div>
            </div>
        </Fragment>
    )
}