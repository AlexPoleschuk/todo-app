import React, { useEffect, useReducer } from 'react';
import styles from '../css/common.module.scss';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { getData, setData } from '../model/lsAdapter';
import updateTodos from '../store/reducer';
import { initTodos } from '../store/actions';

export default () => {
  const initialState = { todos: new Map(), selected: '', ver: 0 };
  const [state, dispatch] = useReducer(updateTodos, initialState);
  const { todos, selected, ver } = state;

  useEffect(() => {
    dispatch({ type: initTodos, payload: getData() });
  }, []);

  useEffect(() => {
    if (ver > 0) {
      setData(todos);
    }
  }, [ver, todos]);

  return (
    <>
      <header>
        <h2>Todo App</h2>
      </header>
      <section className={styles.main}>
        <TodoList todoList={todos} dispatch={dispatch} />
        <TodoForm selected={selected} dispatch={dispatch} />
      </section>
      <footer>
        <h6>Alex, 2019</h6>
      </footer>
    </>
  );
};
