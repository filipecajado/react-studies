import React from "react";

class Button extends React.Component {
    render(){
        const estaAtivo = true;
        const color = 'red';
        const styles ={
            backgroundColor: estaAtivo ? 'blue' : 'red',
            color: color
            }
        return(
            <button style={styles}>
                Botão
            </button>
        )
    }
}

export default Button;