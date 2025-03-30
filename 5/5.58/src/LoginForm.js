import React from 'react';

export const LoginForm = () => {
    const handleSubmit = (event) => {
        const [{value: email}, {value: password}] = event.target.elements;
        localStorage.setItem('token', JSON.stringify({ email, password }));
    };

    return (
        <>
          <h3>LoginForm</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Login</button>
          </form>
        </>
    );
};