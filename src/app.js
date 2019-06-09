import React from 'react';
import uuid from 'uuid';
import TaskList from './components/TaskList/TaskList';
import RemoveItems from './components/RemoveItems';
import MyLists from './components/UserLists/MyLists';
import { updateCurrentList } from './utils'
import TaskListItem from "./components/TaskList/TaskListItem";
import AddTask from './components/TaskList/AddTask';
import TextInput from './components/TextInput';

class App extends React.Component {
    state = JSON.parse(localStorage.getItem('app-data')) || {
        lists: [
            {
                id: uuid(),
                name: 'Todo',
                tasks: [
                    {
                        id: uuid(),
                        text: 'Washing Up',
                        completed: false
                    },
                    {
                        id: uuid(),
                        text: 'Laundry',
                        completed: false
                    }
                ]
            }
        ],
        currentListId: ''
    };

    handleRemoveCompleted = () => {
        const tasksCallback = tasks => tasks.filter(task => !task.completed);
        this.setState(prevState => updateCurrentList(prevState, tasksCallback));
    };

    handleDeleteTask = (idToRemove) => {
        const tasksCallback = tasks => tasks.filter(task => task.id !== idToRemove);
        this.setState(prevState => updateCurrentList(prevState, tasksCallback));
    };

    handleAddTask = (newText) => {
        const newTask = {
            id: uuid(),
            text: newText,
            completed: false
        };
        const tasksCallback = tasks => tasks.concat(newTask);
        this.setState((prevState) =>  updateCurrentList(prevState, tasksCallback));
    };

    handleCompleteTask = (idToComplete) => {
        const tasksCallback = tasks => tasks.map(task => {
            if (task.id === idToComplete) {
                return {
                    ...task,
                    completed: !task.completed
                }
            } else {
                return task;
            }
        });
        this.setState(prevState => updateCurrentList(prevState, tasksCallback));
    };

    getListById = (listId) => {
        return this.state.lists.find(list => listId === list.id);
    };

    handleAddList = (listName) => {
        const newList = {
            id: uuid(),
            name: listName,
            tasks: []
        };
        this.setState(prevState => ({
            ...prevState,
            lists: prevState.lists.concat(newList)
        }));
    };

    handleDeleteList = (listId) => {
        this.setState(prevState => ({
            ...prevState,
            lists: prevState.lists.filter(list => list.id !== listId)
        }))
    };

    handleSelectList = listId => {
        this.setState({ currentListId: listId });
    };

    componentDidMount() {
        this.setState(prevState => ({ currentListId: prevState.lists[0].id}))
    }

    componentDidUpdate() {
        localStorage.setItem('app-data', JSON.stringify(this.state));
    }

    render() {
        return (
            <div className="app-container">
                <div className="sidebar-container">
                    <MyLists
                        {...this.state}
                        handleAddList={this.handleAddList}
                        handleSelectList={this.handleSelectList}
                    />
                </div>
                <main className="main-container">
                    <RemoveItems handleRemoveCompleted={this.handleRemoveCompleted} />
                    <TaskList
                        list={this.getListById(this.state.currentListId) || this.state.lists[0]}
                        handleDeleteList={this.handleDeleteList}
                        renderTask={(task) => (
                            <TaskListItem
                                handleCompleteTask={this.handleCompleteTask}
                                handleDeleteTask={this.handleDeleteTask}
                                {...task}
                            />
                        )}
                    />
                    <TextInput
                        handleSubmit={this.handleAddTask}
                        placeholder="Add a task"
                    />
                </main>
            </div>
        );
    }
}

export default App;