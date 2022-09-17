import Footer from "./components/Footer";
import Nav from "./components/Nav";;
import Home from "./pages/Home";
import Reserva from "./pages/Reserva";
import Cardapio from "./pages/Cardapio";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CardTeam from "./pages/Contato/SectionTeam/CardTeam";
import SectionTeam from "./pages/Contato/SectionTeam";


function App() {
  return (
    <div>
			{/* <Nav /> */}
	    {/* <Contato/> */}
			<Contato/>
      {/* <Footer />    */}
    </div>
  )
	}
export default App;
