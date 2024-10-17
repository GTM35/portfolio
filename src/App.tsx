import { GlobalStyle } from "./assets/styles/global";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="container">
      <GlobalStyle />
      <Header />
      <Hero />
    </div>
  );
}

export default App;
