import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

// Logo
import logo from '../lib/assets/logo.svg'

const App = styled(({className}) => {
  const [data, setData] = useState('loading...');
  
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('/api');
        const data = await res.json();
        setData(data.message);
      } catch (err) {
        console.log(err);
        setMessage('Something went wrong!');
      }
    }
  
    getData();
  }, [])
  
  return (
    <main className={className}>
      <img src={logo} alt="logo" />
      <h1>{data}</h1>
      <Link to="/about">About Page</Link>
    </main>
  );
})`
`

export default App