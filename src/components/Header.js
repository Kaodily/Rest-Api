const Header = ({image,handleClick,mode}) => {
    return (
        <div className='flex justify-between h-16 md:px-20 bg-white items-center p-3 ' style={mode}>
            <p className="font-bold text-[13px] md:text-[15px]">Where in the world?</p>
            <div className='flex h-9 w-24 items-center pl-2 rounded-sm' style={mode} onClick={handleClick}>
                <img className='w-3 h-3 mr-2' src={image} alt="mode" />
                <p className='text-[12px] font-bold'>Dark Mode</p>
            </div>
        </div>
    )
}
export default Header