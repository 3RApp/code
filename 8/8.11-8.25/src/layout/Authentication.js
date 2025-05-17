import {useSelector} from'react-redux'
import {MainPage} from '../pages'
import { Layout } from './Layout';

export const Authentication = () => {
    const isAuthenticated = useSelector(state => state.isAuthenticated)
    
    return isAuthenticated ? <Layout /> : <MainPage/>
};