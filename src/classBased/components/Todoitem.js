import React from 'react';
import styles from './TodoItem.module.css';

/* eslint-disable react/prop-types */
class TodoItem extends React.Component {
  // eslint-disable-line
  state = { // eslint-disable-line
    editing: false, // eslint-disable-line
  };

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  };

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  render() {
    const viewMode = {};
    const editMode = {};

    if (this.state.editing) { // eslint-disable-line
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';  // eslint-disable-line
    }
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    const { completed, id, title } = this.props.todo; // eslint-disable-line
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} /*eslint-disable-line */ style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)} // eslint-disable-line
          />
          <button type="button" onClick={() => this.props.deleteTodoProps(id)} /*eslint-disable-line */ >Delete</button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            this.props.setUpdate(e.target.value, id); // eslint-disable-line
          }}
          onKeyDown={this.handleUpdatedDone} // eslint-disable-line
        />
      </li>
    );
  }
}

export default TodoItem;
