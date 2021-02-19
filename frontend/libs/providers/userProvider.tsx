import React, { createContext, useState } from 'react';
type UserContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};
type UserProviderProps = {
  children: React.ReactNode;
};
export const UserContext = createContext({} as UserContextType);

const UserProvider = ({ children }: UserProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
    <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
