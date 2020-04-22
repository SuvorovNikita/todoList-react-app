import React from 'react';
import './App.css';
import TodoListTasks from "./components/TodoListTasks/TodoListTasks";
import TodoListFooter from "./components/TodoListFooter/TodoListFooter";
import TodoListHeader from "./components/TodoListHeader/TodoListHeader";


class App extends React.Component {
    state = {
        tasks: [
            {title: "CSS", isDone: true, priority: "low"},
            {title: "JS", isDone: false, priority: "height"},
            {title: "ReactJS", isDone: false, priority: "low"},
            {title: "Patterns", isDone: true, priority: "low"}
        ],
        filterValue: "Completed"
    };

    addTask = (newTitle) => {


        let newTask = {
            title: newTitle, isDone: false, priority: "low"
        };
        this.setState({tasks: [...this.state.tasks, newTask]});
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        });
    };
    changeStatus = (status, task) => {
        let tasksCopy = this.state.tasks.map((t) => {
            if (t == task) {
                return {...t, isDone: status};
            }
            return t;
        });
        this.setState({
            tasks: tasksCopy
        });

    };

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks changeStatus={this.changeStatus}

                                   tasks={this.state.tasks.filter((t) => {
                                       switch (this.state.filterValue) {
                                           case "All":
                                               return true;
                                           case "Completed":
                                               return t.isDone;
                                           case "Active":
                                               return !t.isDone;
                                           default:
                                               return true;
                                       }
                                   })}/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

