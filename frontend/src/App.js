import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Component/homepage";
import insertFromExcel from "./Component/truecallerExcelData";


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/insertFromExcel" element={<insertFromExcel />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
