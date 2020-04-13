import React from 'react';
import './App.css';
import TodoListHeader from "./components/TodoListHeader/TodoListHeader";
import TodoListTasks from "./components/TodoListTasks/TodoListTasks";
import TodoListFooter from "./components/TodoListFooter/TodoListFooter";

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        tasks: [
            {title: "CSS", isDone: true, priority: "low"},
            {title: "JS", isDone: false, priority: "height"},
            {title: "ReactJS", isDone: false, priority: "low"},
            {title: "Patterns", isDone: true, priority: "low"}
        ],
        filterValue: "Completed"
    };

    newTaskTitleRef = React.createRef();

    onAddTaskClick = () => {

        let newTitle = this.newTaskTitleRef.current.value;
        this.newTaskTitleRef.current.value = "";
        let newTask = {
            title: newTitle, isDone: false, priority: "low"
        };
        this.setState({tasks: [...this.state.tasks, newTask]});
    };

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <div className="todoList-header">
                        <h3 className="todoList-header__title">What to Learn</h3>
                        <div className="todoList-newTaskForm">
                            <input ref={this.newTaskTitleRef} type="text" placeholder="New task name"/>
                            <button onClick={this.onAddTaskClick}>Add</button>
                        </div>
                    </div>
                    {/*<TodoListHeader/>*/}
                    <TodoListTasks tasks={this.state.tasks}/>
                    <TodoListFooter filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

