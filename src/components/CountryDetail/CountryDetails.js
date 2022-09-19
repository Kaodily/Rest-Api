import GoBack from './Goback'
import Flag from './Flag'
import {useParams} from 'react-router-dom'
import Details from './Details'
const CountryDetails = ({countries}) => {
  const { id } = useParams()
  const filtered = countries.filter(item => id === item.name.common)
  let details;
  for (let each of filtered) {
    details = each
  }
  return (
        <div>
      <GoBack />
      <Flag filtered={details} />
      <Details filtered={details} />
        </div>
    )
}
export default CountryDetails