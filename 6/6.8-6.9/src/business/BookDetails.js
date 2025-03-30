import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { Author, Description, Picture, Price, Review } from "./components";
import {Preloader} from "../components";

export const BookDetails = () => {
    const [bookData, setBookData] = useState(null);
    const [error, setError] = useState(null);
    const {bookId} = useParams();
    
    useEffect(() => {
        fetch(`/books/${bookId}`)
            .then(response => response.json())
            .then(({data}) => {
                if (error) {
                    setError(null);
                }
                setBookData(data);
            })
            .catch(error => setError(error));
    }, [bookId]);

    if (error){
        return (<div>Ошибка получения данных! Попробуйте обновить страницу</div>);
    }

    if (!bookData){
        return <div>
            <Preloader />
            <Outlet />
        </div>
    }

    const {picture, description, author, price, review: {text, author: reviewAuthor}} = bookData;
    
    return (<article>
        <Picture src={picture} />
        <p>
            <Link to="/books">Назад</Link>
        </p>
        <Description text={description} />
        <Author name={author} />
        <Price amount={price} />
        <Review text={text} author={reviewAuthor}></Review>
    </article>);
}