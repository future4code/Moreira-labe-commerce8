import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Filters } from '../../../../Downloads/rapidin/implementacao-filtros-ordenação/src/components/Filters';

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
  *{
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
`

const planetas = [
  {
    id: 1,
    nome: "Mercurio",
    price: 2.000
  },
  {
    id: 2,
    nome: "Venus",
    price: 1.000
  },
  {
    id: 3,
    nome: "Lua",
    price: 500
  },
  {
    id: 4,
    nome: "Marte",
    price: 1.000
  },
  {
    id: 5,
    nome: "Jupiter",
    price: 2.000
  },
  {
    id: 6,
    nome: "Saturno",
    price: 3.000
  },
  {
    id: 7,
    nome: "Urano",
    price: 4.000
  },
  {
    id: 8,
    nome: "Netuno",
    price: 5.000
  },
  {
    id: 9,
    nome: "Plutão",
    price: 6.000
  },
]

export class App extends Component {
  state = {
    query: "",
    minPrice: "",
    maxPrice: "",
    sortingParameter: "title",
    order: 1
  }
}

updateQuery = (ev) => {
  this.setState({
    query: ev.target.value
  })
}

updateMinPrice = (ev) => {
  this.setState({
    minPrice: ev.target.value
  })
}

updateMaxPrice = (ev) => {
  this.setState({
    maxPrice: ev.target.value
  })
}

updateSortingParameter = (ev) => {
  this.setState({
    sortingParameter: ev.target.value
  })
}

updateOrder = (ev) => {
  this.setState({
    order: ev.target.value
  })
}

return(
  <Filters 
    query={this.state.query}
    updateQuery={this.updateQuery}
    updateMinPrice={this.updateMinPrice}
    updateMaxPrice={this.updateMaxPrice}
    updateSortingParameter={this.updateSortingParameter}
    updateOrder={this.updateOrder}
    minPrice={this.state.minPrice}
    maxPrice={this.state.maxPrice}
    sortingParameter={this.state.sortingParameter}
    order={this.state.order}
  />
)

export default App;
