import React from 'react';

const MyListsItem = ({ id, name, handleSelectList, isCurrent }) => {
    const classNames = isCurrent ? 'current-list' : '';
    return (
        <div
            className={'my-lists-item ' + classNames}
            onClick={() => handleSelectList(id)}
        >
            <p className="my-lists-item__text">{name}</p>
        </div>
    )
};

export default MyListsItem;