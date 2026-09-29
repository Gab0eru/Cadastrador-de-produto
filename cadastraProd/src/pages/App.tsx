import { useState } from 'react';
import { Link } from 'react-router';

import ProdutoCard from '../components/CardProduto';
import Carregamento from '../components/carregamento';

import Produto from '../models/produtos';

import '../App.css';

function Cadastro({produtos, setProdutos}) {
  const [imagem, setImagem] = useState(null);
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');

  const criaProd = (e) => {
    e.preventDefault();

    const produto = new Produto(
      imagem,
      nome,
      preco,
      descricao
    );
    setProdutos([...produtos, produto]);
    setImagem(null);
    setNome('');
    setPreco('');
    setDescricao('');
  };      

  return(
    <>
      <Carregamento/>
      <h1>Cadatrador de produtos</h1>
      <Link to="/biblioteca" className='link'>
        Ver biblioteca
      </Link>
      <p>Use o template abaixo para criar o seu prduto:</p>
      <div className='pose'>
        <div className='template'>
          <form onSubmit={criaProd}>
            <label className='template__imagem'>
              Escolher imagem:
              <input type='file' accept='image/*' placeholder='Imagem:' onChange={(e) => setImagem(e.target.files[0])}/>
            </label>
            <input className='template__nome' required type='text' placeholder='Nome:' value={nome} onChange={(e) => setNome(e.target.value)}/>
            <input className='template__preco' required type='number' placeholder='Preço:' value={preco} onChange={(e) => setPreco(e.target.value)}/>
            <input className='template__descricao' required type='text' placeholder='Descrição do produto:' value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
            <div className='template__botao'>
              <button type='submit' className='template__botao'>Cadastrar</button>
            </div>
          </form>
        </div>
        </div>
      <section id='lista'>
        <ul>
          {produtos.map((produto, index) =>(<ProdutoCard key={index} produto={produto} />))}
        </ul>
      </section>
    </>
  );
}
export default Cadastro
