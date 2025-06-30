import { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    const trimmed = task.trim();
    if (!trimmed) {
      alert('Task cannot be empty.');
      return;
    }

    const updated = [...todos, trimmed];
    updated.sort((a, b) => a.localeCompare(b));
    setTodos(updated);
    setTask('');
  };

  const handleDelete = (index) => {
    const updated = [...todos];
    updated.splice(index, 1);
    setTodos(updated.sort((a, b) => a.localeCompare(b)));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div style={styles.container}>
      <h2>React Todo List</h2>

      <div style={styles.inputContainer}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a task"
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.addBtn}>Add</button>
      </div>

      <ul style={styles.ul}>
        {todos.map((item, index) => (
          <li key={index} style={styles.li}>
            {item}
            <button onClick={() => handleDelete(index)} style={styles.deleteBtn}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: '#fefefe',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontFamily: 'Arial'
  },
  inputContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  addBtn: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  ul: {
    listStyleType: 'none',
    padding: 0
  },
  li: {
    backgroundColor: '#f9f9f9',
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  deleteBtn: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default App;
