import React from 'react';

export const ProductItem = ({ product }) => {
    const {name, category, calories} = product;

    return (
        <div>
            <span>{name}, </span>
            <span>{category}, </span>
            <span>{calories}</span>
        </div>
    );
};