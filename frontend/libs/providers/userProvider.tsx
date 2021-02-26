import React, { createContext, useState } from 'react';
import { SIMCheckResponseType } from '../types/simCheckResponse';
type UserContextType = {
  isAuthenticated: boolean;
  response?: SIMCheckResponseType;
  setResponse: React.Dispatch<
    React.SetStateAction<SIMCheckResponseType | undefined>
  >;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};
type UserProviderProps = {
  children: React.ReactNode;
};
export const UserContext = createContext({} as UserContextType);

const UserProvider = ({ children }: UserProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [response, setResponse] = useState<SIMCheckResponseType>();
  return (
    <UserContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, response, setResponse }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
