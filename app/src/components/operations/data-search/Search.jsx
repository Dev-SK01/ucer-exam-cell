import React, { useState } from "react";
import "./search.css";
import searchBtn from "../../../assets/Search.svg";
const Search = ({ handleInputDate, searchExamStudents,isForeNoon,isAfterNoon,handleExamHallInput }) => {
  const [Halllist,setHalllist]=useState([]);
  return (
    <>
      <div className="date-selection">
        <input
          type="date"
          name="date"
          id="date"
          style={{ backgroundColor: "#D9D9D9" }}
          onChange={() => handleInputDate()}
        />

        <span className="search" onClick={() => searchExamStudents(isForeNoon ,isAfterNoon)}>
          <a href="#resRef">
            <img src={searchBtn} alt="search" />
          </a>
        </span>
      </div>
      <div className="hall-input">
        <p htmlFor="hall">Enter Exam Hall's</p>
        <input
          type="text"
          id="hall"
          placeholder="312B1 , 312B2 , 312B3 , 312B4"
          onChange={(e)=>{setHalllist(e.target.value.toUpperCase().split(","))}}
        />
        <button onClick={()=>{handleExamHallInput(Halllist)}}>Allocate</button>
      </div>
    </>
  );
};

export default Search;
