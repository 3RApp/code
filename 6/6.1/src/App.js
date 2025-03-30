import {useState} from'react';
import { Contacts, Books, Order } from "./business";
import { Footer, Header } from './components';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="App">
      <Header list={["Книги", "Заказ", "Контакты"]} cb={setCurrentIndex} />
      {
        [Books, Order, Contacts].map((Page, index) => <Page key={index} className={currentIndex !== index ? 'hidden' : ''}  />)
      }
      <Footer />
    </div>
  );
}

export default App;