const API_KEY = "5589fef8dc103aa57522ba5e43e43ac8"
const BASE_URL = "https://api.openweathermap.org/data/3.0"

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType)
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})

    return fetch(url)
        .then((res) => res.json())
        .then((data) => data)
}

export default getWeatherData