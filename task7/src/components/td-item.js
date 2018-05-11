import React from 'react';
import './td-item.css';

export default class TodoItem extends React.Component{
  constructor(props){
    super(props);
  }


removeTodo(id){
  this.props.removeTodo(id);
}

render() {
  return (
    <div className="td-todoWrapper">
      <button
        className="td-removeTodo"
        onClick={(e) => this.removeTodo(this.props.id)}>
          X
      </button>
      {this.props.todo.text}
    </div>
  )
}
}