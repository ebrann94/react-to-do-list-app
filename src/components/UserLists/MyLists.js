import React from 'react';
import MyListsItem from './MyListsItem';
import TextInput from '../TextInput';

const MyLists = ({ lists, handleSelectList, handleAddList, currentListId }) => {
    return (
        <div>
            <h2>My Lists</h2>
            {
                lists.map(list => (
                    <MyListsItem
                        key={list.id}
                        id={list.id}
                        name={list.name}
                        handleSelectList={handleSelectList}
                        isCurrent={currentListId === list.id}
                    />
                ))
            }
            <TextInput
                handleSubmit={handleAddList}
                placeholder="Add List"
            />
        </div>
    )
};

export default MyLists;