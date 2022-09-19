import Input from './Input'
import Filtered from './Filtered'
import Countries from './Countries'
const Home = ({ countries,handleChange }) => {
    return (
        <div>
        <Input handleChange={handleChange} />
      <Filtered />
        {countries.map((country, index) => <Countries name={country} key={index} />)}
        </div>
    )
}
export default Home