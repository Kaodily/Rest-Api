import GoBack from './Goback'
import Flag from './Flag'
import {useParams} from 'react-router-dom'
import Details from './Details'
const CountryDetails = ({ countries, mode }) => {
  console.log(countries)
  const { id } = useParams()
  const filtered = countries.filter(item => id === item.name.common)
  let details;
  for (let each of filtered) {
    details = each
  }
  const flag = details.flags ? details.flags : ''
  const info = details ? details : ''
  return (
    countries && (
      <div>
      <GoBack mode={mode.shadow} />
       <Flag
        filtered={flag} 
        />
      <Details filtered={info} mode={mode} />
        </div>
        )
    )
}
export default CountryDetails