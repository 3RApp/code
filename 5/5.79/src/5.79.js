import React, { Fragment, useMemo, useCallback } from 'react';

export const OurComponent = ({ dependency }) => {
    const byUseMemo = useMemo(() => () => {
        console.log('By useMemo: ', dependency);
    }, [dependency]);
    const byUseCallback = useCallback(() => {
        console.log('By useCallback: ', dependency);
    }, [dependency]);

    console.log('dependency: ', dependency);

    return (
        <Fragment>
            <button onClick={byUseMemo}>By useMemo</button>
            <button onClick={byUseCallback}>By useCallback</button>
        </Fragment>
    );
}