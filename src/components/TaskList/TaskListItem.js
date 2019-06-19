import React from 'react';

const TaskListItem = ({ handleCompleteTask, handleDeleteTask, dragStart, dragEnd, index, ...props }) => {
    const className = props.completed ? 'task-completed task' : 'task';

    return (
        <li
            className={className}
            draggable
            onDragStart={dragStart}
            onDragEnd={dragEnd}
            data-index={index}
            onClick={(e) => {
                if (e.target.name !== 'delete-btn') handleCompleteTask(props.id)
            }}
        >
            <div className='task__left'>
                <div className={props.completed ? 'task__check-mark task__check-mark--completed': 'task__check-mark'}></div>
                <p>{props.text}</p>
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