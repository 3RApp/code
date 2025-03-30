import { Link, Outlet } from "react-router-dom";
import { Author, Description, Picture, Price, Review } from "./components";

export const BookAmfibiya = () => {
    return (<article>
        <Picture src="" />
        <Description text="Человек-амфибия, ранний роман Беляева о спасении жизни и проявлении добродетели к людям. 
        Об алчности и жадности. О любви и проявлении чувств. В романе переплетаются судьбы нескольких героев, хороших
         и добрых, злых и человеконенавистных. Главный герой, по имени Ихтиандр...">
            <Link to="/books">Назад</Link>
         </Description>
        <Author name="" />
        <Price amount="" />
        <Review text="Роман безусловно заслуживает высокой оценки. Автор создал атмосферу присутствия так живо, что
        читая, ловишь себя на мысли, что ты находишься в этом сюжете и видишь живо всё происходящее собственными глазами" author="Неизвестный автор"></Review>
        <Link to="/books/belyaev-chelovek-amfibiya/prices">Просмотреть цены</Link>
        <Outlet/>
    </article>);
}