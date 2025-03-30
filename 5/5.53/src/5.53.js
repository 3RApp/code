import React from 'react';

export const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('/request', {
            method: 'POST',
            headers: {
                // Обратите внимание, что мы указываем тип данных как 'multipart/form-data'
                // https://developer.mozilla.org/en-US/docs/Web/API/FormData
                // Это важно для того, чтобы FormData корректно обрабатывался на сервере
                'Content-Type': 'multipart/form-data',
            },
            body: new FormData(e.target),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => {
            console.error('Ошибка:', error);
        });
    };

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input type="search" name="request" />
            <select name="case">
                <option value="sensitive">Учитывать регистр</option>
                <option value="not_sensitive">Не учитывать регистр</option>
            </select>
            <button type="submit">Отправить</button>
        </form>
    );
}