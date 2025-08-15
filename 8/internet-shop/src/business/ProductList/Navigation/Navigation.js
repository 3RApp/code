import cn from "classnames/bind";
import { buttons } from "./data";

import css from './Navigation.module.css';

const cx = cn.bind(css);

export const Navigation = ({ isEdgeButtonEnabled = true, isOneStepButtonEnabled = true, direction = 'head', onClick }) => {

    return (
        <section className={cx('navigation')}>
            {
                buttons[direction].map(({title, direction, isEdge}, index) => {

                    const isDisabled = isEdge ? !isEdgeButtonEnabled : !isOneStepButtonEnabled;

                    return (
                        <button 
                            key={index} 
                            className={
                                cx({['disabled']: isDisabled})
                            }
                            onClick={() => !isDisabled && onClick(direction)}>
                            {title}
                        </button>
                    );
                })
            }
        </section>
    );
};