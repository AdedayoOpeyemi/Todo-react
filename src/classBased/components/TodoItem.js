/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  state = {
    editing: false,
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  }

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  }

  render() {
    const { editing } = this.state;
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    const viewMode = {};
    const editMode = {};

    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    const {
      todo, handleChangeProps, deleteTodoProps, setUpdateProps,
    } = this.props;
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={todo.completed}
            onChange={() => handleChangeProps(todo.id)}
          />
          <button type="button" onClick={() => deleteTodoProps(todo.id)}>
            Delete
          </button>
          <span style={todo.completed ? completedStyle : null}>
            {todo.title}
          </span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={todo.title}
          onChange={(e) => {
            setUpdateProps(e.target.value, todo.id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

export default TodoItem;
