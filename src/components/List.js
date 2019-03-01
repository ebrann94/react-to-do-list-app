import React from 'react';
import ListItem from './ListItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class List extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="items-container">
                <TransitionGroup className="todo-list">  
                    {
                        this.props.items.map((item, index) => {
                            return (
                                <CSSTransition
                                    classNames="fade"
                                    timeout={200}
                                    key={item.id}
                                >
                                    <ListItem 
                                        item={item.item} 
                                        completed={item.completed} 
                                        id={item.id}
                                        handleCompleteItem={this.props.handleCompleteItem}
                                        // {...item} 
                                        index={index} 
                                    />      
                                </CSSTransition>
                            );
                        })
                    }
                </TransitionGroup>
            </div>
        )
    }
}

export default List;