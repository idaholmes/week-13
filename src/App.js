import "./App.css";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginForm />
    </div>
  );
}

export default App;
