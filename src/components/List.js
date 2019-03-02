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
                                        {...item}
                                        handleCompleteItem={this.props.handleCompleteItem}
                                        handleRemoveOne={this.props.handleRemoveOne}
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