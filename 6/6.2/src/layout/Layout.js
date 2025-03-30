import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer  } from  "../components/Footer";

export const Layout = () => {
    return(
       <div>
           <Header list={[{to: "/", name: "Книги"}, {to: "/order", name: "Заказы"}, {to: "/contacts", name: "Контакты"}]} />
           <main>
               <Outlet/>
           </main>
           <Footer/>
       </div>
   )
}