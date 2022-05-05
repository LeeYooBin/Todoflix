import React from "react";
import './HeaderStyle.css';
import profile from '../../img/profile.png'

export default function Header(){
    return(
    <div id="main">
        <nav id="leftWrapper">
            <h1 id="pageTitle">TODOFLIX</h1>
            <ul id="menu">
                <li className="item">Inicio</li>
                <li className="item">
                    <select>
                        <option selected>Categorias</option>
                        <option>Todos</option>
                        <option>Favoritos</option>
                        <option>Já vistos</option>
                        <option>Adicionados</option>
                    </select>
                </li>
            </ul>
        </nav>

        <div id="rightWrapper">
            <button>Adicionar filme</button>
            <input placeholder='Pesquisar' />
            <img src={profile}/>
        </div>
    </div>
    );
}
