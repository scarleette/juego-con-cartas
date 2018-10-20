import React, { Component } from 'react';
import './carta.css';
import FlipCard from 'react-flipcard';

class Carta extends Component {
render() {
  return(
    <div className="carta" onClick={this.props.seleccionarCarta}>
      <FlipCard
      flipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
      disabled={true}>
      <div className="portada">
        <img src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-tangent-back-1_grande.png?v=1474345861" alt=""/>
      </div>
      <div className="contenido">
      <i className={`fa ${this.props.icono} fa-5x`}></i>
      </div>
    </FlipCard>
  </div>
  )}
};

export default Carta;

