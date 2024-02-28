const api_key = "5b474101163de7cf4d09da4ac876f9bc"
    // let api = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}"
let api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q"

let city = "delhi"
    // getting input value

let input = document.querySelector("#search")
let btn = document.querySelector("#btn")
let weather = document.querySelector(".weather")
let last_port = document.querySelector(".last-port")

window.addEventListener("load", () => {
    get_weather(city)
})

const get_value = (city) => {
    city = input.value
        // console.log(city)
    get_weather(city)
}

const get_weather = async(city) => {
    let base_url = `${api}=${city}&appid=${api_key}`
    let promise = await fetch(base_url)
    let data = await promise.json()
    let temp = data["main"]["temp"]
    let humidity = data["main"]["humidity"]
    let city_name = data["name"]
    let wind = data["wind"]["speed"]
        // console.log(temp, humidity, city_name, wind)
    upadteFlag(temp, humidity, city_name, wind)
}


const upadteFlag = (temp, humidity, city_name, wind) => {
    weather.children[1].children[0].innerText = `${temp}°C`
    weather.children[2].children[0].innerText = city_name
    last_port.children[0].children[0].children[0].innerText = `${humidity}%`
    last_port.children[1].children[0].children[0].innerText = `${wind}Km/h`
        // console.log(child)

}

btn.addEventListener("click", get_value)