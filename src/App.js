/* eslint-disable no-const-assign */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useMemo, useState, useEffect } from 'react';
import axios from 'axios';

import Table from './Table';
import './App.css';

// const Genres = ({ values }) => {
// 	return (
// 		<>
// 			{values.map((genre, idx) => {
// 				return (
// 					<span key={idx} className="badge">
// 						{genre}
// 					</span>
// 				);
// 			})}
// 		</>
// 	);
// };

function App() {
	// const [error, setError] = useState(null);
	// const [isLoaded, setIsLoaded] = useState(false);
	// const [items, setItems] = useState([]);

	const columns = useMemo(
		() => [
			{
				Header: 'Employee',
				columns: [
					{
						Header: 'Picture',
						accessor: 'picture.large'
					},
					{
						Header: 'Last Name',
						accessor: 'name.last'
					},
					{
						Header: 'First Name',
						accessor: 'name.first'
					},
					{
						Header: 'Phone Number',
						accessor: 'phone'
					},
					{
						Header: 'Email',
						accessor: 'email'
					}
				]
			},
		],
		[]
	);

	const [data, setData] = useState([]);
	const empAPI = 'https://randomuser.me/api/?results=10&noinfo';

	useEffect(() => {
		(async () => {
			const result = await axios(empAPI);
			console.log('result', result);
			setData(result.data.results);
		})();
	}, []);

	// useEffect(() => {
	// 	axios(empAPI)
	// 		.then(res => res.json())
	// 		.then(
	// 			(result) => {
	// 				setIsLoaded(true);
	// 				setData(result);
	// 			},
	// 			(error) => {
	// 				setIsLoaded(true);
	// 				setError(error);
	// 			}
	// 		);
	// }, []);

	// if (error) {
	// 	return <div>Error: {error.message}</div>;
	// } else if (!isLoaded) {
	// 	return <div>Loading...</div>;
	// } else {
	return (
		<div className="App">
			<h1>Another Employee Directory</h1>
			<Table columns={columns} data={data} />
			<br />
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
          Learn React
			</a>
		</div>
	);
}
// }

export default App;
