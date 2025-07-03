import React from "react";
import './style.css';



const Produtos = () => {
    return (
        <section id="produtos">
            <link href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap" rel="stylesheet"></link>
            <div className="secao-produtos center">
            <h2 className="titulos">Galeria</h2>
            <div className="plano-img">
                
                <div className="card-plano">
                    <h3>Lilás na  janela - Mary Cassatt</h3>
                    <picture>
                        <img src="./assets/lilas.jpg" alt="Plano Premium"></img>
                    </picture>
                    <p>R$ 550,00</p>
                    <button className="btn-comprar">Comprar</button>
                </div>

                <div className="card-plano">
                    <h3>Irises  - Vincent van Gogh</h3>
                    <picture>
                        <img src="./assets/lirios.jpg" alt="Plano Anual"></img>
                    </picture>
                    <p>R$ 700,00</p>
                    <button className="btn-comprar">Comprar</button>
                </div>

                <div className="card-plano">
                    <h3>Ramo de Girassóis - Claude Monet</h3>
                    <picture>
                        <img src="./assets/girassois.jpg" alt="Plano 6 meses"></img>
                    </picture>
                    <p>R$ 750,00</p>
                    <button className="btn-comprar">Comprar</button>
                </div>

                <div className="card-plano">
                    <h3>Vaso de peônias - Édouard Manet</h3>
                    <picture>
                        <img src="./assets/peonias.jpg" alt="Plano Diária"></img>
                    </picture>
                    <p>R$ 650,00</p>
                    <button className="btn-comprar">Comprar</button>
                    </div>

                    <div className="card-plano">
                    <h3>Vaso com flores - Ambrosius Bosschaert </h3>
                    <picture>
                        <img src="./assets/vasodeflores.jpg" alt="Plano 6 meses"></img>
                    </picture>
                    <p>R$ 550,00</p>
                    <button className="btn-comprar">Comprar</button>
                </div>

                <div className="card-plano">
                    <h3>Jarra de rosas - Bartolomeo Bimbi</h3>
                    <picture>
                        <img src="./assets/jarraderosas.jpg" alt="Plano Diária"></img>
                    </picture>
                    <p>R$ 750,00</p>
                    <button className="btn-comprar">Comprar</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Produtos;