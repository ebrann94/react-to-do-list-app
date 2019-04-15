import React from 'react';

const ListItem = (props) => {
    const className = props.completed ? 'completed list-item' : 'list-item';
    
    return (
        <div 
            className={className} 
            onClick={(e) => {
                if (e.target.id !== 'completed-checkbox') props.handleCompleteItem(props.id)
            }}
        >   
            <p>{props.text}</p>
            <div>
                <input 
                    type="checkbox" 
                    onChange={() => props.handleCompleteItem(props.id)} 
                    checked={props.completed}
                    className="list-item__checkbox"
                    id="completed-checkbox"
                />
                <button onClick={() => props.handleRemoveOne(props.id)}>Delete</button>
            </div>
        </div>
    );
}

export default ListItem;