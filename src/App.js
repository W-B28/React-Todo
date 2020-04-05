import React from 'react';
import Todo from './components/Todo';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import styles from './Todo.css'
import { v4 as uuidv4 } from 'uuid';

const tasks = [
  {
    task: 'Organize Garage',
    id: uuidv4(),
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: uuidv4(),
    completed: false
  }
];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers
  // you need to work with your state

constructor() {
  super();
  this.state = {tasks};
}

// Format for new tasks
addTask = (task) => {

  const newTask = {
    task: task,
    id: uuidv4(),
    completed: false
  };
  this.setState({
    tasks: [...this.state.tasks, newTask]
  })
}
// Toggle Completed
markComplete = (id) => {
    this.setState({ tasks: this.state.tasks.map(task => {
      if(task.id === id){
        task.completed = !task.completed
      }
      return task;
    })})
}

  // delete // TODO:
  delTodo = (id) => {
    this.setState({ tasks: [...this.state.tasks.filter(task => task.id !== id)] })
  }


  render() {
  console.log(this.state.tasks)
    return (
      <div className="container">
      <Header />
      <TodoForm addTask={this.addTask}/>
      <Todo todos={this.state.tasks} markComplete={this.markComplete}
        delTodo={this.delTodo}/>
      </div>
    );
  }
}


export default App;
