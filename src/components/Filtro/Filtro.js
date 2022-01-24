import React from "react";
import styled from "styled-components";


const ContainerFiltro = styled.div`
border: 1px solid white;
display: flex;
flex-direction: column;
padding: 8px;

input{
    margin: 4px 0
}

h3 {
    color: white;
}
`

class Filtro extends React.Component {
    state = {
        query: "",
        minPrice: "",
        maxPrice: "",
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

                <h3>Filtros:</h3>
                <input
                    placeholder="Pesquisa por nome"
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

            </ContainerFiltro>
        )
    }
}

export default Filtro