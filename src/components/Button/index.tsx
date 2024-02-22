import React, { PropsWithChildren } from "react";
import style from './Button.module.scss';

interface ButtonProps extends PropsWithChildren {
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void,
    children?: React.ReactNode
  }

function Button({onClick, type, children} : ButtonProps){
    return(
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
    )
}

export default Button;