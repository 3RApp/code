import React from 'react';

import "./TreeNode.css";

export const TreeNode = ({ node }) => {
    const { value, category, children, hierarchy } = node;

    return (
        <div className={`offset${hierarchy}`}>
            <div>
                <span className={`value${hierarchy}`}>{value}</span>
                <span className={`category${hierarchy}`}>{category}</span>
            </div>
            {children && children.map((child) => <TreeNode key={child.id} node={child} />)}
        </div>
    );
}