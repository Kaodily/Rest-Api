import { useContext } from "react"
import { CountryContext } from "../../App"

export const Filtered = ({mode,handleClick}) => {
    return (
        <div className="w-[190px] h-10 mx-5 md:mt-9 rounded-sm text-[12px] font-bold px-4 flex items-center " style={mode} onClick={handleClick}>
            <p>Filter by Region</p>  
        </div>
    )
}
export const Regions = ({ mode, handleClick }) => {
    const {modal,filterHandleClick,handleMouseLeave} = useContext(CountryContext)
    return ( 
        modal && (
            <div className='w-[190px] top-[215px] md:top-[145px] mx-5 absolute h-[150px] text-[12px] font-bold' style={mode} onMouseLeave={handleMouseLeave} >
            <ul className="py-3 px-5 ">
                <li className="mb-1 cursor-pointer hover:text-red-600" onClick={() => filterHandleClick('All')}>All</li>
                <li className="mb-1 cursor-pointer hover:text-red-600" onClick={() => filterHandleClick('Africa')}>Africa</li>
                <li className="mb-1 cursor-pointer hover:text-red-600" onClick={()=> filterHandleClick('Americas')}>America</li>
                <li className="mb-1 cursor-pointer hover:text-red-600" onClick={()=>filterHandleClick('Asia')}>Asia</li>
                <li className="mb-1 cursor-pointer hover:text-red-600" onClick={()=>filterHandleClick('Europe')}>Europe</li>
                <li className="mb-1 cursor-pointer hover:text-red-600" onClick={()=>filterHandleClick('Oceania')}>Oceania</li>
            </ul>
        </div>
        )
    )
}