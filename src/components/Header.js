import React, { Component } from "react";
import './header.css';



 class Header extends Component {
    render() {
			return (
				<header>
					<div className="titulo">Juego de Cartas</div>
					<button className="boton-reiniciar" onClick = {this.props.resetearPartida}>Reiniciar partida</button>
					<div className="titulo"> Intentos : {this.props.numeroDeIntentos}</div>
				</header>
		)}
};

export default Header;

