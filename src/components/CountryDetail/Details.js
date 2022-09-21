const Details = ({ filtered,mode }) => {
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
        if (language.length > 2) {
        languages += language[i] + ', '
        } else {
            languages += language[i] + '.'
     }
    }

    return (
     <div className="mx-9 py-4" style={mode.color}>
        <h3 className='font-bold text-[20px] py-4'>{filtered.name.common}</h3>
            <div>
             <p className="font-bold text-[12px] mb-2 ">Native Name: <span className="text-gray-500">{nativeNames.common} </span></p>
             <p className="font-bold text-[12px] mb-2 ">Population: <span className="text-gray-500">{filtered.population}</span> </p>
             <p className="font-bold text-[12px] mb-2 ">Region: <span className="text-gray-500">{filtered.region} </span></p>
             <p className="font-bold text-[12px] mb-2 ">Sub Region: <span className="text-gray-500">{filtered.subregion} </span></p>
            <p className="font-bold text-[12px] mb-2 ">Capital: <span className="text-gray-500">{filtered.capital}</span> </p>
        </div> 
             <div className="py-5">
                <p className="font-bold text-[12px] mb-2 ">Top Level Domain: <span className="text-gray-500">{filtered.tld}</span></p>
                <p className="font-bold text-[12px] mb-2 ">Currencies: <span className="text-gray-500">{currencies.name}</span></p>
                <p className="font-bold text-[12px] mb-2 ">Languages: <span className="text-gray-500">{languages}</span></p>
            </div>  
            {filtered.borders &&
            <div>
            <h4 className="font-bold text-[14px] mb-3 ">Border Countries :</h4>
             <div className="flex flex-wrap ">
                {filtered.borders.map((item, index) => {
                    return (
                  <div key={index} className='mr-2 mb-2'style={mode.shadow} >
            <button className="w-[93px] rounded-sm font-bold text-[12px] h-8 ">{item}</button>
        </div> 
                    ) 
                })}
            </div> 
        </div>}
        </div>
    )
}
export default Details