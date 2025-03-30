import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomHook = () => {
  const [data, setData] = useState({});

  // Кастомный хук для запроса данных
  const fetchData = async () => {
    try {
      const response = await axios.get('https://example.com/api');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Вызываем хук при первом рендере
  useEffect(() => {
    fetchData();
  }, []);

  return { data };
};

export default function App() {
  const { data } = CustomHook();

  if (!data) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      {/* Используем данные из состояния */}
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}