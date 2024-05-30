import axios from "axios";


import { useState} from "react";
import {API_KEY, URLfiveDays, URLoneDay} from "../../const/Const.jsx";
import Weather from "../weather/Weather.jsx";
import Weather5Days from "../weather5days/Weather5Days.jsx";
import InputForm from "../inputform/InputForm.jsx";




function Service() {

    const [weatherdataOneDay, setWeatherdataOneDay] = useState({
        temp: undefined,
        feels_like: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        humidity: undefined,
        error: undefined,
        flag: false
    });

    const [weatherdataFiveDay, setWeatherdataFiveDay] = useState({
        error: undefined,
        temp1: undefined,
        temp2: undefined,
        temp3: undefined,
        temp4: undefined,
        temp5: undefined,
        pressure1: undefined,
        pressure2: undefined,
        pressure3: undefined,
        pressure4: undefined,
        pressure5: undefined,
    });
    const [flag, setFlag] = useState({
        flag1day: false,
        flag5day: false
    });



    const gettingWeather = async (city) => {
        if (city) {
            try {
                const response = await axios.get(`${URLoneDay}${city}${API_KEY}`);
                const data = response.data;
                let tempCelsius = (data.main.temp - 273.15).toFixed(0);
                let feels_likeCelsius = (data.main.feels_like - 273.15).toFixed(0);

                setWeatherdataOneDay({
                    temp: tempCelsius,
                    feels_like: feels_likeCelsius,
                    city: data.name,
                    country: data.sys.country,
                    pressure: data.main.pressure,
                    humidity: data.main.humidity,
                    error: undefined,

                });
                setFlag({
                    flag1day: true,
                    flag5day: false
                })
                ;
            } catch (error) {
                setWeatherdataOneDay({
                    temp: undefined,
                    feels_like: undefined,
                    city: undefined,
                    country: undefined,
                    pressure: undefined,
                    humidity: undefined,
                    error: "Ошибка при получении данных за день. Пожалуйста, попробуйте еще раз.",

                });
            }
        } else {
            setWeatherdataOneDay({
                temp: undefined,
                feels_like: undefined,
                city: undefined,
                country: undefined,
                pressure: undefined,
                humidity: undefined,
                error: "Введите название города",

            });
        }
    };
    const gettingWeather5days = async (city) => {
        if(city) {
            try {
                const response = await axios.get(`${URLfiveDays}${city}${API_KEY}`);

                const data = response.data;
                let day1 = data.list[0];
                let day2 = data.list[8];
                let day3 = data.list[16];
                let day4 = data.list[24];
                let day5 = data.list[32];

                setWeatherdataFiveDay({
                    temp1: (day1.main.temp - 273.15).toFixed(0),
                    temp2: (day2.main.temp - 273.15).toFixed(0),
                    temp3: (day3.main.temp - 273.15).toFixed(0),
                    temp4: (day4.main.temp - 273.15).toFixed(0),
                    temp5: (day5.main.temp - 273.15).toFixed(0),
                    city: data.city.name,
                    pressure1: day1.main.pressure,
                    pressure2: day2.main.pressure,
                    pressure3: day3.main.pressure,
                    pressure4: day4.main.pressure,
                    pressure5: day5.main.pressure,
                    error: undefined,

                });

                setFlag({
                    flag1day: true,
                    flag5day: true
                });
            } catch (error) {

                setWeatherdataFiveDay({
                    temp1: undefined,
                    temp2: undefined,
                    temp3: undefined,
                    temp4: undefined,
                    temp5: undefined,
                    city: undefined,
                    pressure1: undefined,
                    pressure2: undefined,
                    pressure3: undefined,
                    pressure4: undefined,
                    pressure5: undefined,
                    error: "Ошибка при получении данных за 5 дней. Пожалуйста, попробуйте еще раз."
                });
            }
        } else {
            setWeatherdataFiveDay({
                temp1: undefined,
                temp2: undefined,
                temp3: undefined,
                temp4: undefined,
                temp5: undefined,
                city: undefined,
                pressure1: undefined,
                pressure2: undefined,
                pressure3: undefined,
                pressure4: undefined,
                pressure5: undefined,
                error: "Введите название города"
            });
        }
    };


        return (
            <div>
                <InputForm
                    WeatherMethod={gettingWeather}
                    WeatherMethod5days={gettingWeather5days}
                />
                <Weather data = {weatherdataOneDay}
                         flag = {flag.flag1day}
                />

                <Weather5Days data = {weatherdataFiveDay}
                              flag = {flag.flag5day}
                />
            </div>
        )

}




export default Service;