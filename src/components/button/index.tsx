import React from "react";
import style from './button.module.scss';

function Button(props: {texto:string, type: "button" | "submit" | "reset" | undefined}) {
    return(
        <button type={props.type} className={style.botao}>
            {props.texto}
        </button>
    )
}

export default Button;