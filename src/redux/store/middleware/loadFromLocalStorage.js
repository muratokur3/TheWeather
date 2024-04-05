// loadFromLocalStorage.js
export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('weatherData');
    if (serializedState === null) {
      return undefined; // veya localStorage'da hiçbir şey yoksa istediğiniz başlangıç durumunu döndürün
    }
    const state = JSON.parse(serializedState);
    // cities dizisi var ve boş değilse, activeCity'i cities'in ilk elemanının ismi olarak ayarla
    if (state.cities && state.cities.length > 0) {
      state.activeCity = state.cities[0].name;
    }
    return state;
  } catch (err) {
    console.error("Could not load state from localStorage", err);
    return undefined; // veya hata durumunda istediğiniz başlangıç durumunu döndürün
  }
};
