import { createContext, useState, useEffect } from "react";
import { userObserver } from "../auth/firebase";

export const AuthContext = createContext();

const AuthContexProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  console.log("currentuser", currentUser);

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContexProvider;
