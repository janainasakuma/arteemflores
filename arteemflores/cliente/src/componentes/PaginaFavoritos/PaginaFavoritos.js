import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function PaginaFavoritos() {
    return (
        <div>
            <h1>Favoritos</h1>
            <p>Esta é a página de favoritos.</p>
        </div>
    );
}

export default PaginaFavoritos;