import { isRouteErrorResponse, useRouteError } from "react-router-dom";
// @todo Нужен дизайн
export const ErrorBoundary = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (<div>Ошибка! {error.statusText}</div>)
    }

    return (<div>Ошибка!</div>);
};