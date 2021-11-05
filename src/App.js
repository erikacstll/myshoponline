import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import CarWidget from "./components/CarWidget/CarWidget";
import Index from "./components/Index";


function App() {
  return (
    <><header>
      <div><NavBar></NavBar></div>

      <div class="header">
        <h1 class="header__Titulo1"> MyShopOnline </h1>
        <p>Take a look at some of latest tech finds </p>
      </div>
    </header>
    <main>
        <h1>Welcome</h1>
      </main></>
  );
}

export default App;
