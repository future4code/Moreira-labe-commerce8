import React from "react";
import styled from "styled-components";
import CardProduto from "./CardProduto";


const ContainerProdutos = styled.div `

`

const HeaderProdutos = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    color: white;

    span select{
        padding: 4px;
        background-color: #4b2d6d;
        color: white
    }

    select {
        padding: 4px;
        background-color: #4b2d6d;
        color: white
    }
`

const GridProdutos = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 16px;
`


export class Produtos extends React.Component {
    state = {
        sortingParameter: "title",
        order: 1
    }
    
    
    updateSortingParameter = (ev) => {
        this.setState({
            sortingParameter: ev.target.value
        })
        this.filter()
    }

    updateOrder = (ev) => {
        this.setState({
            order: ev.target.value
        })
        this.filter()
    }
    render(){
    return (
        <ContainerProdutos>
            <HeaderProdutos>
            <p>Quantidade de produtos: {this.props.produtos.length}</p>

            <span>
                    <label for="sort">Ordenação: </label>
                    <select
                        name="sort"
                        value={this.state.sortingParameter}
                        onChange={this.updateSortingParameter}
                    >
                        <option value="title">Titulo</option>
                        <option value="price">Preço</option>
                        
                    </select>
                </span>

                <select
                    name="order"
                    value={this.state.order}
                    onChange={this.updateOrder}
                >
                    <option value={1}>Crescente</option>
                    <option value={-1}>Decrescente</option>
                </select>

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