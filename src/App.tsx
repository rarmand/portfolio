import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
