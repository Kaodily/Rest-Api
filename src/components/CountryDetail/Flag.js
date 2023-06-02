const Flag = ({ flag }) => {
  return (
    <div className="w-[300px] md:w-[400px] lg:w-[450px] md:h-[250px] lg:h-[300px] lg:mx-20 mx-auto h-[200px] ">
      <img src={flag.flags.png} className="w-full h-full" alt="flag" />
    </div>
  );
};
export default Flag;
