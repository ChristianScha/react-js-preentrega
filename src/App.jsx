import { Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
