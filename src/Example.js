import React, {
	useMemo,
	useRef,
	useState,
	useCallback,
	useEffect,
} from "react";
import MaterialReactTable from "material-react-table";
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	MenuItem,
	Stack,
	TextField,
	Tooltip,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const data = [
	{
		id: "9s41rp",
		firstName: "Kelvin",
		lastName: "Langosh",
		email: "Jerod14@hotmail.com",
		age: 19,
		phoneNumber: "77310618646",
		state: "Ohio",
	},
	{
		id: "08m6rx",
		firstName: "Molly",
		lastName: "Purdy",
		email: "Hugh.Dach79@hotmail.com",
		age: 37,
		phoneNumber: "77310618646",
		state: "Rhode Island",
	},
	{
		id: "5ymtrc",
		firstName: "Henry",
		lastName: "Lynch",
		email: "Camden.Macejkovic@yahoo.com",
		age: 20,
		phoneNumber: "77310618646",
		state: "California",
	},
	{
		id: "ek5b97",
		firstName: "Glenda",
		lastName: "Douglas",
		email: "Eric0@yahoo.com",
		age: 38,
		phoneNumber: "77310618646",
		state: "Montana",
	},
	{
		id: "xxtydd",
		firstName: "Leone",
		lastName: "Williamson",
		email: "Ericka_Mueller52@yahoo.com",
		age: 19,
		phoneNumber: "77310618646",
		state: "Colorado",
	},
	{
		id: "wzxj9m",
		firstName: "Mckenna",
		lastName: "Friesen",
		email: "Veda_Feeney@yahoo.com",
		age: 34,
		phoneNumber: "77310618646",
		state: "New York",
	},
	{
		id: "21dwtz",
		firstName: "Wyman",
		lastName: "Jast",
		email: "Melvin.Pacocha@yahoo.com",
		age: 23,
		phoneNumber: "77310618646",
		state: "Montana",
	},
	{
		id: "o8oe4k",
		firstName: "Janick",
		lastName: "Willms",
		email: "Delfina12@gmail.com",
		age: 25,
		phoneNumber: "77310618646",
		state: "Nebraska",
	},
];

const Example = () => {
	const [tableData, setTableData] = useState(data);

	const handleSaveRow = ({ exitEditingMode, row, values }) => {
		tableData[row.index] = values;
		setTableData([...tableData]);
		exitEditingMode();
	};

	const handleDeleteRow = useCallback(
		(row) => {
			if (
				window.confirm(
					`Are you sure you want to delete ${row.getValue("firstName")}`
				)
			) {
				console.log(JSON.stringify(row));
				//send api delete request here, then refetch or update local table data for re-render
				tableData.splice(row.index, 1);
				console.log(JSON.stringify(tableData));
				setTableData([...tableData]);
			}
		},
		[tableData]
	);

	return (
		<MaterialReactTable
			columns={[
				{
					header: "First Name",
					accessorKey: "firstName",
				},
				{
					header: "Last Name",
					accessorKey: "lastName",
				},
				{
					header: "email",
					accessorKey: "email",
				},
				{
					header: "age",
					accessorKey: "age",
				},
				{
					header: "Phone Number",
					accessorKey: "phoneNumber",
					enableEditing: false,
				},
			]}
			data={tableData}
			enableEditing
			editingMode="row"
			onEditingRowSave={handleSaveRow}
			renderRowActionMenuItems={({ row, table }) => (
				<Box sx={{ display: "flex", gap: "1rem" }}>
					<Tooltip arrow placement="right" title="Delete">
						<IconButton color="error" onClick={() => handleDeleteRow(row)}>
							<Delete />
							<p style={{ color: "grey", fontSize: 16 }}>Delete</p>
						</IconButton>
					</Tooltip>
				</Box>
			)}
		/>
	);
};

export default Example;
