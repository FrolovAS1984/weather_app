
import { useState } from 'react';
import styles from "./InputForm.module.css";

function InputForm({WeatherMethod, WeatherMethod5days}) {

    const [city, setCity] = useState("");

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        WeatherMethod(city);

    };

    const handleSubmit5days = (e) => {
        e.preventDefault();
        WeatherMethod(city);
        WeatherMethod5days(city);
    };

    return (
        <div className={styles.form}>
            <form className={styles.form__container}>
                <input className={styles.input} type="text" name="city" placeholder="Введите город" value={city} onChange={handleChange}/>
                <button className={styles.btn} onClick={handleSubmit}>Получить погоду на день</button>
                <button className={styles.btn} onClick={handleSubmit5days}>Получить погоду на 5 дней</button>
            </form>
        </div>
    );
}

export default InputForm;