import Footer from "./components/Footer";
import Nav from "./components/Nav";;
import Home from "./pages/Home";
import Reserva from "./pages/Reserva";
import Cardapio from "./pages/Cardapio";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
			<Router>
			<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/reserva" element={<Reserva />} />
					<Route path="/cardapio" element={<Cardapio />} />
					<Route path="/contato" element={<Contato />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
      <Footer />   
			</Router>
    </div>
  )
	}
export default App;
