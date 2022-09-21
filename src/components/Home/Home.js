import Input from './Input'
import {Filtered,Regions} from './Filtered'
import Countries from './Countries'
const Home = ({ countries, handleChange, mode, handleClick,modal,filterHandleClick}) => {
    return (
        <div>
        <Input handleChange={handleChange} mode={mode} />
        <Filtered mode={mode} handleClick={handleClick} />
        <Regions mode={mode} modal={modal} handleClick={filterHandleClick} />
        {countries.map((country, index) => <Countries name={country} mode={mode} key={index} />)}
        </div>
    )
}
export default Home