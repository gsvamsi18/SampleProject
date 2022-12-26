import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Component/homepage";
import ExportData from "./Component/truecallerSampleExcel";
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import Insertion from "./Component/tabsForInsertion";

function App() {
	return (
		<div className="App">
			<MantineProvider withNormalizeCSS withGlobalStyles>
				<NotificationsProvider position="top-right" zIndex={2077}>
					<BrowserRouter>
						<Routes>						
							<Route path="/" element={<HomePage />} />
							<Route path="/exportData" element={<ExportData />} />
							<Route path="/add" element={<Insertion />} />							
						</Routes>
					</BrowserRouter>
				</NotificationsProvider>
			</MantineProvider>
		</div>
	);
}

export default App;
