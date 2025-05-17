import {useState} from'react';
// import {Spinner} from '../components';

export const SheduleBooking = () => {

    const [candidateFio, setCandidateFio] = useState('');
    const [candidateVacancy, setCandidateVacancy] = useState('');
    const [creatingStatus, setCreatingStatus] = useState('idle'); //idle, loading, success
    const [error, setError] = useState(null);

    const handleChangeCandidateFio = e => setCandidateFio(e.target.value);
    const handleChangeCandidateVacancy = e => setCandidateVacancy(e.target.value);
    const resetError = () => {
        setError(null);
        setCreatingStatus('idle');
    };

    const handleSubmit = e => {
        e.preventDefault();
        setCreatingStatus('loading');
        fetch('/api/v1/shedule/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fio: candidateFio,
                vacancy: candidateVacancy,
            }),
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    setCreatingStatus('success');
                } else {
                    setError(data.error);
                }
            }).catch(err => {
                setError(err.message);
            });
    };

    if (creatingStatus === 'loading') {
        return <div>Загрузка...{/*<Spinner />*/}</div>;
    }

    if (creatingStatus === 'error') {
        return <section>
            <div>Ошибка: {error}</div>
            <button onClick={resetError}>Создать еще раз</button>
        </section>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" name="fio" value={candidateFio} onChange={handleChangeCandidateFio} />
            </div>
            <div>
                <input type="text" name="vacancy" value={candidateVacancy} onChange={handleChangeCandidateVacancy} />
            </div>
            <input type="submit" title='Отправить' />
        </form>
    );
}