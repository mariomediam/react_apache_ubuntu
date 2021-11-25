import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import TrabajadorView from './views/TrabajadorView'

// import Routes from "./Routes";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/trabajador' element={<TrabajadorView/>} />          
			</Routes>
		</BrowserRouter>
	);
}
