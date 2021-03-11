import React from 'react'
import './header.css';
import { FaInfoCircle,FaCog,FaUser } from 'react-icons/fa';


function Title() {
  return (
    

    //TODO DEIXAR O CSS DO HEADER RESPONSIVO AO TAMANHO DA TELA

    <div className="header">
      
      <div className="header-right">
            <button style={{color: "#124eb4" }}> <FaInfoCircle/></button>
            <button style={{color: "#e2e2e2" }}> <FaCog/></button>
            <button style={{color: "#f4b888" }}>  <FaUser/></button>

      </div>

      <label className="header-label">Olá, Guilherme Pimenta</label>

    </div>
    
  )
}

export default Title;