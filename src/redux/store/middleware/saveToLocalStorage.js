export const saveToLocalStorage = store => next => action => {
  let result = next(action);
  localStorage.setItem('weatherData', JSON.stringify(store.getState().weatherData));
  return result;
};