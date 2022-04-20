import React, { createContext } from "react";

export const AuthContext = createContext({});
type Props = {
  children: React.ReactNode;
};
export const AuthProvider = ({ children }: Props) => {
  const teste = "teste";
  return <AuthContext.Provider value={teste}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
