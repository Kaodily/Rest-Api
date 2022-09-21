import Input from "./Input";
import { Filtered, Regions } from "./Filtered";
import Countries from "./Countries";
const Home = ({
  countries,
  handleChange,
  mode,
  handleClick,
  modal,
  filterHandleClick,
}) => {
  return (
    <section>
      <div className="md:flex justify-between md:px-14">
        <Input handleChange={handleChange} mode={mode} />
        <div>
          <Filtered mode={mode} handleClick={handleClick} />
          <Regions mode={mode} modal={modal} handleClick={filterHandleClick} />
        </div>
      </div>
      <div className="sm:flex sm:flex-wrap sm::px-8 justify-center">
        {countries.map((country, index) => (
          <Countries name={country} mode={mode} key={index} />
        ))}
      </div>
    </section>
  );
};
export default Home;
