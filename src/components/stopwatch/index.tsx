import Button from "../button";
import Clock from "./clock";
import style from './stopwatch.module.scss';


export default function Stopwatch() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card para inciar o cronometro</p>
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
                <Button type="button" texto="Começar" />
        </div>
    )
}