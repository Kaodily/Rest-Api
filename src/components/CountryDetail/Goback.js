import {Link} from 'react-router-dom'
const GoBack = () => {
    return (
        <Link to={'/'}>
               <div className="w-24 bg-white text-center pt-1 mx-10 mt-6 mb-10 h-9">
            <p>Back</p>
        </div>
        </Link>
    )
}
export default GoBack