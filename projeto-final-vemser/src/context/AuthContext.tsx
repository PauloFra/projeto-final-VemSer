import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};
export const AuthContext = createContext({});

export const AuthProvider = ({ children }: Props) => {
  
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ setIsLogged, isLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
