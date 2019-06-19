import React from 'react';

const List = ({ items, renderItem, className }) => {
    return (
        <ul
            className={className}
        >
            {
                items.map(item => (
                    renderItem({
                        ...item
                    })
                ))
            }
        </ul>
    )
};

export default List;