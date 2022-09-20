const Header = ({image,handleClick}) => {
    return (
        <div className='flex justify-between h-16 bg-yellow-500 items-center p-3 '>
            <p className="font-bold text-[13px]">Where in the world?</p>
            <div className='flex h-9 w-24 items-center' onClick={handleClick}>
                <img className='w-3 h-3 mr-2' src={image} alt="mode" />
                <p className='text-[12px] text-white'>Dark Mode</p>
            </div>
        </div>
    )
}
export default Header