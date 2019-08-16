import React from 'react';
import PropTypes from 'prop-types';
import { selectItem, setItemDone, deleteItem } from '../store/actions';
import {
  errMessage,
  donePhrase,
  deletePhrase,
  inProgressPhrase,
} from '../model/constants';
import styles from '../css/common.module.scss';

const TodoList = ({ todoList, dispatch }) => (
  <>
    {todoList.size !== 0 ? (
      <ul className={styles.todo_list}>
        {[...todoList.entries()].map((item) => {
          const [todoId, todoData] = item;
          const { theme, text, done } = todoData;

          return (
            <li key={todoId}>
              <button
                type="button"
                disable={done.toString()}
                className={done ? styles.done_flag : styles.set_done_btn}
                onClick={() => dispatch({
                  type: setItemDone,
                  payload: todoId,
                })}
              >
                {done ? donePhrase : inProgressPhrase}
              </button>
              <button
                type="button"
                className={styles.todo_body}
                onClick={() => dispatch({
                  type: selectItem,
                  payload: todoId,
                })}
              >
                <h4>{theme}</h4>
                <span>{text}</span>
              </button>
              <button
                type="button"
                className={styles.delete_btn}
                onClick={() => dispatch({
                  type: deleteItem,
                  payload: todoId,
                })}
              >
                {deletePhrase}
              </button>
            </li>
          );
        })}
      </ul>
    ) : (
      errMessage
    )}
  </>
);

TodoList.propTypes = {
  todoList: PropTypes.instanceOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default TodoList;
