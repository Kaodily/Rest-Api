const Input = ({handleChange,mode}) => {
    return (
        <div>
            <input style={mode} onChange={handleChange} className="w-[90%] md:w-[350px] pl-4 h-10 mx-5 my-8 text-[12px] " type="text" placeholder="Search for a country" />
    </div>
    )
}
export default Input