import React, { useState, useRef } from 'react';

const TaskListItem = ({ handleCompleteTask, handleDeleteTask, handleEditTask, dragStart, dragEnd, index, ...props }) => {
    const [inputText, setInputText] = useState(props.text);
    // const [isEditable, setIsEditable] = useState(false);

    const textField = useRef(null);

    const handleTextChange = () => {
        handleEditTask(props.id, inputText);
        // setIsEditable(false);
    };

    const className = props.completed ? 'task-completed task' : 'task';
    return (
        <li
            className={className}
            draggable
            onDragStart={dragStart}
            onDragEnd={dragEnd}
            // onDoubleClick={(e) => {
            //     e.persist();
            //     setIsEditable(true)
            // }}
            data-index={index}
        >
            <div className='task__left'>
                <div
                    className={props.completed ? 'task__check-mark task__check-mark--completed': 'task__check-mark'}
                    onClick={() => handleCompleteTask(props.id)}
                >
                </div>
                <p
                    className="task__text"
                    contentEditable={!props.completed}
                    suppressContentEditableWarning={true}
                    ref={textField}
                    onInput={(e) => setInputText(e.target.textContent)}
                    onBlur={handleTextChange}
                    onKeyDown={e => {
                        if (e.keyCode === 13) {
                            e.preventDefault();
                            e.target.blur();
                        }
                    }}
                >
                    {props.text}
                </p>
            </div>
            <div className="task__btns">
                <button
                    name="delete-btn"
                    className="task__delete"
                    onClick={() => handleDeleteTask(props.id)}
                >
                    X
                </button>
            </div>
        </li>
    );
};

export default TaskListItem;