import React from 'react';
import './App.css';
import Carrinho from './components/Carrinho/Carrinho';
import Produtos from './components/Produtos/Produtos';
import styled from 'styled-components';
import Filtro from './components/Filtro/Filtro';

const ContainerApp = styled.div `
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 20px;
  padding: 16px;
  height: 50vw;
`



const produtos = [{
  texto: "Viagem Ida e Volta Para Mercúrio",
  valor: 200000,
  id: 1,
  imageUrl: "http://s2.glbimg.com/PeU71yjuQ7UAs1xBMi3O3HMX9FA=/s.glbimg.com/jo/g1/f/original/2015/07/16/.jpg_2"
},
{
  texto: "Viagem Ida e Volta Para Vênus",
  valor: 100000,
  id: 2,
  imageUrl: "https://s2.glbimg.com/RutUFJYW3TFTcCx6Gp3E5f-vqm8=/e.glbimg.com/og/ed/f/original/2020/10/02/download.jpeg"
},
{
  texto: "Viagem Ida e Volta Para Lua",
  valor: 50000,
  id: 3,
  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzav534l1eYUZQh_YSzhkj8stTp6YKIqnj4NJBtD_T2qqOzdMIboDWEhzfeV-sgYig2CU&usqp=CAU"
},
{
  texto: "Viagem Ida e Volta Para Marte",
  valor: 100000,
  id: 4,
  imageUrl: "https://s1.static.brasilescola.uol.com.br/be/2021/11/planeta-marte.jpg"
},
{
  texto: "Viagem Ida e Volta Para Jupiter",
  valor: 200000,
  id: 5,
  imageUrl: "https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2021/12/jupter-1280x720.jpg"
},
{
  texto: "Viagem Ida e Volta Para Saturno",
  valor: 300000,
  id: 6,
  imageUrl: "https://exame.com/wp-content/uploads/2020/11/saturno.jpg"
},
{
  texto: "Viagem Ida e Volta Para Urano",
  valor: 400000,
  id: 7,
  imageUrl: "https://img.olhardigital.com.br/wp-content/uploads/2021/10/planeta-urano-1000x450.jpg"
},
{
  texto: "Viagem Ida e Volta Para Netuno",
  valor: 500000,
  id: 8,
  imageUrl: "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/3fbe97289a4a39391468549c02ef37b9.jpg"
},
{
  texto: "Viagem Ida e Volta Para Plutão",
  valor: 700000,
  id: 9,
  imageUrl: "https://conteudo.imguol.com.br/c/noticias/04/2021/12/14/plutao-1639493431655_v2_615x300.jpg"
}
]


class App extends React.Component {
  
  state= {
    produtosNoCarrinho: []
  }
  
  adicionarProdutoNoCarrinho = (idProduto) => {
    const produtoNoCarrinho = this.state.produtosNoCarrinho.find(produto => idProduto === produto.id)
      if(produtoNoCarrinho) {
        const novaListaCarrinho = this.state.produtosNoCarrinho.map(produto => {
          if(idProduto === produto.id) {
            return {
              ...produto,
              quantidade: produto.quantidade + 1
          } 
        }
        return produto
      })
    this.setState({produtosNoCarrinho: novaListaCarrinho})
    } else {
      const produtoParaAdicionar = produtos.find(produto => idProduto === produto.id)

      const novaListaCarrinho = [...this.state.produtosNoCarrinho, {...produtoParaAdicionar, quantidade: 1}]

      this.setState({produtosNoCarrinho: novaListaCarrinho})
    }
  }

  removerProdutoDoCarrinho = (idProduto) => {
    const novaListaCarrinho = this.state.produtosNoCarrinho.map((produto) => {
      if(idProduto === produto.id) {
        return {
          ...produto,
          quantidade: produto.quantidade - 1
        }
      }
      return produto
    }).filter((produto) => produto.quantidade > 0)

    this.setState({produtosNoCarrinho: novaListaCarrinho})
  }

  
  render(){
    return (
      <ContainerApp>
      <Filtro />
      <Produtos produtos={produtos}
      adicionarProdutoNoCarrinho={this.adicionarProdutoNoCarrinho}
      />
      <Carrinho
        produtosNoCarrinho={this.state.produtosNoCarrinho}
        removerProdutoDoCarrinho={this.removerProdutoDoCarrinho}
      />
    </ContainerApp>
    );
  }
}

export default App;
