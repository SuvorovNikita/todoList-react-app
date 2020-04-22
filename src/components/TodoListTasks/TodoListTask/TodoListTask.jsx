import React from 'react';


class TodoListTask extends React.Component {
    onIsDoneChange = (e) => {
        this.changeStatus(e.currentTarget.checked, this.props.task);
    };

    render = () => {
        return (
            <div className="todoList-task">
                <input type="checkbox" checked={this.props.task.isDone} onChange={this.onIsDoneChange}/>
                <span>{this.props.task.title} - {this.props.task.priority} </span>
            </div>
        );
    };
}

export default TodoListTask;

