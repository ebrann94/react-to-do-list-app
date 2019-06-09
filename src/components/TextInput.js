import React, {useState} from 'react';

const TextInput = ({ handleSubmit, className, placeholder }) => {
    const [inputText, setInputText] = useState("");

    return (
        <div className={className}>
            <form onSubmit={e => {
                e.preventDefault();
                if (inputText) {
                    handleSubmit(inputText);
                    setInputText('');
                }
            }}>
                <input
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    name="text"
                    placeholder={placeholder}
                    />
                <input
                    type={"submit"}
                    value={"+"}
                />
            </form>
        </div>
    );
};

export default TextInput;