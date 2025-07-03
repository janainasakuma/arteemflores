import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [usuarioLogado, setUsuarioLogado] = useState(false);

  const login = () => setUsuarioLogado(true);
  const logout = () => setUsuarioLogado(false);

  return (
    <AuthContext.Provider value={{ usuarioLogado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
