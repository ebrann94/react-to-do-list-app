import React from 'react';
import ListItem from './ListItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const List = (props) => {
    return (
        <div className="items-container">
            <TransitionGroup className="todo-list">  
                {
                    props.items.map((item) => {
                        return (
                            <CSSTransition
                                classNames="fade"
                                timeout={200}
                                key={item.id}
                            >
                                <div className="list-item-wrapper">
                                    <ListItem 
                                        {...item}
                                        handleCompleteItem={props.handleCompleteItem}
                                        handleRemoveOne={props.handleRemoveOne}
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