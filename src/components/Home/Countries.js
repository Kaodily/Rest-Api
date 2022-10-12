import {Link} from 'react-router-dom'
const Countries = ({ name, mode }) => {

    return (
            <Link to={{pathname:`/${name.name.common}`}}>
                <div className='flex justify-center mt-9 sm:mr-9 ' >
                    <div className='mb-8 rounded-md h-[300px] w-[200px] bg-white ' style={mode}>
                        <div className='w-full h-[130px]'>
                            <img className='w-[100%] h-full' src={name.flags.png} alt="" />
                        </div>
                        <div className='p-5'>
                        <h3 className="font-bold mb-2">{name.name.common}</h3>
                        <p className='text-[13px] mb-2'>Population:  <span className='text-[hsl(0,0%,52%)]'>{name.population}</span></p>
                        <p  className='text-[13px] mb-2'>Region: <span className='text-[hsl(0,0%,52%)]'>{name.region}</span></p>
                        <p  className='text-[13px] mb-2'>Capital: <span className='text-[hsl(0,0%,52%)]'>{name.capital}</span></p>
                     </div>
                    </div>
    
        </div>
    </Link>
    )
}
export default Countries