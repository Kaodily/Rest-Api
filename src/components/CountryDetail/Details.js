const Details = ({ filtered }) => {
    console.log(filtered)
    return (
        <div>
            <h3>{filtered.name.common}</h3>
            <div>
                <p> Native Name: </p>
            </div>
        </div>
    )
}
export default Details