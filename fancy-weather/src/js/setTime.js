export default function setRunningTime(timezoneAndCountry, lang){
    const date = new Date();
    const update = date.toLocaleString(`${lang}-${lang.toUpperCase()}`,{ weekday: 'short',  day: 'numeric' ,month: 'long' ,hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: timezoneAndCountry, hour12: false})
    document.querySelector('.current__date').innerHTML = update;
}