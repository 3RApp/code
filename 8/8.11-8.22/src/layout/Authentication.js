import {useSelector} from'react-redux'
import {MainPage} from '../pages'
import { Layout } from './Layout';

export const Authentication = () => {
    const isAuthenticated = useSelector(state => state.auth)
    
    return isAuthenticated ? <Layout /> : <MainPage/>
};