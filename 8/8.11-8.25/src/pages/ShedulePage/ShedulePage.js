import {useEffect, useState, Fragment} from'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import {Shedule} from '../business';
// import {Tabs} from '../components';
import { selectTab, changeTab } from '../../store/features/shedule';
import { getPeriod } from './getPeriod';

export const ShedulePage = () => {

    const [sheduleItemList, setSheduleItemList] = useState([]);
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const tab = useSelector(selectTab);
    const period = getPeriod(tab);
    /**
     * Поскольку Tabs простой конечный компонент, то ему нужно передавать данные, которые он будет отображать,
     * а также коллбэк в случае нажатия на табы. Для этого создадим handleChangeTab.
     * На момент реализации компонента ShedulePage простого конечного компонента Tabs еще не существует. 
     * Но его использование будет следующим: <Tabs onChange={handleChangeTab} tabs={periods} />.
     * При этом свойство tabs ожидает массив из объектов вида {label: '', value: ''}.
     */
    const handleChangeTab = (tab) => {
        dispatch(changeTab(tab));
    };

    /**
     * При прохождении по чек-листу может возникнуть вопрос на счёт компонента Shedule. 
     * Почему для Shedule не определялся обмен данными? Потому, что данные в него из ShedulePage будут переданы через пропсы. 
     * А это действие осуществляется самым первым, но уже в компоненте Shedule.
     */
    
    useEffect(() => {
      setLoading(true);
      fetch(`/api/v1/shedule/${period}`).then(res => res.json()).then(res => {
        console.log(res);
        setSheduleItemList(res);
        setLoading(false);
      }).catch(err => {
        setError(err);
        setLoading(false);
      });
    }, [period]);

    if (error) {
        return <div>{error}</div>;
    }

    if (loading) {
        return <div>Загружается...</div>;
    }

    return (
        <Fragment>
            <section>
                <div>Tabs{/* @TODO <Tabs onChange={handleChangeTab} tabs={periods} /> */}</div>
            </section>
            <section>
                <div>Shedule{/* @TODO <Shedule sheduleList={sheduleItemList} /> */}</div>
                <div><Outlet /></div>{/* Здесь в Outlet будет рендериться SheduleItemDetails */}
            </section>
        </Fragment>
    );
}