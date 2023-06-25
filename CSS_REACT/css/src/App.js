import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from "react"
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState("Lucas")
  const redTitle = true

  return (
    <div className="App">
      <h1>React CSS</h1>
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>Esse elemento foi estilizado de forma inline</p>
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS Dinâmico</h2>
      <h2 style={name === "Lucas" ? ({color: "green", backgroundColor: "#000"}) : null}>Teste Nome</h2>
      <h2 className={redTitle ? "red-title": "title"}>Este título vai ter classe dinâmica</h2>
      <Title />
    </div>
  );
}

export default App;
