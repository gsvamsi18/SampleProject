import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Component/homepage";
import InsertFromExcel from "./Component/truecallerExcelData";
import ExportData from "./Component/truecallerSampleExcel";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/insertFromExcel" element={<InsertFromExcel />} />
					<Route path="/exportData" element={<ExportData />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
