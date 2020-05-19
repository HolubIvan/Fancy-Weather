export default class Weather{
  constructor(data, timezoneAndCountry, icons, language){
    this.city = data.city.name;
    this.country = timezoneAndCountry.countryName;
    this.date = new Date();
    this.language = language;
    this.overcast = data.list[0].weather[0].description;
    this.timezone = timezoneAndCountry.timezoneId;
    this.currentTemperature = data.list[0].main.temp;
    this.feels = data.list[0].main.feels_like;
    this.wind = data.list[0].wind.speed;
    this.humidity = data.list[0].main.humidity;
    this.latitude = data.city.coord.lat;
    this.longitude = data.city.coord.lon;
    this.icons = icons;
    this.tempTomorrow = data.list[8].main.temp;
    this.tempAfterTomorrow = data.list[16].main.temp;
    this.tempIn2Days = data.list[24].main.temp;
    this.dayTomorrow = new Date(data.list[8].dt_txt).toLocaleString(`${this.language}-${this.language.toUpperCase()}`,{ weekday: 'long' });
    this.dayAfterTomorrow = new Date(data.list[16].dt_txt).toLocaleString(`${this.language}-${this.language.toUpperCase()}`,{ weekday: 'long' });
    this.dayIn2Days = new Date(data.list[24].dt_txt).toLocaleString(`${this.language}-${this.language.toUpperCase()}`,{ weekday: 'long' });
  }

  createWeatherEng(){
    const layout = `<div class="weather">
                                  
                      <div class="weather__current current">
                          <div class="current__info">
                              <h2 class="current__city">${this.city}, ${this.country}</h2>
                              <p class="current__date"></p>
                          </div>
                          <p class="current__temperature">${this.currentTemperature.toFixed()}</p>
                          <div class="current__icon">${this.icons[0]}</div>
                          <div class="current__details details">
                              <p class="details__clouds">${this.overcast}</p>
                              <p class="details__feels">FEELS LIKE: ${Math.round(this.feels)}&#176;</p>
                              <p class="details__wind">WIND: ${this.wind} m/s</p>
                              <p class="details__humidity">HUMIDITY: ${this.humidity}%</p>
                          </div>

                      </div>

                      <div class="weather__forecast">
                          <div class="forecast">
                              <p class="forecast__day">${this.dayTomorrow}</p>
                              <p class="forecast__temperature">${this.tempTomorrow.toFixed()}&#176;</p>
                              <div class="forecast__img">${this.icons[1]}</div>
                          </div>

                          <div class="forecast">
                              <p class="forecast__day">${this.dayAfterTomorrow}</p>
                              <p class="forecast__temperature">${this.tempAfterTomorrow.toFixed()}&#176;</p>
                              <div class="forecast__img">${this.icons[2]}</div>
                          </div>

                          <div class="forecast">
                              <p class="forecast__day">${this.dayIn2Days}</p>
                              <p class="forecast__temperature">${this.tempIn2Days.toFixed()}&#176;</p>
                              <div class="forecast__img">${this.icons[3]}</div>
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

  createWeatherRus(){
    const layout = `<div class="weather">
                                  
                      <div class="weather__current current">
                          <div class="current__info">
                              <h2 class="current__city">${this.city}, ${this.country}</h2>
                              <p class="current__date"></p>
                          </div>
                          <p class="current__temperature">${this.currentTemperature.toFixed()}</p>
                          <div class="current__icon">${this.icons[0]}</div>
                          <div class="current__details details">
                              <p class="details__clouds">${this.overcast}</p>
                              <p class="details__feels">ОЩУЩАЕТСЯ КАК: ${Math.round(this.feels)}&#176;</p>
                              <p class="details__wind">ВЕТЕР: ${this.wind} m/s</p>
                              <p class="details__humidity">ВЛАЖНОСТЬ: ${this.humidity}%</p>
                          </div>

                      </div>

                      <div class="weather__forecast">
                          <div class="forecast">
                              <p class="forecast__day">${this.dayTomorrow}</p>
                              <p class="forecast__temperature">${this.tempTomorrow.toFixed()}&#176;</p>
                              <div class="forecast__img">${this.icons[1]}</div>
                          </div>

                          <div class="forecast">
                              <p class="forecast__day">${this.dayAfterTomorrow}</p>
                              <p class="forecast__temperature">${this.tempAfterTomorrow.toFixed()}&#176;</p>
                              <div class="forecast__img">${this.icons[2]}</div>
                          </div>

                          <div class="forecast">
                              <p class="forecast__day">${this.dayIn2Days}</p>
                              <p class="forecast__temperature">${this.tempIn2Days.toFixed()}&#176;</p>
                              <div class="forecast__img">${this.icons[3]}</div>
                          </div>


                      </div>

                  </div>

                  <div class="location">
                      <div id="map"></div>
                      <div class="location__coordinates">
                          <p class="location__latitude">
                              Широта: ${String(this.latitude).split('.')[0]}&#176;${String(this.latitude).split('.')[1].slice(0,2)}'
                          </p>
                          <p class="location__longitude">
                              Долгота: ${String(this.longitude).split('.')[0]}&#176;${String(this.longitude).split('.')[1].slice(0,2)}'
                          </p>
                      </div>
                  </div>`;
    return layout;
  }

  createWeatherBel(){
    const layout = `<div class="weather">
                                  
                      <div class="weather__current current">
                          <div class="current__info">
                              <h2 class="current__city">${this.city}, ${this.country}</h2>
                              <p class="current__date"></p>
                          </div>
                          <p class="current__temperature">${this.currentTemperature.toFixed()}</p>
                          <div class="current__icon">${this.icons[0]}</div>
                          <div class="current__details details">
                              <p class="details__clouds">${this.overcast}</p>
                              <p class="details__feels">АДЧУВАЕЦЦА ЯК: ${Math.round(this.feels)}&#176;</p>
                              <p class="details__wind">ВЕТЕР: ${this.wind} m/s</p>
                              <p class="details__humidity">ВIЛЬГОТНАСЦЬ: ${this.humidity}%</p>
                          </div>

                      </div>

                      <div class="weather__forecast">
                          <div class="forecast">
                              <p class="forecast__day">${this.dayTomorrow}</p>
                              <p class="forecast__temperature">${this.tempTomorrow.toFixed()}&#176;</p>
                              <div class="forecast__img">${this.icons[1]}</div>
                          </div>

                          <div class="forecast">
                              <p class="forecast__day">${this.dayAfterTomorrow}</p>
                              <p class="forecast__temperature">${this.tempAfterTomorrow.toFixed()}&#176;</p>
                              <div class="forecast__img">${this.icons[2]}</div>
                          </div>

                          <div class="forecast">
                              <p class="forecast__day">${this.dayIn2Days}</p>
                              <p class="forecast__temperature">${this.tempIn2Days.toFixed()}&#176;</p>
                              <div class="forecast__img">${this.icons[3]}</div>
                          </div>


                      </div>

                  </div>

                  <div class="location">
                      <div id="map"></div>
                      <div class="location__coordinates">
                          <p class="location__latitude">
                            Шырата: ${String(this.latitude).split('.')[0]}&#176;${String(this.latitude).split('.')[1].slice(0,2)}'
                          </p>
                          <p class="location__longitude">
                            Даўгата: ${String(this.longitude).split('.')[0]}&#176;${String(this.longitude).split('.')[1].slice(0,2)}'
                          </p>
                      </div>
                  </div>`;
    return layout;
  }
}



// ${this.date.toLocaleString('en-EN',{ weekday: 'short',  day: 'numeric' ,month: 'long' ,hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: this.timezone, hour12: false})}
