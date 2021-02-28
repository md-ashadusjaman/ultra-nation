import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './cmponents/Country/Country';


function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        // console.log(data);
        // const names = data.map(country => country.name);
        // console.log(names);
      })

      .catch(error => console.log(error))
  }, [])




  return (
    <div className="App">
      <header className="App-header">
        <h2>Total loaded country:{countries.length}</h2>
        <ol>
          {
            countries.map(country => <Country country={country} key={country.alpha3Code}> </Country>)
          }
        </ol>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
