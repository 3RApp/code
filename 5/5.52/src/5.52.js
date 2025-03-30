import React, { useState } from 'react';

export const DefaultBehaviourForm = () => {
    const [value, setValue] = useState('');

    const handleChange = (e) => setValue(e.target.value);

    return (
        <form method="GET" action="http://localhost:3000/some_path" encType="text/plain">
            <input value={value} onChange={handleChange} name="some_name" />
            <button type="submit">Отправить</button>
        </form>
    );
};