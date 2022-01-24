import React from "react";
import styled from "styled-components";


const ContainerCardProduto = styled.div `
    border: 2px solid #4b2d6d;
    display: flex;
    flex-direction: column;
    border-radius: 10px;

    img{
        max-width: 100%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
`

const CardInfo = styled.div `
    display: flex;
    flex-direction: column;
    padding: 16px;
    color: white;

    p{
        margin: 4px 0;
}
`

const BotaoAdicionar = styled.button `
    align-self: center;
    margin-top: 8px;
    background-color: #4b2d6d;
    color: white;
    border-radius: 5px;

`


class CardProduto extends React.Component {
    
    render(){
        const produto = this.props.produto
    return (
        <ContainerCardProduto>
            <img src={produto.imageUrl} />
            <CardInfo>
                <p>{produto.texto}</p>
                <p>R${produto.valor},00</p>
                <BotaoAdicionar onClick={() => this.props.adicionarProdutoNoCarrinho(produto.id)}>Adicionar ao carrinho</BotaoAdicionar>
            </CardInfo>
        </ContainerCardProduto>
    )
}
}

export default CardProduto