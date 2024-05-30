import styles from "./Weather5Days.module.css"


function Weather5Days({data, flag}) {
    return (
        <div>
            {data.city && flag &&
                <div className={styles.weather5day__container} >
                    <div className={styles.weather_blocks}>
                        <div className={styles.weather_block}>
                            <p className={styles.day}>День 1:</p>
                            <p>{data.temp1}°</p>
                            <p>{data.pressure1} мм рт.ст</p>
                        </div>
                        <div className={styles.weather_block}>
                            <p className={styles.day}>День 2:</p>
                            <p>{data.temp2}°</p>
                            <p>{data.pressure2} мм рт.ст</p>
                        </div>
                        <div className={styles.weather_block}>
                            <p className={styles.day}>День 3:</p>
                            <p>{data.temp3}°</p>
                            <p>{data.pressure3} мм рт.ст</p>
                        </div>
                        <div className={styles.weather_block}>
                            <p className={styles.day}>День 4:</p>
                            <p>{data.temp4}°</p>
                            <p>{data.pressure4} мм рт.ст</p>
                        </div>
                        <div className={styles.weather_block}>
                            <p className={styles.day}>День 5:</p>
                            <p>{data.temp5}°</p>
                            <p>{data.pressure5} мм рт.ст</p>
                        </div>
                    </div>

                </div>
            }
            <p className={styles.error}>{data.error}</p>
        </div>
    )
}
export default Weather5Days;