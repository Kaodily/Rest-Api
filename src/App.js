import React, { Fragment, useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home/Home'
import Details from './components/CountryDetail/CountryDetails'

function App() {
  const [countries, setCountries] = useState([])
  const fetchData = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
    .catch(err => console.log(err))
  }
  useEffect(() => {
    fetchData()
  }, [])
  const countryNames = countries.map(items => items)
  const handleChange = (e) => {
    let filtered = countries.filter(item => item.name.common.includes(e.target.value))
    // setCountries(prev => filtered.length === 0 ? fetchData() : filtered)
  }
  return (
    <BrowserRouter>
    <Fragment>
      <Header />
        <Routes>
          <Route path='/' element={<Home countries={countryNames} handleChange={handleChange} />  } />
          <Route path='/:id' element={<Details countries={countryNames} />  } />
        </Routes>      </Fragment>
    </BrowserRouter>
  );
}

export default App;