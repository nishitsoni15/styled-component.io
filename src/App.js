import logo from './logo.svg';
import styled, { css } from 'styled-components'
import './App.css';

function App() {
  return (
    <div className="App">
     <p>HEllo Nishit</p>
    </div>
  );
}

export const Button = styled.button`
background: blue;
border: 2px solid black;
padding: 20px 70px;
width:90px;
color:white;
font-size:20px;
font-weight:bold;
margin:0 30px;
`

export default App;
