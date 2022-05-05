/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './App.css';
import {
  BrowserRouter as Router, 
  Link, 
  Routes, 
  Route 
} from "react-router-dom"
import profile from './img/profile.png';
import Home from './components/Home/Home';
import Todos from './components/Todos/Todos';

export default class extends React.Component{
  render(){
    return(
      <Router>
          <div id="main">
          <nav id="leftWrapper">
              <h1><Link to='/' id="pageTitle">TODOFLIX</Link></h1>
              <ul id="menu">
                  <li><Link to='/' className="item link">Inicio</Link></li>
                  <li className="item">
                      <details>
                        <summary>Categorias</summary>
                        <ul id="routes">
                          <li><Link to='todos' className="link">Todos</Link></li>
                          <li>Favoritos</li>
                          <li>Já vistos</li>
                          <li>Adicionados</li>
                        </ul>
                      </details>
                  </li>
              </ul>
          </nav>

          <div id="rightWrapper">
              <button>Adicionar filme</button>
              <input placeholder='Pesquisar' />
              <img src={profile} alt=''/>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='todos' element={<Todos />} />
        </Routes>
      </Router>
    );
  };
}