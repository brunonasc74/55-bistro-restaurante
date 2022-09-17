import Footer from "./components/Footer";
import Nav from "./components/Nav";;
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contato from "./pages/Contato";


function App() {
  return (
    <div>
			<Router>
				<Routes>
					<Route path="/" element={<Home/>}/>
				</Routes>
				<Routes>
					<Route path="/reservas" element={<Home/>}/>
				</Routes>
				<Routes>
					<Route path="/" element={<Home/>}/>
				</Routes>
			</Router>
      <Nav />
			{/* <Home/> */}
			<Contato />
      <Footer />
    </div>
  );
}

export default App;
