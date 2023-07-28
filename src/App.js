import logo from "./logo.png";
import "./App.css";
import { app, addCities, getCities } from "./firebase";

console.log(app);
addCities()
function App() {
 let data = getCities()
  console.log( data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      </header>
    </div>
  );
}

export default App;
