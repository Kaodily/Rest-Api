import Input from "./Input";
import { Filtered, Regions } from "./Filtered";
import Countries from "./Countries";
import { useContext } from "react";
import { CountryContext } from "../../App";
const Home = ({
  handleChange,
  mode,
  handleClick,
}) => {
  const {countryNames} = useContext(CountryContext)
  return (
    <section>
      <div className="md:flex justify-between md:px-14">
        <Input handleChange={handleChange} mode={mode} />
        <div>
          <Filtered mode={mode} handleClick={handleClick} />
          <Regions mode={mode}/>
        </div>
      </div>
      <div className="sm:flex sm:flex-wrap sm::px-8 justify-center">
        {countryNames.map((country, index) => (
          <Countries name={country} mode={mode} key={index} />
        ))}
      </div>
    </section>
  );
};
export default Home;
