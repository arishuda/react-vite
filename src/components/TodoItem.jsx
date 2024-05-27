import React from 'react';

const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
  const getTodoTitleStyle = () => {
    return todo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
  };

  return (
    <div style={styles.todoItem}>
      <input
        type="checkbox"
        style={styles.checkbox}
        checked={todo.completed}
        onChange={() => toggleCompleted(todo.id)}
      />
      <p style={{ ...styles.todoText, ...getTodoTitleStyle() }}>{todo.title}</p>
      <button style={styles.button} onClick={() => deleteTodo(todo.id)}>x</button>
    </div>
  );
};

const styles = {
  todoItem: {
    display: 'flex',
    alignItems: 'center', // Center items vertically
    justifyContent: 'space-between',
    padding: '8px',
    borderBottom: '1px solid #ccc',
  },
  checkbox: {
    marginRight: '8px',
  },
  todoText: {
    flex: 1, // Allow the text to take up the remaining space
    margin: '0 8px', // Add margin to the left and right
    textAlign: 'left', // Align text to the left
  },
  button: {
    background: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    padding: '4px 8px',
  },
};

export default TodoItem;
