import { useSelector, useDispatch } from "react-redux";
import cn from "classnames/bind";
import { Header } from "../../components";
import { selectCustomer, setName, setSecondName, setPhone } from "../../store/customerSlice";
import { filterAcceptableSymbols, createHandleChangeFn } from "./utils";

import css from './NameForm.module.css';

const cx = cn.bind(css);

export const NameForm = () => {
    const dispatch = useDispatch();
    const {name, secondName, phone} = useSelector(selectCustomer);
    const [handleChangeName, handleChangeSecondName] = [setName, setSecondName].map(creator => createHandleChangeFn(creator, dispatch));

    const handleChangePhoneNumber = (e) => {
        const phone = filterAcceptableSymbols(e.target.value);

        dispatch(setPhone({ phone }));
    };

    return (
        <section className={cx('name-form')}>
            <Header title="ФИО и контакты:" type="h4" />
            <div className={cx('name-form__person')}>
                <span className={cx('name-form__person-name')}>
                    Имя: <input type="text" className={cx('name-form__person-name-form')} value={name} onChange={handleChangeName} />
                </span>
                <span className={cx('name-form__person-name')}>
                    Фамилия: <input type="text" className={cx('name-form__person-second-name-form')} value={secondName} onChange={handleChangeSecondName} />
                </span>
            </div>
            <div className={cx('name-form__phone')}>
                <span className={cx('name-form__person-name')}>
                    Телефон: <input type="tel" className={cx('name-form__person-phone-form')} value={phone} onChange={handleChangePhoneNumber} />
                </span>
            </div>
        </section>
    );
};
