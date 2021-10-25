import React from "react";
import { Todo } from "./Components/Todo";
import "./App.css";
function App() {
  const [showCounter, setShowCounter] = React.useState(false);
  return (
    <div className="App">
      <Todo />
    </div>
  );
}
export default App;

// React.useEffect
