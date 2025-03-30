import {useEffect, useState} from "react";
import {Nickname} from './business';
import {Item} from './components';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);

    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(res => {
      setData(res);
      setLoading(false);
    }).catch(err => {
      setError(err.message);
      setLoading(false);
    });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <header>
        `Добро пожаловать `<Nickname newNickname="Турецкий барабан" />
      </header>
      <main>
        {loading? 'Загрузка...' : data.map(item => <Item key={item.id} title={item.title} />)}
      </main>
      <hr />
    </div>
  );
}

export default App;
