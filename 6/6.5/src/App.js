import {BrowserRouter, Routes, Route} from'react-router-dom';
import { Layout } from './Layout';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={<Layout />}
                >
                    <Route path="/" element={<div>Книги</div>}  />
                    <Route path="/contacts" element={<div>Контакты</div>} />
                    <Route path="/order" element={<div>Заказы</div>}  />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}