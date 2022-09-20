import React, { Fragment, useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home/Home'
import Details from './components/CountryDetail/CountryDetails'
import lightImage from './assets/icon-moon.svg'
import darkImage from './assets/icon-sun.svg'
import './App.css'


function App() {
  const [countries, setCountries] = useState([])
  const [image, setImage] = useState(darkImage)
  const fetchData = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
    .catch(err => console.log(err))
  }
  useEffect(() => {
    fetchData()
  }, [])
 
  useEffect(() => {
    let data = localStorage.getItem('countries')
    setCountries(JSON.parse(data))
    console.log(countries)
  }, [])
  
  useEffect(() => {
    localStorage.setItem('countries',JSON.stringify(countries))
  })
  const handleChange = (e) => {
    // let filtered = countries.filter(item => item.name.common.includes(e.target.value))
    if (e.target.value === '') {
      fetchData()
      console.log(countries)
    } else {
      setCountries(prev => prev.filter(item => item.name.common.includes(e.target.value)))
      
    }
  }
  console.log(countries)
  const countryNames = countries.map(items => items)

  const body = document.querySelector('body')
  const handleClick = () => {
    setImage(prev => prev === darkImage ? lightImage: darkImage)
    body.classList.toggle('dark')
  }
  // console.log(countries)
  return (
    <BrowserRouter>
    <Fragment>
      <Header image={image} handleClick ={handleClick} />
        <Routes>
          <Route path='/' element={<Home countries={countryNames} handleChange={handleChange} />  } />
          <Route path='/:id' element={<Details countries={countryNames} />  } />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;