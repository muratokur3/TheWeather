# TheWeather Uygulaması

TheWeather, kullanıcıların çeşitli şehirler için anlık hava durumu bilgilerine ve beş günlük tahminlere erişmelerini sağlayan bir uygulamadır. Kullanıcılar, şehir araması yapabilir, seçtikleri şehirler arasında kolayca gezinebilir ve uygulama, kullanıcıların mevcut konumlarını otomatik olarak tespit ederek ilgili hava durumu bilgilerini sunar. Uygulama, telefon, tablet ve masaüstü cihazlarda responsive tasarıma sahiptir, böylece farklı ekran boyutlarından erişimde mükemmel bir kullanıcı deneyimi sunar.
<img width="464" alt="Ekran Resmi 2024-04-20 23 33 20" src="https://github.com/muratokur3/TheWeather/assets/43227213/88ec6fe1-4a93-4e14-a54c-d8a004be3d42">
<img width="464" alt="Ekran Resmi 2024-04-20 23 32 14" src="https://github.com/muratokur3/TheWeather/assets/43227213/5a78bb19-885b-4a55-a735-f26732edd15a">
<img width="464" alt="Ekran Resmi 2024-04-20 23 32 08" src="https://github.com/muratokur3/TheWeather/assets/43227213/4ec03e55-c16a-4fe2-a22c-4ed3d0e0ba5a">
<img width="1680" alt="Ekran Resmi 2024-04-20 23 28 33" src="https://github.com/muratokur3/TheWeather/assets/43227213/eb265409-17c0-4fb9-9bc4-f5d9de6c7c8b">
<img width="1680" alt="Ekran Resmi 2024-04-20 23 26 11" src="https://github.com/muratokur3/TheWeather/assets/43227213/a172e193-8ced-446c-8a21-e402e8d55f56">
<img width="1680" alt="Ekran Resmi 2024-04-20 23 25 23" src="https://github.com/muratokur3/TheWeather/assets/43227213/962d71a9-1082-4468-a51f-d0597da977a4">
<img width="1680" alt="Ekran Resmi 2024-04-20 23 23 35" src="https://github.com/muratokur3/TheWeather/assets/43227213/9eb6718e-0a4f-4529-831e-12295d7b2268">

## Canlı Demo

Uygulamanın canlı demosunu aşağıdaki bağlantıdan inceleyebilirsiniz:

[iWeather Canlı Demo](https://muratokur3.github.io/TheWeather/)

## Özellikler

- Çoklu şehir ekleme ve arayüzde gezinme
- Kullanıcının anlık konumundan otomatik hava durumu bilgisi alma
- Telefon, tablet ve masaüstü için responsive uyumluluk
- Vite ile hızlı ve modern bir geliştirme deneyimi

## Kullanılan Teknolojiler

- React
- Axios
- Redux Toolkit
- MUI (Material-UI)
- Emotion
- React Router Dom
- Country List
- React Swipeable Views

## Yerelde Çalıştırma

Projeyi yerelde çalıştırmak için:

1. GitHub'dan repoyu klonlayın:
```bash
git clone https://github.com/muratokur3/TheWeather.git
```   
2. Uygulamanın düzgün çalışabilmesi için, OpenWeatherMap API anahtarınızı içeren bir .env dosyası oluşturmanız gerekmektedir. Aşağıdaki değişkenleri .env dosyanıza ekleyin:
```bash
REACT_APP_WEATHER_API_URL=https://api.openweathermap.org/data/2.5
REACT_APP_WEATHER_API_KEY=your_api_key
```
3. Gerekli paketleri indirin
 ```bash
  npm install
  ```

4. Projenizi Başlatın
  ```bash
   npm run dev
   ```
