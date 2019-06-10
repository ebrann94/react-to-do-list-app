import React from 'react';

const TaskListItem = ({ handleCompleteTask, handleDeleteTask, ...props }) => {
    const className = props.completed ? 'task-completed task' : 'task';
    
    return (
        <div 
            className={className} 
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
        </div>
    );
};

export default TaskListItem;