// filepath: /c:/Users/cg3027651/Documents/arteemflores/arteemflores/cliente/src/componentes/PaginaLogin.js
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function PaginaLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // marca como logado
    navigate('/usermanagement'); // redireciona
  };

  return (
    <div>
      <h2>Login</h2>
      {/* Coloque seus inputs de usuário e senha aqui */}
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default PaginaLogin;
