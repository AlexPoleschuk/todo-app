import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { addItem } from '../store/actions';
import {
  savePhrase,
  addPhrase,
  themePlaceholder,
  textPlaceholder,
} from '../model/constants';
import styles from '../css/common.module.scss';

const TodoForm = ({ selected, dispatch }) => {
  const [theme, inputTheme] = useState('');
  const [text, inputText] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    dispatch({ type: addItem, payload: { theme, text } });
    inputTheme('');
    inputText('');
  };

  useEffect(() => {
    inputTheme(selected.theme || '');
    inputText(selected.text || '');
  }, [selected]);

  return (
    <form
      className={styles.todo_form}
      onSubmit={(e) => addTodo(e)}
    >
      <textarea
        placeholder={themePlaceholder}
        value={theme}
        onChange={(e) => inputTheme(e.target.value)}
      >
        {selected ? selected.theme : ''}
      </textarea>
      <textarea
        placeholder={textPlaceholder}
        value={text}
        onChange={(e) => inputText(e.target.value)}
      >
        {selected ? selected.text : ''}
      </textarea>
      <button
        type="submit"
        disabled={!theme || !text}
        className={styles.add_todo_btn}
      >
        {selected.id ? savePhrase : addPhrase}
      </button>
    </form>
  );
};

TodoForm.propTypes = {
  selected: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object),
  ]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default TodoForm;
