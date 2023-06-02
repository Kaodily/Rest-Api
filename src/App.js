import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Details from "./components/CountryDetail/CountryDetails";
import lightImage from "./assets/icon-moon.svg";
import darkImage from "./assets/icon-sun.svg";
import Loading from "./components/Loading";
import "./App.css";

export const CountryContext = createContext();

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [image, setImage] = useState(darkImage);
  const [modal, setModal] = useState(false);
  const [mode, setMode] = useState({
    shadow: {
      backgroundColor: "white",
      color: "black",
      boxShadow: "1px 1px 2px 0 gray",
    },
    color: {
      color: "black",
    },
  });
  const modalHandleClick = () => {
    setModal((prev) => !prev);
  };
  const fetchData = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let data = localStorage.getItem("countries");
    setFilteredCountries(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("countries", JSON.stringify(countries));
  }, [countries]);

  const handleChange = (e) => {
    let sliced =
      e.target.value.slice(0, 1).toUpperCase() + e.target.value.slice(1);
    let filtered = countries.filter((item) =>
      item.name.common.includes(sliced)
    );
    if (e.target.value === "") {
      setFilteredCountries(countries);
    } else {
      setFilteredCountries((prev) => filtered);
    }
  };
  const body = document.querySelector("body");

  const modeHandleClick = () => {
    setImage((prev) => (prev === darkImage ? lightImage : darkImage));
    body.classList.toggle("dark");
    setMode((prev) =>
      image === darkImage
        ? {
            shadow: {
              backgroundColor: "hsl(209, 23%, 22%)",
              color: "white",
              boxShadow: "1px 1px 2px 0 gray",
            },
            color: {
              color: "white",
            },
          }
        : {
            shadow: {
              backgroundColor: "white",
              color: "black",
              boxShadow: "1px 1px 2px 0 gray",
            },
            color: {
              color: "black",
            },
          }
    );
  };
  const filterHandleClick = (region) => {
    if (region === "All") {
      setFilteredCountries(countries);
    } else if (region === "Africa") {
      setFilteredCountries(
        countries.filter((country) => country.region === region)
      );
    } else if (region === "Americas") {
      setFilteredCountries(
        countries.filter((country) => country.region === region)
      );
    } else if (region === "Asia") {
      setFilteredCountries(
        countries.filter((country) => country.region === region)
      );
    } else if (region === "Europe") {
      setFilteredCountries(
        countries.filter((country) => country.region === region)
      );
    } else if (region === "Oceania") {
      setFilteredCountries(
        countries.filter((country) => country.region === region)
      );
    }
  };
  const handleMouseLeave = () => {
    setModal((prev) => !prev);
  };
  const countryNames = filteredCountries.map((items) => items);

  return (
    <CountryContext.Provider
      value={{ countryNames, modal, filterHandleClick, handleMouseLeave }}>
      <Header image={image} handleClick={modeHandleClick} mode={mode.shadow} />
      <Routes>
        {countries.length !== 0 ? (
          <Route
            path="/"
            element={
              <Home
                handleClick={modalHandleClick}
                handleChange={handleChange}
                mode={mode.shadow}
              />
            }
          />
        ) : (
          <Route path="/" element={<Loading />} />
        )}
        <Route path="/:id" element={<Details mode={mode} />} />
      </Routes>
    </CountryContext.Provider>
  );
}

export default App;
