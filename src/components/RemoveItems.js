import React from 'react';

const RemoveItems = (props) => (
    <div className="remove-items">
        <button className="remove-completed-btn remove-btn" onClick={props.handleRemoveCompleted} >Remove Completed</button>
    </div>
);

export default RemoveItems;