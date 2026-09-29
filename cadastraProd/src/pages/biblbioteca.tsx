/**SAIDA DE DADOS NA BIBILIOTECA**/
import ProdutoCard from "../components/CardProduto"
import Carregamento from '../components/carregamento'
import produtosIniciais from '../components/produtosIniciais.ts'

import { Link } from 'react-router';
import '../biblioteca.css';
function BibliotecaProd({produtos}){
    const todosProdutos = [
        ...produtosIniciais,
        ...produtos
    ]
    return(
        <>
        <Carregamento/>
            <section className='biblioteca'>
                <h1 className="biblioteca__titulo">Biblioteca de Produtos</h1>
                    <Link to="/" className='link'>
                        Cadastrar produtos
                    </Link>
                <p className='divisa'>Lista de produtos já cadastrados</p>
                    <div className="biblioteca__produtos">   
                        {todosProdutos.map((produto, index) =>(<ProdutoCard key={index} produto={produto} />))}
                    </div>
            </section>    
        </>
    )
}
export default BibliotecaProd