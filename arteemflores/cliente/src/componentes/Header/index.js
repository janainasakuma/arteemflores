import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';


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
                            <a href='/Sobre'>Sobre</a>
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
                <button>
                    <Link to="/PaginaFavoritos">
                        <img src='./assets/favorito.png' alt="Favoritos" />
                    </Link>
                </button>
                <button>
                    <Link to="/PaginaLogin">
                        <img src='./assets/login.png' alt="Login" />
                    </Link>
                </button>
                <button>
                    <Link to="/PaginaCarrinho">
                        <img src='./assets/carrinho.png' alt="Carrinho" />
                    </Link>
                </button>
            </div>
            </div>
            
        </header>
    )
}

export default Header;