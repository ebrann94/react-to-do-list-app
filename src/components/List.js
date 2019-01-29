import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="">
                {
                    this.props.items.map((item, index) => {
                        return (<ListItem 
                            item={item.item} 
                            completed={item.completed} 
                            handleCompleteItem={this.props.handleCompleteItem}
                            // {...item}
                            key={index} 
                            index={index}
                            
                        />)
                    })
                }
            </div>
        )
    }
}

export default List;