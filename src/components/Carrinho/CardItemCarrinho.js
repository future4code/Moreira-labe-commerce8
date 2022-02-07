import React from "react";
import styled from "styled-components";

const CardItemCart = styled.div `
    display: grid;
    grid-auto-flow: column;
    gap: 8px;
    align-items: center;
    color: white;
    margin: 16px 0;

    p{
        margin: 0;
        color: white;
    }
`

const BotaoRemover = styled.button `
    align-self: center;
    margin-top: 8px;
    background-color: #4b2d6d;
    color: white;
    border-radius: 5px;
    `


class CardItemCarrinho extends React.Component {
    
    render(){
    return (
        <CardItemCart>
            <p>{this.props.itemCarrinho.quantidade}x</p>
            <p>{this.props.itemCarrinho.texto}</p>
            <BotaoRemover onClick={() => this.props.removerProdutoDoCarrinho(this.props.itemCarrinho.id)}>Remover</BotaoRemover>
        </CardItemCart>
    )
}
}

export default CardItemCarrinho