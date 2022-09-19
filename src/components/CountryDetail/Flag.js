const Flag = ({ filtered }) => {
    return (
        <div className="w-[300px] mx-auto h-[200px] ">
    <img src={filtered.flags.png} alt='flag' />
        </div>
    )
}
export default Flag