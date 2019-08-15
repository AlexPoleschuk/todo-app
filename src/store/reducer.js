import {
  initTodos,
  selectItem,
  setItemDone,
  deleteItem,
  addItem,
} from './actions';

export default ({ todos, selected, ver }, { type, payload }) => {
  switch (type) {
    case initTodos:
      return { todos: payload, selected: '', ver };
    case selectItem: {
      const item = todos.get(payload);
      const id = payload;

      return {
        todos,
        selected: { ...item, id },
        ver: ver + 1,
      };
    }
    case setItemDone: {
      const newData = todos;
      const current = todos.get(payload);
      newData.set(payload, Object.assign(current, { done: true }));

      return {
        todos: newData,
        selected: selected.id === payload ? selected : '',
        ver: ver + 1,
      };
    }
    case deleteItem: {
      const newData = todos;
      newData.delete(payload);

      const resultData = [...newData.values()].reduce((acc, cur, i) => {
        acc.set(i + 1, cur);
        return acc;
      }, new Map());

      return {
        todos: resultData,
        selected: '',
        ver: ver + 1,
      };
    }
    case addItem: {
      const newData = todos;
      const { theme, text } = payload;
      const status = selected.id ? newData.get(selected.id).done : false;
      const newId = newData.size > 0 ? Math.max(...[...newData.keys()]) + 1 : 1;
      newData.set(selected.id || newId, { theme, text, done: status });

      const sortedData = [...newData.entries()].sort((a, b) => {
        const themeA = a[1].theme.toLowerCase();
        const themeB = b[1].theme.toLowerCase();
        if (themeA < themeB) {
          return 1;
        }
        if (themeA > themeB) {
          return -1;
        }
        return 0;
      });

      const resultData = sortedData.reduce((acc, cur) => {
        acc.set(cur[0], cur[1]);
        return acc;
      }, new Map());

      return {
        todos: resultData,
        selected: '',
        ver: ver + 1,
      };
    }
    default:
      throw new Error();
  }
};
