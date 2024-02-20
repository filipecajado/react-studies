import React, { PropsWithChildren } from "react";
import style from './Button.module.scss';

interface ButtonProps extends PropsWithChildren {
    type?: "button" | "submit" | "reset" | undefined;
  }
class Button extends React.Component<ButtonProps> {
    render(){
        const { type = "button"} = this.props;
        const estaAtivo = true;
        const color = 'red';
        const styles ={
            backgroundColor: estaAtivo ? 'blue' : 'red',
            color: color
            }
        return(
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;