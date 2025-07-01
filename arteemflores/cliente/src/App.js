import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './componentes/Header';
import SecaoCapa from './componentes/SecaoCapa';
import Produtos from './componentes/Produtos';
import SecaoSobre from './componentes/SecaoSobre';
import Register from './componentes/Paginas/users/register';
import UserList from './componentes/Paginas/users/userList';
import UserManagement from './componentes/Paginas/users/UserManagement';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaFavoritos from './componentes/PaginaFavoritos/PaginaFavoritos';
import PaginaLogin from './componentes/PaginaLogin/PaginaLogin';
import PaginaCarrinho from './componentes/PaginaCarrinho/PaginaCarrinho';


function App() {
   
  return (
    <Router>
        <div>
            <Header />
      <SecaoCapa />
      <Produtos />
      <SecaoSobre />
      <PaginaFavoritos />
      <PaginaLogin /> 
      <PaginaCarrinho />
      

      <UserManagement />
        </div>
        <Routes>
            <Route path="/favoritos" element={<PaginaFavoritos />} />
            <Route path="/login" element={<PaginaLogin />} />
            <Route path="/carrinho" element={<PaginaCarrinho />} />
        </Routes>
    </Router>
);
}

export default App;