import {Link} from 'react-router-dom'
const GoBack = ({mode}) => {
    return (
        <Link to={'/'}>
               <div className="w-24 md:ml-20 md:my-14 bg-white text-center text-[12px] font-bold rounded-sm pt-2 mx-10 mt-6 mb-10 h-9" style={mode}>
            <p>Back</p>
        </div>
        </Link>
    )
}
export default GoBack