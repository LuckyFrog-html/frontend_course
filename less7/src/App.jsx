import { useState } from "react"
import Button from "./componets/Button/Button"
import "./app.css"

const App = () => {
  const [count, setCount] = useState(5);
  const [str, setStr] = useState("abs");

  return <div className="container">
    <p className="text">Наша переменная: {count % 2 === 1 ? count * 1000 : count}</p>
    <p className="text">Наша переменная: {str}</p>
    <Button text="боба инкремент" onClick={() => setCount(count + 1)} />
    <Button text="боба декремент" onClick={() => setCount(Math.max(0, count - 1))} />
    <Button text="bobus" onClick={() => setStr(str + "a")} />
  </div>
}

export default App