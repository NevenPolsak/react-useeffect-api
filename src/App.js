import React, { useState } from "react";
import './App.css';
import Counter from "./Counter";
import TodoList from "./TodoList";

function App() {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <div className="App">
      <h1> Our App</h1>
      <TodoList />
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Hide Counter" : "Show Counter"}
      </button>
      {showCounter && <Counter />}
    </div>
  );
}

export default App;
