import GoBack from "./Goback";
import Flag from "./Flag";
import { useParams } from "react-router-dom";
import Details from "./Details";
import { useContext } from "react";
import { CountryContext } from "../../App";

const CountryDetails = ({ mode }) => {
  const { countryNames } = useContext(CountryContext);
  const { id } = useParams();
  const filtered = countryNames.filter((item) => id === item.name.common);
  let details;
  for (let each of filtered) {
    details = each;
  }
  const info = details ? details : "";
  return (
    <div className="lg:flex">
      <div>
        <GoBack mode={mode.shadow} />
        <Flag flag={details} />
      </div>
      {info && <Details filtered={info} mode={mode} />}
    </div>
  );
};
export default CountryDetails;
