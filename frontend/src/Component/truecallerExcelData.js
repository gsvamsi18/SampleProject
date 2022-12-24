import * as xlsx from "xlsx";
import React from "react";
import axios from 'axios';
import Navbar from "./navbar";
import DownloadExcel from "./truecallerSampleExcel";

// const truecallerSampleExcel = require("../Component/truecallerSampleExcel");

const readUploadFile = async (e) => {
	e.preventDefault();
	if (e.target.files) {
		const reader = new FileReader();
		reader.onload = async (e) => {
			const data = e.target.result;
			const workbook = xlsx.read(data, { type: "array" });
			const sheetName = workbook.SheetNames[0];
			const worksheet = workbook.Sheets[sheetName];
			const json = xlsx.utils.sheet_to_json(worksheet);
			console.log(json);
			try {
				let result = await axios.post("/api/insertManyTruecallerUsers", json)
				alert("insertion successful");
			}
			catch (err) {
				console.log(err)
			}
		};
		reader.readAsArrayBuffer(e.target.files[0]);
	}
}

function InsertFromExcel() {
	return (
		<body>
			<Navbar></Navbar>
			<center>
				<div>
					<div>
						<h1>You can insert data by uploading excel file</h1>
						<p>sample excel file can be downloaded using right button</p>
						<br /><br />
						<div>
							<form>
								<label htmlFor="upload">Upload File</label>
								<input
									type="file"
									name="upload"
									id="upload"
									onChange={readUploadFile}
								/>
								<button onClick={DownloadExcel}>
									Download Sample file
								</button>
							</form>
						</div>
					</div>
				</div>
			</center>
		</body>
	)
}

export default InsertFromExcel