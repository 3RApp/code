import { useParams } from "react-router-dom";

export const Page = () => {
    const params = useParams();
    console.log('params from page', params);
    return (<div>Page-Pager</div>)
}