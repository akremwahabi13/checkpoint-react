import "./App.css";
import MyForm from "./Components/MyForm";

function App() {
  return (
    <div className="App">
      <h1>🚀 🚀 My first React app 🚀 🚀</h1>
      <h2>Contact Me !!</h2>
      <img src={require("./assets/akrem.jpg")} />
      <div className="myForm">
        <MyForm />
      </div>
    </div>
  );
}

export default App;
