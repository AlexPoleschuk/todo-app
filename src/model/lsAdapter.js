export const getData = () => {
  let result;
  const localData = JSON.parse(window.localStorage.getItem('todos'));

  if (localData && localData.length !== 0) {
    const sortedData = localData.sort((a, b) => {
      const themeA = a.theme.toLowerCase();
      const themeB = b.theme.toLowerCase();
      if (themeA < themeB) {
        return 1;
      }
      if (themeA > themeB) {
        return -1;
      }
      return 0;
    });
    result = sortedData.reduce((acc, cur, i) => {
      acc.set(i + 1, cur);
      return acc;
    }, new Map());
  } else {
    result = new Map();
  }

  return result;
};

export const setData = (newData) => {
  window.localStorage.setItem('todos', JSON.stringify([...newData.values()]));
};
