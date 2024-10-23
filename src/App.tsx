import { GlobalStyle } from "./assets/styles/global";
import About from "./Components/About";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="container">
      <GlobalStyle />
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
