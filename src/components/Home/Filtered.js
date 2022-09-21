export const Filtered = ({mode,handleClick}) => {
    return (
        <div className="w-[190px] h-10 mx-5 md:mt-9 rounded-sm text-[12px] font-bold px-4 flex items-center " style={mode} onClick={handleClick}>
            <p>Filter by Region</p>  
        </div>
    )
}
export const Regions = ({mode,modal,handleClick}) => {
    return (
        modal && (
            <div className='w-[190px] top-[215px] md:top-[145px] mx-5 absolute h-[150px] text-[12px] font-bold' style={mode} >
            <ul className="py-3 px-5 ">
                <li className="mb-1" onClick={() => handleClick('All')}>All</li>
                <li className="mb-1" onClick={() => handleClick('Africa')}>Africa</li>
                <li className="mb-1" onClick={()=> handleClick('Americas')}>America</li>
                <li className="mb-1" onClick={()=>handleClick('Asia')}>Asia</li>
                <li className="mb-1" onClick={()=>handleClick('Europe')}>Europe</li>
                <li className="mb-1" onClick={()=>handleClick('Oceania')}>Oceania</li>
            </ul>
        </div>
        )
    )
}