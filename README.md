# TheWeather Uygulaması

TheWeather, kullanıcıların çeşitli şehirler için anlık hava durumu bilgilerine ve beş günlük tahminlere erişmelerini sağlayan bir uygulamadır. Kullanıcılar, şehir araması yapabilir, seçtikleri şehirler arasında kolayca gezinebilir ve uygulama, kullanıcıların mevcut konumlarını otomatik olarak tespit ederek ilgili hava durumu bilgilerini sunar. Uygulama, telefon, tablet ve masaüstü cihazlarda responsive tasarıma sahiptir, böylece farklı ekran boyutlarından erişimde mükemmel bir kullanıcı deneyimi sunar.

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
