import React from "react";
import styled from "styled-components";
import CardProduto from "./CardProduto";


const ContainerProdutos = styled.div `
border: 1px solid black;
`

const HeaderProdutos = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
`

const GridProdutos = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 16px;
`


export class Produtos extends React.Component {

    render(){
    return (
        <ContainerProdutos>
            <HeaderProdutos>
            <p>Quantidade de produtos: {this.props.produtos.length}</p>
           
            </HeaderProdutos>
            <GridProdutos>
                {this.props.produtos.map((produto) => {
                    return <CardProduto key={produto.id} produto={produto}
                    adicionarProdutoNoCarrinho={this.props.adicionarProdutoNoCarrinho}
                    />
                })}
            </GridProdutos>

        </ContainerProdutos>
    )
}
}

export default Produtos 