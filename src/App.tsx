import "./App.css";
import About from "./components/About";
import Header from "./components/Header";

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main>
        <About />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
