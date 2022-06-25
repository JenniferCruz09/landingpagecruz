import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/home';

import Contact from './pages/about';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exacta path='/' exact element={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
	</Routes>
	</Router>
);
}

export default App;