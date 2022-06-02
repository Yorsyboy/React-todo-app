import React, { Component } from 'react';

class InputTodo extends Component {
  state = { // eslint-disable-line
    title: '',
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) { // eslint-disable-line
      this.props.addTodoProps(this.state.title); // eslint-disable-line
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item'); // eslint-disable-line
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          value={this.state.title} // eslint-disable-line
          onChange={this.onChange}
        />
        <button type="button" className="input-submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
