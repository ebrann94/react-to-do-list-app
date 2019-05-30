import React from 'react';
import ListItem from './ListItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const List = ({ items, handleCompleteItem, handleRemoveOne }) => {
    const itemsToComplete = items.reduce((total, item) => !item.completed ? total + 1 : total, 0);
    return (
        <div className="list-container">
            <p className="list__amt-completed">
                <span className="list__number">{itemsToComplete}</span> To Do, <span className="list__number">{items.length - itemsToComplete}</span> Done
            </p>
            <TransitionGroup className="todo-list">  
                {
                    items.map((item) => {
                        return (
                            <CSSTransition
                                classNames="fade"
                                timeout={200}
                                key={item.id}
                            >
                                <div className="list-item-wrapper">
                                    <ListItem 
                                        {...item}
                                        handleCompleteItem={handleCompleteItem}
                                        handleRemoveOne={handleRemoveOne}
                                    />
                                </div>
                            </CSSTransition>
                        );
                    })
                }
            </TransitionGroup>
        </div>
    );
    
}

export default List;