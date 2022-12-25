import * as xlsx from "xlsx";
import React, { useState } from "react";
import axios from 'axios';
import DownloadExcel from "./truecallerSampleExcel";
import { showNotification } from '@mantine/notifications';
import { ScrollArea } from '@mantine/core';
import { Table, Container, Input, Group } from '@mantine/core';
import { Button } from '@mantine/core';

//function to insert data from excel
function InsertFromExcel() {
	const [myData, setMyData] = useState([]);
	//inserting data into database
	const insertingData = async () => {
		let content
		try {
			content = await axios.post("api/insertManyTruecallerUsers", myData)
			showNotification({
				title: "Success",
				message: "Records from excel Inserted Succesfully",
				autoClose: 4000,
				color: "green"

			})
		}
		catch (err) {
			console.log(err?.response?.data?.code)
			//11000 status is for duplicate record
			if (err?.response?.data?.code === 11000) {
				showNotification({
					title: "Error",
					message: "duplicates exists",
					autoClose: 4000,
					color: "red"
				})
			}
			else {
				showNotification({
					title: "Error",
					message: "Internal Server Error",
					autoClose: 4000,
					color: "red"
				})
			}
		}
	}

	//converting excel data to json
	const excelToJSON = async (e) => {
		e.preventDefault();
		if (e.target.files) {
			const reader = new FileReader();
			reader.onload = async (e) => {
				const data = e.target.result;
				const workbook = xlsx.read(data, { type: "array" });
				const sheetName = workbook.SheetNames[0];
				const worksheet = workbook.Sheets[sheetName];
				const json = xlsx.utils.sheet_to_json(worksheet);
				setMyData(json)
				console.log(json);
			}
			reader.readAsArrayBuffer(e.target.files[0]);
		};
	}

	const rows = myData.map((element) => (
		<tr key={element.phone}>
			<td >{element.name}</td>
			<td >{element.phone}</td>
			<td >{element.email}</td>
			<td >{element.location}</td>
		</tr>
	));

	return (
		<Container
			mt={"xl"}
			size={"md"}
			my={20}
			style={{
				minHeight: "100vh",
			}}
		>
			<center>
				<h1>You can insert data by uploading excel file</h1>
				<p>Sample excel file can be downloaded using button on the right</p>
				<div>
					<input
						type="file"
						name="upload"
						id="upload"
						onChange={excelToJSON}
					/>
					<Button onClick={DownloadExcel}>Download Sample file</Button>
				</div>
				<br /><br />
				<div>
					<ScrollArea style={{ height: 250 }}>
						{
							<div>
								<Table striped highlightOnHover  >
									<thead>
										<tr>
											<th style={{ width: "27%" }}>Name</th>
											<th style={{ width: "26%" }}>Phone</th>
											<th style={{ width: "26%" }}>Email</th>
											<th >Location</th>
										</tr>
									</thead>
									<tbody>{rows}</tbody>
								</Table>
							</div>
						}
					</ScrollArea>
				</div>
				<br /><br />
				<Button onClick={insertingData}>
					insert
				</Button>
			</center>
		</Container>
	)
}

export default InsertFromExcel