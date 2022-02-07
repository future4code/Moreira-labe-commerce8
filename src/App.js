import React from 'react';
import Carrinho from './components/Carrinho/Carrinho';
import Produtos from './components/Produtos/Produtos';
import styled from 'styled-components';
import Filtro from './components/Filtro/Filtro';

const ContainerApp = styled.div`
max-width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr 60px;
  gap: 20px;
  padding: 16px;
  background-color: black;

  @media(max-width: 800px) {
      width: 100vw;
      height: fit-content;
      display: flex;
      flex-direction: column;
      
  }
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap:wrap;
  *{
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media(max-width: 800px) {
      max-width: 100vw;
      height: fit-content;
  }
`

const Header = styled.div `
height: 60px;
grid-column: 1/ -1;
background-color: #4b2d6d;
color: white;
display: flex;
flex-direction: row;
align-items: center;
padding: 0 10px;
font-family: 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif;
border: 1px solid white;

img{
height: 100%;
}

@media(max-width: 800px) {
      max-width: 100%;
      height: fit-content;

    
      
img{
    width: 15%;
}

      }
`

const Footer = styled.div `
height: 60px;
grid-column: 1/ -1;
background-color: #4b2d6d;
color: white;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 0 20px;
font-family: 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif;
border: 1px solid white;

div{
height: 100%;
display: flex;
flex-direction: row;
align-items: center;
}

div img{
  height: 60%;
  margin: 0 6px;
}

@media(max-width: 800px) {
      max-width: 100vw;
      height: fit-content;
      
div{
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
}

div img{
  height: 60%;
  width: 25%;
  margin: 0 6px;
}
  }
`


const ContainerCentral = styled.div `
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 20px;

  @media(max-width: 800px) {
      max-width: 100vw;
      height: fit-content;
      display: flex;
      flex-direction: column;
    }

`



const produtos = [{
    texto: "Viagem Ida e Volta Para Mercúrio",
    valor: 200000,
    id: 1,
    imageUrl: "https://i.postimg.cc/nCYHxwYG/mercurio.jpg"
},
{
    texto: "Viagem Ida e Volta Para Vênus",
    valor: 100000,
    id: 2,
    imageUrl: "https://i.postimg.cc/MvD8Nfqs/venus.jpg"
},
{
    texto: "Viagem Ida e Volta Para Lua",
    valor: 50000,
    id: 3,
    imageUrl: "https://i.postimg.cc/Mv8Wh8RG/lua.jpg"
},
{
    texto: "Viagem Ida e Volta Para Marte",
    valor: 100000,
    id: 4,
    imageUrl: "https://i.postimg.cc/RWSvZQg5/marte.jpg"
},
{
    texto: "Viagem Ida e Volta Para Jupiter",
    valor: 200000,
    id: 5,
    imageUrl: "https://i.postimg.cc/V5tfGNJT/jupiter.jpg"
},
{
    texto: "Viagem Ida e Volta Para Saturno",
    valor: 300000,
    id: 6,
    imageUrl: "https://i.postimg.cc/QFdr3NMj/saturno.jpg"
},
{
    texto: "Viagem Ida e Volta Para Urano",
    valor: 400000,
    id: 7,
    imageUrl: "https://i.postimg.cc/XX9WKDh6/urano.jpg"
},
{
    texto: "Viagem Ida e Volta Para Netuno",
    valor: 500000,
    id: 8,
    imageUrl: "https://i.postimg.cc/87ZNJJYF/netuno.jpg"
},
{
    texto: "Viagem Ida e Volta Para Plutão",
    valor: 700000,
    id: 9,
    imageUrl: "https://i.postimg.cc/WFkvH91r/plutao.jpg"
}
]
class App extends React.Component {
    state = {
        produtosNoCarrinho: [],
        produtosFiltrados: produtos
    }
    adicionarProdutoNoCarrinho = (idProduto) => {
        const produtoNoCarrinho = this.state.produtosNoCarrinho.find(produto => idProduto === produto.id)
        if (produtoNoCarrinho) {
            const novaListaCarrinho = this.state.produtosNoCarrinho.map(produto => {
                if (idProduto === produto.id) {
                    return {
                        ...produto,
                        quantidade: produto.quantidade + 1
                    }
                }
                return produto
            })
            this.setState({ produtosNoCarrinho: novaListaCarrinho })
        } else {
            const produtoParaAdicionar = produtos.find(produto => idProduto === produto.id)

            const novaListaCarrinho = [...this.state.produtosNoCarrinho, { ...produtoParaAdicionar, quantidade: 1 }]
            this.setState({ produtosNoCarrinho: novaListaCarrinho })
        }
    }

    removerProdutoDoCarrinho = (idProduto) => {
        const novaListaCarrinho = this.state.produtosNoCarrinho.map((produto) => {
            if (idProduto === produto.id) {
                return {
                    ...produto,
                    quantidade: produto.quantidade - 1
                }
            }
            return produto
        }).filter((produto) => produto.quantidade > 0)

        this.setState({ produtosNoCarrinho: novaListaCarrinho })
    }
    componentDidMount(){
        this.filtrar()
    }
    filtrar = (query,
        minPrice,
        maxPrice,
        sortingParameter,
        order
    ) => {

        const novoListaFitrada = produtos
            .filter(produto => {
                {
                    const textoMaiusculo = produto.texto.toLocaleUpperCase()
                    return (
                        (!query || textoMaiusculo.includes(query.toLocaleUpperCase()))
                        &&
                        (!Number(minPrice) || produto.valor >= Number(minPrice))
                        &&
                        (!Number(minPrice) || produto.valor <= Number(maxPrice))
                    )
                }
            }).sort((produtoA, produtoB) => {
                if (sortingParameter === "title") {
                    return (produtoA.texto > produtoB.texto ?
                        1 : -1) * order
                }
                return (produtoA.valor - produtoB.valor) * order;
            })
        this.setState({
            produtosFiltrados: novoListaFitrada
        })
    }
    render() {
        return <ContainerApp>

            <Header>
            <h1>ASTROTRAVELS</h1>
            <img src="https://cdn-icons.flaticon.com/png/512/5113/premium/5113355.png?token=exp=1643038322~hmac=80b4a173fe5dbb951a918386e9865619" alt="" />
            </Header>
            
            <ContainerCentral>
            <Filtro
                filtrar={this.filtrar}
            />
            <Produtos
                produtos={this.state.produtosFiltrados}
                adicionarProdutoNoCarrinho={this.adicionarProdutoNoCarrinho}
            />
            <Carrinho
                produtosNoCarrinho={this.state.produtosNoCarrinho}
                removerProdutoDoCarrinho={this.removerProdutoDoCarrinho}
            />
            </ContainerCentral>

            <Footer>
              <p>Astrotravelscompany Copyright ©  2010-2022 Astrotravels Company S.L. Todos os direitos reservados.</p>
              <div>
              <img src="https://cdn-icons.flaticon.com/png/512/4494/premium/4494475.png?token=exp=1643041767~hmac=c198037a3e017a5107a5bf36f5461002" alt="facebook" />
              <img src="https://cdn-icons.flaticon.com/png/512/4494/premium/4494488.png?token=exp=1643041818~hmac=c67ffb9c34d06b95c10a0d4e1e0349c0" alt="instagram" />
              <img src="https://cdn-icons.flaticon.com/png/512/4494/premium/4494477.png?token=exp=1643041855~hmac=4310d2981733f8a3338046e58b86bbdd" alt="twitter" />
              </div>
        </Footer>
        </ContainerApp>
    }
}
export default App