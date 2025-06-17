import React from 'react';
import './style.css';

const Header = () => {
    return (
        <header>
                    
            <div className='header-center'>
                <picture>
                    <img src='./assets/logoarteemflores.png' alt='logo otica'/>
                </picture>

                <nav className='menu'>

                
                 <ul>
                        <li>
                            <a href='/Produtos'>Galeria</a>
                        </li>

                        <li>
                            <a href='/SecaoSobre'>Sobre</a>
                        </li>

                        <li>
                            <a href='/Paginas'>Cadastro</a>
                        </li>
                    </ul>
                </nav> 
                
                
                <div className='search-bar'>
                <input 
                    type='text' 
                    placeholder='buscar...' 
                    onChange={(e) => console.log(e.target.value)} 
                />
                <button onClick={() => alert('Funcionalidade de busca ainda não implementada')}><img src='./assets/buscar.png' alt='buscar' /></button>
            </div>

                <link href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap" rel="stylesheet"></link>

                <div className="icons">
                    <button> <img src='./assets/favorito.png'/> </button>
                    <button>👤</button>
                    <button>🛒</button>
                </div>
            </div>
            
        </header>
    )
}

export default Header;