import React from 'react';

const MyListsItem = ({ id, name, handleSelectList, isCurrent }) => {
    const classNames = isCurrent ? 'current-list' : '';
    return (
        <div
            className={classNames}
            onClick={() => handleSelectList(id)}
        >
            <p>{name}</p>
        </div>
    )
};

export default MyListsItem;