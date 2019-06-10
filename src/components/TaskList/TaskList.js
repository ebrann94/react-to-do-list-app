import React from 'react';

const TaskList = ({ list, handleDeleteList, children }) => {
    return (
        <div className="task-list-container">
            <div className="task-list__top">
                <h1 className="task-list__title">{list.name.toUpperCase()}</h1>
                <button
                    className="task-list__delete"
                    onClick={() => handleDeleteList(list.id)}
                >
                    X
                </button>
            </div>
            {children}
        </div>
    );
};

export default TaskList;