/* eslint-disable no-undef */
/* eslint-disable no-const-assign */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useMemo, useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const columns = useMemo(
    () =>
      [
        {
          Header: 'Last Name',
          accessor: 'name.last'
        },
        {
          Header: 'First Name',
          accessor: 'name.first'
        },
        {
          Header: 'City',
          accessor: 'location.city'
        },
        {
          Header: 'Country',
          accessor: 'location.country'
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
  );

  useEffect(() => {
    axios('https://randomuser.me/api/?inc=name,location,email,phone&results=42&seed=chickendinner')
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result.data.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <h1>Another Employee Directory</h1>
        <Table columns={columns} data={data} />
      </div>
    );
  }
}

export default App;
