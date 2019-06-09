import React from 'react';

const TaskListItem = ({ handleCompleteTask, handleDeleteTask, ...props }) => {
    const className = props.completed ? 'completed list-item' : 'list-item';
    
    return (
        <div 
            className={className} 
            onClick={(e) => {
                if (e.target.name !== 'delete-btn') handleCompleteTask(props.id)
            }}
        >   
            <p>{props.text}</p>
            <div className="list-item__btns">
                <button
                    name="delete-btn"
                    className="list-item__delete"
                    onClick={() => handleDeleteTask(props.id)}
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default TaskListItem;