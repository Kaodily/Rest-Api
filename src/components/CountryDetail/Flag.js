const Flag = ({flag}) => {
    return  (
        <div className="w-[300px] md:w-[400px] md:h-[300px] md:mx-20 mx-auto h-[200px] ">
          <img src={flag.flags.png} className='w-full h-full' alt='flag' />
        </div>
      
    )
}
export default Flag