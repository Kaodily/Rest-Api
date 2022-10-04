import { useContext } from "react";
import { CountryContext } from "../../App";
import {Link} from 'react-router-dom'

const Details = ({ filtered, mode }) => {
    const { countryNames } = useContext(CountryContext)
    const extract = (id) => {
        const native = Object.values(id)
        let values;
         for (let each of native) {
        values = each
        }
        return values
    }
   const nativeNames = extract(filtered.name.nativeName)
    const currencies = extract(filtered.currencies)
    const language = Object.values(filtered.languages) 
    let languages = ''
    for (let i = 0; i < language.length; i++){
        if (language.length >= 2) {
        languages += language[i] + ', '
        } else {
            languages += language[i] + '.'
     }
    }
    return (
     <div className="mx-9 py-4 " style={mode.color}>
            <div className="md:flex md:mt-[200px]">
            <div>
           <h3 className='font-bold text-[20px] py-4'>{filtered.name.common}</h3>
             <p className="font-bold text-[12px] mb-2 ">Native Name: <span className="text-gray-500">{nativeNames.common} </span></p>
             <p className="font-bold text-[12px] mb-2 ">Population: <span className="text-gray-500">{filtered.population}</span> </p>
             <p className="font-bold text-[12px] mb-2 ">Region: <span className="text-gray-500">{filtered.region} </span></p>
             <p className="font-bold text-[12px] mb-2 ">Sub Region: <span className="text-gray-500">{filtered.subregion} </span></p>
            <p className="font-bold text-[12px] mb-2 ">Capital: <span className="text-gray-500">{filtered.capital}</span> </p>
        </div> 
             <div className="py-5 md:py-16 md:px-16">
                <p className="font-bold text-[12px] mb-2 ">Top Level Domain: <span className="text-gray-500">{filtered.tld}</span></p>
                <p className="font-bold text-[12px] mb-2 ">Currencies: <span className="text-gray-500">{currencies.name}</span></p>
                <p className="font-bold text-[12px] mb-2 ">Languages: <span className="text-gray-500">{languages}</span></p>
            </div>  
         </div>
            {filtered.borders &&
            <div className="md:flex ">
            <h4 className="font-bold text-[14px] md:mr-2 mb-3 ">Border Countries :</h4>
             <div className="flex flex-wrap">
                        {filtered.borders.map((item, index) => {
                            const filteredNames = countryNames.filter(m => m.cca3 === item)
                    return (
                  <div key={index} className='mr-2 mb-2'style={mode.shadow} >    
                 {filteredNames.map(item =>
                     <Link to ={{pathname:`/${item.name.common}`}}>
                       <button className="w-[93px] rounded-sm font-bold text-[12px] h-8 ">{item.name.common}</button>
                     </Link>)}
                        </div> 
                    ) 
                })}
            </div> 
        </div>}
        </div>
    )
}
export default Details