import React from 'react';
import './style.css'

const SecaoSobre = () => {
    return (
    <section id='sobre'>
        <link href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap" rel="stylesheet"></link>
            
        <div className='sobre center'>
            <h2>SOBRE NÓS</h2>
                <p>Onde flores e arte se entrelaçam
Acreditamos que cada flor carrega um significado especial e que a arte tem o poder de transformar emoções em expressão. Nosso objetivo é conectar esses dois mundos, explorando a simbologia das flores e como elas inspiram diferentes formas de arte.
Aqui, você encontrará histórias, curiosidades e interpretações artísticas baseadas na linguagem das flores. Seja para apreciar a beleza da natureza, encontrar inspiração ou aprofundar-se na relação entre arte e sentimento, este espaço foi criado para você!
Floresça com a gente!</p>
        </div>

        <div class="redes-sociais">
      <a href="https://www.youtube.com/"><img src='./assets/youtube.png'></img><i class="fab fa-youtube"></i> @arteemflores</a>
      <a href="https://x.com/"><img src='./assets/twitter.png'></img><i class="fab fa-twitter"></i> @arteemflores</a>
      <a href="https://www.tumblr.com/"><img src='./assets/tumblr.png'></img><i class="fab fa-tumblr"></i> @arteemflores</a>
      <a href="https://br.pinterest.com/"><img src='./assets/pinterest.png'></img><i class="fab fa-pinterest"></i> @arteemfloresoficial</a>
    </div>
    </section>
    )
}

export default SecaoSobre;