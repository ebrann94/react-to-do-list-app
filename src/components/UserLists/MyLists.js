import React from 'react';

const MyLists = ({ children }) => {
    return (
        <div className="my-lists-container">
            <h2 className="my-lists__title">MY LISTS</h2>
            {children}
        </div>
    )
};

export default MyLists;