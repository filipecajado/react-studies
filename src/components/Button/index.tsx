import React, { PropsWithChildren } from "react";
import style from './Button.module.scss';
class Button extends React.Component<PropsWithChildren> {
    render(){
        const estaAtivo = true;
        const color = 'red';
        const styles ={
            backgroundColor: estaAtivo ? 'blue' : 'red',
            color: color
            }
        return(
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;