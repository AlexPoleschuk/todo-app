import React from 'react';
import styles from '../css/common.module.scss';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default () => (
  <>
    <header>
      <h2>Todo App</h2>
    </header>
    <section className={styles.main}>
      <TodoList />
      <TodoForm />
    </section>
    <footer>
      <h6>Alex, 2019</h6>
    </footer>
  </>
);
