import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useCallToSomeService} from './useCallToSomeService';
// import {Header } from '../components';
// import {Button} from '../components';
import styles from './SheduleItemDetails.module.css';

export const SheduleItemDetails = () => {

    const {sheduleId} = useParams();
    const callToSomeService = useCallToSomeService();
    const [sheduleDetails, setSheduleDetails] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`/api/v1/shedule/${sheduleId}`)
            .then(res => res.json())
            .then(data => {
                setSheduleDetails(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [sheduleId]);

    if (error) {
        return <div>{error.message}</div>;
    }

    if (loading) {
        return <div>Загрузка...</div>;
    }

    const {fio, vacancy, phoneNumber, candidateId, /*другие данные одного элемента расписания*/} = sheduleDetails;

    return (
        <section className={styles.details}>
            <div>
                {/* @TODO <Header fio /> */}
                {fio}
            </div>
            <div>
                {/* @TODO <Header vacancy /> */}
                {vacancy}
            </div>
            <div>
                {/* @TODO <Button candidateId={candidateId} onClick={() => callToSomeService(candidateId)}/> */}
                <button onClick={() => callToSomeService(phoneNumber)}>Позвонить</button>
            </div>
        </section>
    );
};
