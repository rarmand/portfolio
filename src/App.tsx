import "./App.css";
import About from "./components/About";
import Header from "./components/Header";

function App() {
  return (
    <div className='bg-gradient-to-r from-teal-200 via 30% to-violet-200 min-h-screen flex flex-col'>
      <Header />
      <main>
        <About />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
