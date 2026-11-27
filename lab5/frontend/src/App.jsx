import { useState } from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = ({ username: signedInUsername }) => {
    setUsername(signedInUsername);
    setIsLogin(true);
  };

  if (isLogin) {
    return (
      <Home username={username} onLogout={() => setIsLogin(false)} />
    );
  }

  return <Login onLogin={handleLogin} />;
}

export default App;
