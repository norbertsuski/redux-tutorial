import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos((prevTodos) => [...prevTodos, { title: todoTitle, id: prevTodos.length }]);
    setTodoTitle('');
  };

  const handleOnChange = (event) => {
    setTodoTitle(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">Learn Redux</header>
      <main>
        <form onSubmit={handleSubmit}>
          <input value={todoTitle} type="text" name="title" onChange={handleOnChange} />
          <button type="submit">Submit</button>
        </form>

        <p>List of TODOs:</p>
        <ul>
          {todos.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
