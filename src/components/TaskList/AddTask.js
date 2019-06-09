import React, {useState} from 'react';

const AddTask = ({ handleAddTask }) => {
    const [inputText, setInputText] = useState("");

    return (
        <div className="add-item">
            <form onSubmit={e => {
                e.preventDefault();
                if (inputText) {
                    handleAddTask(inputText);
                    setInputText('');
                }
            }}>
                <input
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    name="addItem"
                    className="add-item__text-input"
                    placeholder="Add a new item..."
                    />
                <button className="add-item__btn" disabled={!inputText}>Add Item</button>
            </form>
        </div>
    );
};

export default AddTask;