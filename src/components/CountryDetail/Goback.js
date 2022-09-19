import {Link} from 'react-router-dom'
const GoBack = () => {
    return (
        <Link to={'/'}>
               <div className="w-24 bg-white text-center pt-1 m-5 h-9">
            <p>Back</p>
        </div>
        </Link>
    )
}
export default GoBack