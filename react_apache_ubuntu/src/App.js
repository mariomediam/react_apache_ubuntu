import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from './views/LoginView'
import TrabajadorView from './views/TrabajadorView'

// import Routes from "./Routes";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LoginView/>} />
				<Route path='/buscar_trabajador' element={<TrabajadorView/>} />          
			</Routes>
		</BrowserRouter>
	);
}
