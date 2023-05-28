import { useState } from "react"
import './App.css';
import Button from "./Components/Button"

function App() {

  const [theme, setTheme] = useState("light")


  return (
    <div className="App">

      <h2>Theme is {theme}</h2>
      <div>Click Me</div>

      <Button colorScheme={"red"} variant={"ghost"} onClick={() => setTheme(theme==="light"?"dark":"light")} >Click Me</Button>

    </div>
  );
}

export default App;
