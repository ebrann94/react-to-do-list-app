import React from 'react';

const ListItem = (props) => {
    const className = props.completed ? 'completed list-item' : 'list-item';
    
    return (
        <div 
            className={className} 
            onClick={(e) => {
                if (e.target.name !== 'completed') props.handleCompleteItem(props.id)
            }}
        >   
            <p>{props.text}</p>
            <div className="list-item__btns">
                <input 
                    type="checkbox" 
                    onChange={() => props.handleCompleteItem(props.id)} 
                    checked={props.completed}
                    className="list-item__checkbox"
                    name="completed"
                />
                <button
                    className="list-item__delete"
                    onClick={() => props.handleRemoveOne(props.id)}
                >
                    <div>X</div>
                </button>
            </div>
        </div>
    );
}

export default ListItem;