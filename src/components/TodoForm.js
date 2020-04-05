import React from 'react';


 class TodoForm extends React.Component {
   state = {
     task:''
   }

onChange = (e) => this.setState({ [e.target.name]: e.target.value});

onSubmit =(e) => {
  e.preventDefault();
  this.props.addTask(this.state.task);
  this.setState({ task: ''})
}

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex' }}>
        <input
        type="text"
        name="task"
        placeholder="Add Task ..."
        style={{flex: "10",
                padding: "5px"}}
        value={this.state.task}
        onChange={this.onChange}

        />
        <input
        type="submit"
        value="Submit"
        className="btn"
        style={{flex: "1"}}
        />

      </form>
    )
  }
}

export default TodoForm;
