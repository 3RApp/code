import {useLocation} from 'react-router-dom';

export const Path = () => {
    const {pathname} = useLocation();

    return <span>{pathname}</span>;
};