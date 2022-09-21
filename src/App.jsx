import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Reserva from "./pages/Reserva";
import Cardapio from "./pages/Cardapio";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import Card from "./pages/Cardapio/Card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./pages/Home/Preloader";
import ReactDOM from "react-dom";


function App() {
  return (
    <div>
      <Router>
      <div className="root">
          <Preloader />
        </div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reserva" element={<Reserva />} />
          <Route path="/cardapio/*" element={<Cardapio />}>
            <Route path="menu" element={<Card all rota="cardapios" />} />
            <Route
              path="sobremesas"
              element={<Card all rota="cardapios/categoria/sobremesas" />}
            />
            <Route path="bebidas" element={<Card all rota="bebidas" />} />
          </Route>
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Home />, rootElement);


export default App;
