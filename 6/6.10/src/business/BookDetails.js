import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Author, Description, Price, Review } from "./components";
/** другой код компонента */
export const BookDetails = () => {
    const bookData = useLoaderData();
    const [error, setError] = useState(null);
    
    if (!bookData) {
        setError(bookData.error);
    }

    if (error){
        return (<div>Ошибка получения данных! Попробуйте обновить страницу</div>);
    }

    const { description, author, price, title, year, } = bookData;
    
    return (<article>
        <Link to="/books">Назад</Link>
        <h3>{title}, {year}</h3>
        <Description text={description}>
            
         </Description>
        <Author name={author} />
        <Price amount={price} />
        <Review text={description} author={author}></Review>
    </article>);
}