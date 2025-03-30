import React, { useState, Fragment } from 'react';

export const RegistrationField = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (e) => setEmail(e.target.value);

    const handleChangePassword = (e) => setPassword(e.target.value);

    return (
        <Fragment>
            <input type="email" name="email" onChange={handleChangeEmail} value={email} />
            <input type="password" name="password" onChange={handleChangePassword} value={password} />
        </Fragment>
    );
}