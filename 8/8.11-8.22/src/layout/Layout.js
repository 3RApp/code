import { Outlet } from 'react-router-dom';
import {Fragment} from'react';
// import {Menu} from './Menu';
// import {Footer} from './Footer';
// import {Header} from './Header';
export const Layout = () => {
    return (
        <Fragment>
            <header>{/* @TODO <Header /> */}</header>
            <aside>{/* @TODO <Menu /> */}</aside>
            <main><Outlet /></main>
            <footer>{/* @TODO <Footer /> */}</footer>
        </Fragment>
    );
}
