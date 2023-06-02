import Input from "./Input";
import { Filtered, Regions } from "./Filtered";
import Countries from "./Countries";
import { useContext, useState } from "react";
import { CountryContext } from "../../App";
import Paginate from "../utils/Paginate";

const Home = ({ handleChange, mode, handleClick }) => {
  const { countryNames } = useContext(CountryContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(20);

  const indexofLastPage = currentPage * perPage;
  const indexOfFirstPage = indexofLastPage - perPage;
  const countries = Array.isArray(countryNames)
    ? countryNames.slice(indexOfFirstPage, indexofLastPage)
    : [];
  const paginate = (number) => {
    setCurrentPage(number);
  };
  return (
    <section>
      <div className="md:flex justify-between md:px-9 lg:pl-5">
        <Input handleChange={handleChange} mode={mode} />
        <div>
          <Filtered mode={mode} handleClick={handleClick} />
          <Regions mode={mode} />
        </div>
      </div>
      <div className="sm:flex sm:flex-wrap justify-center sm::px-8  md:pl-12 ">
        {countries.map((country, index) => (
          <Countries name={country} mode={mode} key={index} />
        ))}
      </div>
      <Paginate
        postPerPage={perPage}
        currentPage={currentPage}
        totalPost={countryNames.length}
        paginate={paginate}
      />
    </section>
  );
};
export default Home;
