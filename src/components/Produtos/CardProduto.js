import React from "react";
import styled from "styled-components";

const ContainerCardProduto = styled.div `
    border: 1px solid black;
    display: flex;
    flex-direction: column;

    img{
        max-width: 100%;
    }
`

const CardInfo = styled.div `
    display: flex;
    flex-direction: column;
    padding: 16px;

    p{
        margin: 4px 0;
}
`

const BotaoAdicionar = styled.button `
    align-self: center;
    margin-top: 8px;
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