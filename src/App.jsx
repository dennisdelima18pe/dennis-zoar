import { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const irParaProximaTela = () => {
    navigate('/nossa-historia');
  };
  return (
    <div id='tela-inicial'>
      <button id="botao-surpresa" onClick={irParaProximaTela}>
        Surpresa
      </button>
    </div>
  )
}

export default App
