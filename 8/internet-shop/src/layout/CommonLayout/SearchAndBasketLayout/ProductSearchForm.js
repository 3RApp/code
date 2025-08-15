import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames/bind";
import { Button } from "../../../components";
import { pathNavigateToPage } from "../../../pathNavigateToPage";

import css from "./ProductSearchForm.module.css";

const cx = cn.bind(css);

export const ProductSearchForm = () => {
    const inputName = "query";
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const {search: createPathToSearchPage} = pathNavigateToPage;

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = () => {
        navigate(createPathToSearchPage(inputName, search))
    };

    return (
        <section className={cx('product-search-form')}>
            <input placeholder='Например "товар"' className={cx('search-field')} type="text" name={inputName} value={search} onChange={handleChange} />
            <Button style={{ width: '60px', marginLeft: '8px', flexGrow: 1 }} type="submit" title="Найти" value="Найти" onClick={handleSubmit} />
        </section>
    );
};