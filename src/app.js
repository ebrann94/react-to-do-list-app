import React from 'react';
import uuid from 'uuid';
import TaskList from './components/TaskList/TaskList';
import TaskListItem from "./components/TaskList/TaskListItem";
import MyLists from './components/UserLists/MyLists';
import MyListsItem from './components/UserLists/MyListsItem';
import AddItem from './components/AddItem';
import List from './components/List';
import ReOrderableList from './components/ReorderableList';
import { updateCurrentList } from './utils'

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

    handleEditTask = (id, newText) => {
        const tasksCallback = tasks => tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    text: newText
                }
            } else {
                return task;
            }
        });

        this.setState(prevState => updateCurrentList(prevState, tasksCallback))
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
            currentListId: newList.id,
            lists: prevState.lists.concat(newList)
        }));
    };

    handleDeleteList = (listId) => {
        this.setState(prevState => ({
            currentListId: this.state.lists[0].id,
            lists: prevState.lists.filter(list => list.id !== listId)
        }))
    };

    handleSelectList = listId => {
        this.setState({ currentListId: listId });
    };

    handleReorder = newList => {
        const tasksCallback = () => [...newList];
        this.setState(prevState => updateCurrentList(prevState, tasksCallback));
    };

    componentDidMount() {
        this.setState(prevState => ({ currentListId: prevState.lists[0].id}))
    }

    componentDidUpdate() {
        localStorage.setItem('app-data', JSON.stringify(this.state));
    }

    render() {
        const currentList = this.getListById(this.state.currentListId) || {tasks: [], name: ''};
        return (
            <div className="app-container">
                <header className="sidebar-container">
                    <MyLists
                        {...this.state}
                        handleAddList={this.handleAddList}
                        handleSelectList={this.handleSelectList}
                    >
                        <List
                            items={this.state.lists}
                            className="my-lists__list"
                            renderItem={(list) => (
                                <MyListsItem
                                    key={list.id}
                                    id={list.id}
                                    name={list.name}
                                    handleSelectList={this.handleSelectList}
                                    isCurrent={list.id === this.state.currentListId}
                                />
                            )}
                        />
                        <AddItem
                            handleSubmit={this.handleAddList}
                            className="add-list"
                        />
                    </MyLists>
                </header>
                <main className="main-container">
                    <TaskList
                        list={currentList}
                        handleDeleteList={this.handleDeleteList}
                    >
                        <ReOrderableList
                            items={currentList.tasks}
                            handleReorder={this.handleReorder}
                            renderItem={(listProps) => (
                                <TaskListItem
                                    key={listProps.id}
                                    handleCompleteTask={this.handleCompleteTask}
                                    handleDeleteTask={this.handleDeleteTask}
                                    handleEditTask={this.handleEditTask}
                                    {...listProps}
                                />
                            )}
                        />
                        <AddItem
                            handleSubmit={this.handleAddTask}
                            className="add-task"
                        />
                    </TaskList>
                </main>
            </div>
        );
    }
}

export default App;