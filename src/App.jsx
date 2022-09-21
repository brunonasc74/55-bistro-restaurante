import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import Reserva from './pages/Reserva';
import Cardapio from './pages/Cardapio';
import Contato from './pages/Contato';
import NotFound from './pages/NotFound';
import Admin from './pages/Admin';
import Card from './pages/Cardapio/Card';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './pages/Home/Preloader';
import ReactDOM from 'react-dom';

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Nav />
								<Home />
								<Footer />
							</>
						}
					/>
					<Route
						path='/reserva'
						element={
							<>
								<Nav />
								<Reserva />
								<Footer />
							</>
						}
					/>
					<Route
						path='/cardapio/*'
						element={
							<>
								<Nav />
								<Cardapio />
								<Footer />
							</>
						}
					>
						<Route path='menu' element={<Card all rota='cardapios' />} />
						<Route
							path='sobremesas'
							element={<Card all rota='cardapios/categoria/sobremesas' />}
						/>
						<Route path='bebidas' element={<Card all rota='bebidas' />} />
					</Route>
					<Route
						path='/contato'
						element={
							<>
								<Nav />
								<Contato />
								<Footer />
							</>
						}
					/>
					<Route path='/admin' element={<Admin />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Home />, rootElement);

export default App;
