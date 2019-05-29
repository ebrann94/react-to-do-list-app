import React from 'react';
import ListItem from './ListItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const List = ({ items, handleCompleteItem, handleRemoveOne }) => {
    return (
        <div className="items-container">
            {/*<p>{items.filter(item => !item.completed).length} Items To Complete</p>*/}
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