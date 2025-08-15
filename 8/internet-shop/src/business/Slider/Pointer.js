import cn from "classnames/bind";
import { Circle } from "./Circle";

import css from './Pointer.module.css';

const cx = cn.bind(css);

export const Pointer = ({ count, index, onClick }) => {

    return (
        <section className={cx('container')}>
            {
                Array(count).fill(Circle).map((Circle, i) => (
                    <Circle
                        className={cx('circle', {
                            [css.current]: index === i
                        })}
                        key={i}
                        onClick={() => onClick(i)}
                    />
                ))
            }
        </section>
    );
};
    