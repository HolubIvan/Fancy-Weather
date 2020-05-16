export default class Weather{
  constructor(data, timezone){
    this.city = data.city.name;
    this.country = data.city.country;
    this.date = new Date();
    this.timezone = timezone;
    this.currentTemperature = data.list[0].main.temp;
    this.feels = data.list[0].main.feels_like;
    this.wind = data.list[0].wind.speed;
    this.humidity = data.list[0].main.humidity;
    this.latitude = data.city.coord.lat;
    this.longitude = data.city.coord.lon;
    this.icon = data.list[0].weather[0].icon;
    this.tempTomorrow = data.list[8].main.temp;
    this.tempAfterTomorrow = data.list[16].main.temp;
    this.tempIn2Days = data.list[24].main.temp;
    this.dayTomorrow = new Date(data.list[8].dt_txt).toLocaleString('en-EN',{ weekday: 'long' });
    this.dayAfterTomorrow = new Date(data.list[16].dt_txt).toLocaleString('en-EN',{ weekday: 'long' });
    this.dayIn2Days = new Date(data.list[24].dt_txt).toLocaleString('en-EN',{ weekday: 'long' });
  }

  createWeather(){
    const layout = `<div class="weather">
                                  
                      <div class="weather__current current">
                          <div class="current__info">
                              <h2 class="current__city">${this.city}, ${this.country}</h2>
                              <p class="current__date">${this.date.toLocaleString('en-EN',{ weekday: 'short',  day: 'numeric' ,month: 'long' ,hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: this.timezone, hour12: false})}
                              </p>
                          </div>
                          <p class="current__temperature">${this.currentTemperature.toFixed()}</p>
                          <img class="current__icon" src="http://openweathermap.org/img/wn/${this.icon}@2x.png" alt="cloud">
                          <div class="current__details details">
                              <p class="details__clouds">OVERCAST</p>
                              <p class="details__feels">FEELS LIKE: ${Math.round(this.feels)}&#176;</p>
                              <p class="details__wind">WIND: ${this.wind} m/s</p>
                              <p class="details__humidity">HUMIDITY: ${this.humidity}%</p>
                          </div>

                      </div>

                      <div class="weather__forecast">
                          <div class="forecast">
                              <p class="forecast__day">${this.dayTomorrow}</p>
                              <p class="forecast__temperature">${this.tempTomorrow.toFixed()}&#176;</p>
                              <img class="forecast__img" src="./img/cloud.png" alt="icon">
                          </div>

                          <div class="forecast">
                              <p class="forecast__day">${this.dayAfterTomorrow}</p>
                              <p class="forecast__temperature">${this.tempAfterTomorrow.toFixed()}&#176;</p>
                              <img class="forecast__img" src="./img/cloud.png" alt="icon">
                          </div>

                          <div class="forecast">
                              <p class="forecast__day">${this.dayIn2Days}</p>
                              <p class="forecast__temperature">${this.tempIn2Days.toFixed()}&#176;</p>
                              <img class="forecast__img" src="./img/cloud.png" alt="icon">
                          </div>


                      </div>

                  </div>

                  <div class="location">
                      <div id="map"></div>
                      <div class="location__coordinates">
                          <p class="location__latitude">
                              Latitude: ${String(this.latitude).split('.')[0]}&#176;${String(this.latitude).split('.')[1].slice(0,2)}'
                          </p>
                          <p class="location__longitude">
                              Longitude: ${String(this.longitude).split('.')[0]}&#176;${String(this.longitude).split('.')[1].slice(0,2)}'
                          </p>
                      </div>
                  </div>`;
    return layout;
  }
}