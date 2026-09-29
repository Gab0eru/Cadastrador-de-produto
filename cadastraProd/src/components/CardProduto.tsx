/**REPRESENTAÇÃO VISUAL DO CARD**/
import '../App.css';
function ProdutoCard({produto}){
    return(
    <li className="card">
        <div className="card__imagem">
            {produto.imagem && (<img src={URL.createObjectURL(produto.imagem)} alt={produto.nome} />)}
        </div>
        <div className='elementos'>
            <p className="card__nome">{produto.nome}</p>
            <p className="card__preco">R$ {produto.preco}</p>
            <p className="card__descricao">{produto.descricao}</p>
        </div>
    </li>
    )
}   
export default ProdutoCard