import styles from "./Info.module.css"

function Info() {
    return (
        <div className={styles.info}>
            <h1>Сервис данных о погоде</h1>
            <h2>Узнайте погоду в вашем городе</h2>
        </div>
    );
}
export default Info;