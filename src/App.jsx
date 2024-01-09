import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";

function App() {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <>
      <Navbar />
      {
        !isLogin && <Welcome />
      }
      {
        isLogin && <Counter />
      }
    </>
  );
}

export default App;
