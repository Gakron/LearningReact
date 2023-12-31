import React, { Component } from 'react';



class Card extends Component {
    render() {

        return (
            <div className="col">
                <div className="card" style={{ width: "18rem", textAlign: "center", marginBottom: "30px" }}>
                    <button className="btn btn-primary" onClick={() => this.props.onIncrement(this.props.card)}>
                        Aggiungi <span className="badge text-bg-light">{this.props.card.quantità}</span>
                    </button>

                    <img src={this.props.card.immagine} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.nome} Roll </h5>
                        <p className="card-text">€{this.props.card.prezzo}</p>
                        <button className="btn btn-outline-danger" onClick={() => this.props.onDelete(this.props.card.id)}>Elimina dal menù</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;