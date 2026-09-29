/**COMPILA PARA O HTML**/
import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,  Routes, Route } from 'react-router'

import Cadastro from './pages/App.tsx'
import BibliotecaProd from './pages/biblbioteca.tsx'

import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

function App(){
  const [produtos, setProdutos] = useState([]);
    return(
     <Routes>
        <Route path ="/" element ={<Cadastro produtos={produtos} setProdutos={setProdutos}/>}/>
        <Route path ="/biblioteca" element = {<BibliotecaProd produtos={produtos}/>}/>
      </Routes>
    );
}
export default App
