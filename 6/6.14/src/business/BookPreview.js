import { Link } from "react-router-dom";

export const BookPreview = ({ book }) => {

    const handleClick = (e) => e.preventDefault();

    return(
       <div className="book-preview">
           <div className="book-info">
               <h3>{book.title}</h3>
               <p>{book.author}</p>
           </div>
           <Link key={book.bookId} to={`/books/${book.bookId}`} onClick={handleClick}>{book.title}</Link>
       </div>
   )
}