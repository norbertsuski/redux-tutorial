import React, { useState } from 'react';
import {
  arrayOf, number, string, shape, func,
} from 'prop-types';
import { connect } from 'react-redux';
import * as todoActions from './store/actions';

import './App.css';

const App = ({ todos, addTodo }) => {
  const [todoTitle, setTodoTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo({ title: todoTitle, id: todos.length });
    setTodoTitle('');
  };

  const handleOnChange = (event) => {
    setTodoTitle(event.target.value);
  };

  return (
    <div className="app">
      <header className="app-header">Learn Redux</header>
      <main className="app-content">
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

App.propTypes = {
  todos: arrayOf(shape({
    id: number,
    title: string,
  })).isRequired,
  addTodo: func.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo: todoActions.addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
