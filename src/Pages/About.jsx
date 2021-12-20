import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

// Logo
import logo from '../lib/assets/logo.svg'

const About = styled(({className}) => {
    return (
        <main className={className}>
            <img src={logo} alt="logo" />
            <h1>Welcome to the about page!</h1>
            <Link to="/">Home Page</Link>
        </main>
    )
})`
    a{
        color: #458C40;
    }
`

export default About