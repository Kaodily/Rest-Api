import {Link} from 'react-router-dom'
const Countries = ({ name }) => {
//   console.log(name)
    return (
            <Link to={{pathname:`/${name.name.common}`}}>
                <div className='flex flex-wrap justify-center mt-9'>
                    <div className='mb-8 rounded-md h-[280px] w-[60%] bg-white '>
                        <div className='w-full h-[130px] bg-black'>
                            <img className='w-[100%] h-full' src={name.flags.png} alt="" />
                        </div>
                        <div className='p-5'>
                        <h3 className="font-bold text-black">{name.name.common}</h3>
                        <p className='text-[13px]'>Population:  <span className='text-[hsl(0,0%,52%)]'>{name.population}</span></p>
                        <p  className='text-[13px]'>Region: <span className='text-[hsl(0,0%,52%)]'>{name.region}</span></p>
                        <p  className='text-[13px]'>Capital: <span className='text-[hsl(0,0%,52%)]'>{name.capital}</span></p>
                     </div>
                    </div>
    
        </div>
    </Link>
    )
}
export default Countries