/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useMemo, useState, useEffect } from 'react';
import axios from 'axios';

import Table from './Table';
import './App.css';

const Genres = ({ values }) => {
	return (
		<>
			{values.map((genre, idx) => {
				return (
					<span key={idx} className="badge">
						{genre}
					</span>
				);
			})}
		</>
	);
};

function App() {
	const columns = useMemo(
		() => [
			{
				Header: 'TV Show',
				columns: [
					{
						Header: 'Name',
						accessor: 'show.name'
					},
					{
						Header: 'Type',
						accessor: 'show.type'
					}
				]
			},
			{
				Header: 'Details',
				columns: [
					{
						Header: 'Language',
						accessor: 'show.language'
					},
					{
						Header: 'Genre(s)',
						accessor: 'show.genres',
						Cell: ({ cell: { value } }) => <Genres values={value} />
					},
					{
						Header: 'Runtime',
						accessor: 'show.runtime',
						Cell: ({ cell: { value } }) => {
							const hour = Math.floor(value / 60);
							const min = Math.floor(value % 60);
							return (
								<>
									{hour > 0 ? `${hour} hr${hour > 1 ? 's' : ''} ` : ''}
									{min > 0 ? `${min} min${min > 1 ? 's' : ''}` : ''}
								</>
							);
						}
					},
					{
						Header: 'Status',
						accessor: 'show.status'
					}
				]
			}
		],
		[]
	);

	const [data, setData] = useState([]);

	useEffect(() => {
		(async () => {
			const result = await axios('https://api.tvmaze.com/search/shows?q=railgun');
			console.log(result);
			setData(result.data);
		})();
	}, []);
  
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

export default App;
