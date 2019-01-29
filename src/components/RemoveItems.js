import React from 'react';

const RemoveItems = (props) => (
    <div className="remove-items">
        <button onClick={props.handleRemoveAll} >Remove All</button>
        <button onClick={props.handleRemoveCompleted} >Remove Completed</button>
    </div>
);

export default RemoveItems;