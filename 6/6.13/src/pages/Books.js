import {Outlet, Link, useLoaderData} from "react-router-dom";
import { Description } from "../business/components";
import { BookPreview } from "../business/BookPreview";
import { Preloader } from "../components";

export const Books = () => {

    const data = useLoaderData();

    if (!data) {
        return <Preloader />;
    }

    return (<main>
        Чтобы прочитать подробное описание по книге, кликните по ней.
        <Description text="Вы можете посетить следующие разделы:">
            <Link to="/books">Книги</Link>
            {
                data.map((book) => {
                    const {bookId} = book;
                    return <BookPreview key={bookId} book={book} />
                })
            }
        </Description>
        <Outlet />
    </main>);
};