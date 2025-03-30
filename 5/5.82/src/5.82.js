import React, { Fragment, useId } from 'react';

export const ProductList = ({ productList }) => {
    return (<Fragment>
        {
            productList.map(product => {
                const key = useId();
                const { title } = product;

                return <div key={key}>{title}</div>;
            })
        }
    </Fragment>);
}