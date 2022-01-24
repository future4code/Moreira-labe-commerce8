import React from "react";
import styled from "styled-components";
import CardItemCarrinho from "./CardItemCarrinho";


const ContainerCarrinho = styled.div `
padding: 8px;
border: 1px solid white;
color: white;
`

const ListaCarrinho = styled.div `
    display: grid;
    gap: 4px;
    color: white;
`

class Carrinho extends React.Component {

    calculaValorTotal = () => {
        let valorTotal = 0

        for(let produto of this.props.produtosNoCarrinho){
            valorTotal += produto.valor * produto.quantidade
        }
        return valorTotal
    }

    render(){

        return (
            <ContainerCarrinho>
                <h3>Carrinho:</h3>
                <ListaCarrinho>
                    {this.props.produtosNoCarrinho.map((produto) => {
                        return <CardItemCarrinho 
                        key={produto.id} 
                        itemCarrinho={produto}
                        removerProdutoDoCarrinho={this.props.removerProdutoDoCarrinho}
                        />
                    })}
                </ListaCarrinho>
                <p>Valor Total: R${this.calculaValorTotal()},00</p>
            </ContainerCarrinho>
        )
    }
}

export default Carrinho