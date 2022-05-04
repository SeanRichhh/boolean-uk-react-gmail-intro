import "./styles/app.css";

import Header from "./header.js";
import Nav from "./nav-bar";
import Main from "./main.js";

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
