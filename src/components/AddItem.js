import React from 'react';

const AddItem = (props) => (
    <div className="add-item">
        <form onSubmit={props.handleAddItem}>
            <input name="addItem" className="add-item__text-input"/>
            <button className="add-item__btn">Add Item</button>
        </form>
    </div>
);

export default AddItem;