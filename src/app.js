import "./styles/app.css";


import Header from "./Header/header.js";
import Nav from "./Nav/nav-bar";
import Main from "./Main/main"

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Main />
    </div>
  );
}

export default App;
