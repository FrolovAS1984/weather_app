
import styles from "./Weather.module.css"
import temp from "../../img/temp.svg"
import bar from "../../img/bar.svg"
import humidity from "../../img/humidity.svg"
function Weather({data, flag}) {
    return (
        <div>
            {data.city && flag &&
                <div className={styles.weather__container}>
                    <div className={styles.geo}>Местоположение: {data.city}, {data.country}</div>
                    <div className={styles.temp}>
                        <img src={temp} width={"50px"} height={"50px"} />
                        <div className={styles.temp__info}>{data.temp}°, ощущается как: {data.feels_like}°</div>
                    </div>
                    <div className={styles.bar}>
                        <img src={bar} width={"50px"} height={"50px"} />
                        <div className={styles.bar__info}>{data.pressure} мм рт. ст</div>
                    </div>
                    <div className={styles.humidity}>
                        <img src={humidity} width={"50px"} height={"50px"} />
                        <div className={styles.humidity__info}>{data.humidity} %</div>
                    </div>

                </div>
            }
            <div className={styles.error}>{data.error}</div>
        </div>
    )
}
export default Weather;