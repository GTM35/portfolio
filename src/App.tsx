import { GlobalStyle } from "./assets/styles/global";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="container">
      <GlobalStyle />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
