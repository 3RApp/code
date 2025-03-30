import {useEffect, useState, Fragment} from'react';
import { Outlet } from 'react-router-dom';
// import {Shedule} from '../business';
// import {Tabs} from '../components';

export const ShedulePage = () => {

    const [sheduleItemList, setSheduleItemList] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      fetch('/api/v1/shedule/').then(res => res.json()).then(res => {
        console.log(res);
        setSheduleItemList(res);
        setLoading(false);
      }).catch(err => {
        setError(err);
        setLoading(false);
      });
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (loading) {
        return <div>Загружается...</div>;
    }

    return (
        <Fragment>
            <section>
                <div>Tabs{/* @TODO <Tabs /> */}</div>
            </section>
            <section>
                <div>Shedule{/* @TODO <Shedule sheduleList={sheduleItemList} /> */}</div>
                <div><Outlet /></div>
            </section>
        </Fragment>
    );
}