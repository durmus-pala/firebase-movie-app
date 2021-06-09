import React from "react";
import AppRouter from "./router/Router";
import AuthContextProvider from "./context/AuthContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
}

export default App;
