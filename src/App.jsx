import React from 'react';
import './App.css';
import TodoListHeader from "./components/TodoListHeader/TodoListHeader";
import TodoListTasks from "./components/TodoListTasks/TodoListTasks";
import TodoListFooter from "./components/TodoListFooter/TodoListFooter";

class App extends React.Component {

    tasks = [
        {title: "CSS", isDone: true, priority: "low"},
        {title: "JS", isDone: false, priority: "height"},
        {title: "ReactJS", isDone: false, priority: "low"},
        {title: "Patterns", isDone: true, priority: "low"}
    ];

    filterValue = "Completed";

    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader/>
                    <TodoListTasks tasks={this.tasks}/>
                    <TodoListFooter filterValue={this.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

