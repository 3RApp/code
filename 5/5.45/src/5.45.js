import React, { createContext, useContext, Fragment } from 'react';

export const ExampleContext = createContext(null);

export const ParentContextComponent = () => (
    <ExampleContext.Provider value={"Привет от современной фронтенд-разработки"}>
        <ChildFirstLevel />
    </ExampleContext.Provider>
);

export const ChildFirstLevel = () => (
    <ChildSecondLevel />
);

export const ChildSecondLevel = () => {
    const example = useContext(ExampleContext);

    return (<Fragment>{example}</Fragment>);
};