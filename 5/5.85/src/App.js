import React, {useState} from 'react';
import { ProductItem } from './ProductItem';
import { useFetch } from './5.85';
import './App.css';

function App() {
  const [id, setId] = useState(1);

  /** В данном случае вы получите бесконечный вызов useFecth */
  const { data: product } = useFetch(`http://localhost:3000/products/${id}`);

  const handleClick = () => {
    if (id < 3) {
      setId(id + 1);
    } else {
      setId(1);
    }
  };

  if (!product) {
    return "Данные загружаются...";
  }

  return (
    <div className="App">
      <ProductItem product={product} />
      <button onClick={handleClick}>Next</button>
    </div>
  );
}

export default App;
