import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import cn from "classnames/bind";
import { Price } from "../Price";
import { ErrorBoundary } from "../ErrorBoundary";
import { setService } from "../../store/deliverySlice";

import css from './DeliveryForm.module.css';

const cx = cn.bind(css);

export const DeliveryForm = () => {
  const dispatch = useDispatch();
  const [services, setServices] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('/api/v1/delivery/services').then(response => {
      return response.json();
    }).then(services => {
      if (services.success){
        setServices(services.data);
        setError(null);
      } else {
        setError(services.error);
        setServices(null);
      }
      setLoading(false);
    }).catch(error => {
      setError(error.message);
      setLoading(false);
      setServices(null);
      console.error(error.message); // Исключительно для разработчиков
    });
  }, []);

  if (error) {
    return <ErrorBoundary />
  }

  if (loading || services === null){
    return <div>Загрузка...</div>
  }

  return (
    <section className={cx('delivery-form')}>
      {services.map(service => {
        const { uid, title, price, currencyCode } = service;
        return (
          <div key={uid} className={cx('delivery-service')}>
            <label htmlFor={uid} className={cx('delivery-service-control')}>
              <input 
                type="radio" 
                name="service" 
                id={uid} 
                value={uid} 
                onChange={() => dispatch(setService({ id: uid, cost: price }))}
              />
              {title}
            </label>
            <Price value={price} code={currencyCode} size="lg" />
          </div>
        )
      })}
    </section>
  );
};
