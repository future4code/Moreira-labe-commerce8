import React from "react";
import styled from "styled-components";

const CardItemCart = styled.div `
    display: grid;
    grid-auto-flow: column;
    gap: 8px;
    align-items: center;

    p{
        margin: 0;
    }
`


class CardItemCarrinho extends React.Component {
    
    render(){
    return (
        <CardItemCart>
            <p>{this.props.itemCarrinho.quantidade}x</p>
            <p>{this.props.itemCarrinho.texto}</p>
            <button onClick={() => this.props.removerProdutoDoCarrinho(this.props.itemCarrinho.id)}>Remover</button>
        </CardItemCart>
    )
}
}

export default CardItemCarrinho