import { useRouteError } from "react-router-dom";

export const ErrorBoundary = () => {
const error = useRouteError();

const {data, status} = error;

    if (status === 404){
        return <div>Неверный запрос, {data}</div>
    }

    if (status === 500){
        return <div>Ошибка на сервере, {data}</div>
    }

    return <div>{status}, {data}</div>;
}