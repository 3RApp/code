import React, { useEffect, useState } from 'react';

export const Person = ({ id }) => {
    const [person, setPerson] = useState(null);

    useEffect(() => {
        console.log('Вызов установки');
        const controller = new AbortController();
        const url = `http://localhost:4000/persons/${id}`;

        fetch(url, { signal: controller.signal,  }).then(person => person.json()).then(person => {
            const { data } = person;
            setPerson(data);
        });

        return () => { controller.abort() };
    }, [id]);

    if (!person) {
        return <div>Загрузка...</div>
    }

    const { name, address } = person;

    return (
        <div>
            <span>{name}</span>, <span>{address}</span>
        </div>
    )
}