import React from 'react';

const ListItem = (props) => {
    return (
        <div className={props.completed ? 'completed list-item' : 'list-item'}>   
            <p>{props.item}</p>
            <input 
                type="checkbox" 
                onClick={() => props.handleCompleteItem(props.index)} 
                checked={props.completed}
                className="list-item__checkbox"
            />
        </div>
    );
}

export default ListItem;