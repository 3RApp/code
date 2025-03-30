import React, { Fragment, useContext } from 'react';
import { ExampleContext } from './5.46';

export const ChildSecondLevel = () => {
    const example = useContext(ExampleContext);

    return (<Fragment>{example}</Fragment>);
}