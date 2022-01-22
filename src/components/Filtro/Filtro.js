import React from "react";
import styled from "styled-components";


const ContainerFiltro = styled.div`
border: 1px solid black;
`

class Filtro extends React.Component {
    state = {
        query: "",
        minPrice: "",
        maxPrice: "",
        sortingParameter: "title",
        order: 1
    }
    updateQuery = (ev) => {
        this.setState({
            query: ev.target.value
        })
        this.filter()
    }

    updateMinPrice = (ev) => {
        this.setState({
            minPrice: ev.target.value
        })
        this.filter()
    }

    updateMaxPrice = (ev) => {
        this.setState({
            maxPrice: ev.target.value
        })
        this.filter()
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
    filter = () =>{
        this.props.filtrar(
            this.state.query,
            this.state.minPrice,
            this.state.maxPrice,
            this.state.sortingParameter,
            this.state.order
        )  
    }
    render() {

        return (
            <ContainerFiltro>
                <input
                    placeholder="Pesquisa"
                    value={this.state.query}
                    onChange={this.updateQuery}
                />

                <input
                    type="number"
                    placeholder="Preço mínimo"
                    value={this.state.minPrice}
                    onChange={this.updateMinPrice}
                />

                <input
                    type="number"
                    placeholder="Preço máximo"
                    value={this.state.maxPrice}
                    onChange={this.updateMaxPrice}
                />

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

            </ContainerFiltro>
        )
    }
}

export default Filtro