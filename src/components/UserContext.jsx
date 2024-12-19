import { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [signedIn, setSignedIn] = useState(false);
  const [user, SetUser] = useState("tickle122");
  return (
    <UserContext.Provider value={{ signedIn, setSignedIn, user }}>
      {children}
    </UserContext.Provider>
  );
};
