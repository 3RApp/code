import { Link, Outlet } from'react-router-dom';

export const BookPodYujnyimiNebesami = () => {
    return (<div>
        Николай Лейкин, "Под южными небесами". Это юмористический рассказ о путешествии россиян в Биарриц и Мадрид.
        <Link to="/books/leykin-pod-yujnyimi-nebesami/prices">Просмотреть цены</Link>
        <Outlet/>
    </div>);
}