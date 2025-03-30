import {useSelector} from'react-redux'
import {Main} from '../pages'
import { Layout } from './Layout';

export const Authentication = () => {
    const isAuthenticated = useSelector(state => state.auth)
    
    return isAuthenticated ? <Layout /> : <Main/>
};