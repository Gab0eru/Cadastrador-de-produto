import { useEffect } from "react";
import { useState } from "react";
import '../App.css';
function Carregamento() {
  const [carregando, setCarregando] = useState (true);

  useEffect(() => {
    const timer = setTimeout(() =>{
      setCarregando(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if(!carregando){
    return null;
  }

  return(
    <div className="loading">
        <h1>Carregando...</h1>
    </div>
  );
}
export default Carregamento