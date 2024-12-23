import { createContext, useState } from "react";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ signedIn, setSignedIn, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
