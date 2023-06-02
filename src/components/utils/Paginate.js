import React from "react";

const Paginate = ({ postPerPage, totalPost, paginate, currentPage }) => {
  const pageNumber = [];

  for (let i = 1; i < Math.ceil(totalPost / postPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <ul className="flex flex-wrap justify-end md:mr-8 lg:mr-14 mb-8">
      {pageNumber.map((number) => {
        return (
          <li
            className="w-[35px] h-[35px] mr-2 mb-2 rounded-sm flex justify-center items-center border-2 px-6 border-gray-400"
            key={number}
            onClick={() => {
              paginate(number);
            }}
            style={
              currentPage === number
                ? { backgroundColor: "red", color: "white" }
                : { backgroundColor: "white" }
            }>
            {number}
          </li>
        );
      })}
    </ul>
  );
};

export default Paginate;
