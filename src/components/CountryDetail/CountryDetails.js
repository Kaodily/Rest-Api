import GoBack from "./Goback";
import Flag from "./Flag";
import { useParams } from "react-router-dom";
import Details from "./Details";
const CountryDetails = ({ countries, mode }) => {
  const { id } = useParams();
  const filtered = countries.filter((item) => id === item.name.common);
  let details;
  for (let each of filtered) {
    details = each;
  }


  const info = details ? details : "";
  return (
      <div className="md:flex">
        <div>
          <GoBack mode={mode.shadow} />
        <Flag flag={details} />
        </div>
        {info && <Details filtered={info} mode={mode} />}
      </div>
    
  );
};
export default CountryDetails;
