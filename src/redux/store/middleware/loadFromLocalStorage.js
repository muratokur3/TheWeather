export const loadFromLocalStorage=()=> {
    try {
      const serializedState = localStorage.getItem('weatherData');
      if (serializedState === null) {
        // localStorage'da 'cities' anahtarı yoksa, boş bir dizi veya
        // varsayılan durumu döndür
        return [];
      }
      return JSON.parse(serializedState);
    } catch (err) {
      // Deserialization hatası olursa, boş bir dizi veya varsayılan durumu döndür
      console.error("Could not load cities from localStorage", err);
      return [];
    }
  }