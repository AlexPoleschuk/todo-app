import React from 'react';
import PropTypes from 'prop-types';
import {
  selectItem,
  setItemDone,
  deleteItem,
} from '../store/actions';
import {
  errMessage,
  donePhrase,
  deletePhrase,
  inProgressPhrase,
} from '../model/constants';

const TodoList = ({ todoList, dispatch }) => (
  <div>
    {todoList.size !== 0 ? (
      <ul>
        {[...todoList.entries()].map((item) => {
          const [todoId, todoData] = item;
          const { theme, text, done } = todoData;

          return (
            <li key={todoId}>
              {!done ? (
                <button
                  type="button"
                  onClick={() => dispatch({
                    type: setItemDone,
                    payload: todoId,
                  })}
                >
                  {inProgressPhrase}
                </button>
              ) : (
                <span>{donePhrase}</span>
              )}
              <button
                type="button"
                onClick={() => dispatch({
                  type: selectItem,
                  payload: todoId,
                })}
              >
                <h5>{theme}</h5>
                <span>{text}</span>
              </button>
              <button
                type="button"
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
    <ul />
  </div>
);

TodoList.propTypes = {
  todoList: PropTypes.instanceOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default TodoList;
