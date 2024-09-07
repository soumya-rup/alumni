import { useState } from "react";
import "./App.css";
import Home from "./components/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Alumni Profiles</h1>
        <Home />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
