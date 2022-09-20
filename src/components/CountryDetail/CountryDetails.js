import GoBack from './Goback'
import Flag from './Flag'
import {useParams} from 'react-router-dom'
import Details from './Details'
const CountryDetails = ({countries}) => {
  const { id } = useParams()
  const filtered = countries.filter(item => id === item.name.common)
  console.log(filtered)
  let details;
  for (let each of filtered) {
    details = each
  }
  const flag = details.flags ? details.flags : null
  const info = details ? details : null
  return (
        <div>
      <GoBack />
       <Flag
        filtered={flag} 
        />
      <Details filtered={info} />
        </div>
    )
}
export default CountryDetails