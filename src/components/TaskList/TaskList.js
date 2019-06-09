import React from 'react';
import AddTask from './AddTask';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const TaskList = ({ list, handleDeleteList, renderTask }) => {
    const itemsToComplete = list.tasks.reduce((total, item) => !item.completed ? total + 1 : total, 0);
    return (
        <div className="list-container">
            <h2>{list.name}</h2>
            <p className="list__amt-completed">
                <span className="list__number">{itemsToComplete}</span> To Do
            </p>
            <button onClick={() => handleDeleteList(list.id)}>Delete List</button>
            <TransitionGroup className="todo-list">  
                {
                    list.tasks.map(task => {
                        return (
                            <CSSTransition
                                classNames="fade"
                                timeout={200}
                                key={task.id}
                            >
                                <div className="list-item-wrapper">
                                    {renderTask(task)}
                                </div>
                            </CSSTransition>
                        );
                    })
                }
            </TransitionGroup>
        </div>
    );
};

export default TaskList;