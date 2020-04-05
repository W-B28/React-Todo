import React from 'react';

import TodoItem from '../components/TodoItem'
import PropTypes from 'prop-types';

class Todo extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers
  // you need to work with your state

// constructor() {
//   super();
//   this.state = {};
// }

// Add Todo

  render() {
    console.log(this.props.todos)
    return (
      this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}
          delTodo={this.props.delTodo}/>
      ))
    );
  }
}

Todo.propTypes = {
  todos :PropTypes.array.isRequired

  };


export default Todo;
