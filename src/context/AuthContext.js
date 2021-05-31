import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContexProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContexProvider;
