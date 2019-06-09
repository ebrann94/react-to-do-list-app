import React, { useState } from 'react';

const AddList = ({ handleAddList }) => {
    const [text, setText] = useState('');
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (text.length > 0) {
                    handleAddList(text);
                    setText('');
                }
            }}>
                <input
                    type="text"
                    name="list-name"
                    placeholder="Add List"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <input
                    type={"submit"}
                    value={"+"}
                />
            </form>
        </div>
    )
};

export default AddList;