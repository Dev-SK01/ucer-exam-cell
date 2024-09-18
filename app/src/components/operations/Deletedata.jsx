import React, { useContext } from "react";
import "./operation.css";
import deleteBtn from "../../assets/Trash.svg";
import { MyLocalStorage } from "../../db/indexedDB";
import DataContext from "../../context/dataContext";

const Deletedata = ({
  setStudentstorage,
  setExamStorage,
  handleSession,
  isForeNoon,
  isAfterNoon,
}) => {
  const { allocateExamHalls, resultStudentData, examHall, setAllocatedData } =
    useContext(DataContext);
  const deleteIndexedDB = new MyLocalStorage();
  const deleteData = () => {
    if (confirm("Are sure to Clear Data ?")) {
      deleteIndexedDB.clear().then(() => {
        setStudentstorage([]);
        setExamStorage({});
        alert("All Data Deleted !!");
      });
    }
  };
  return (
    <>
      <div className="delete-btn" onClick={deleteData}>
        <img src={deleteBtn} alt="Delete" />
      </div>
      <div className="session">
        <input
          type="checkbox"
          onChange={(e) => handleSession(e)}
          checked={isForeNoon}
        />
        <span>F.N</span>
        <input
          type="checkbox"
          onChange={(e) => handleSession(e)}
          checked={isAfterNoon}
        />
        <span>A.N</span>
        <input type="checkbox" defaultChecked={true} /> <span>ALL</span>
        <span
          className="allocate"
          onClick={() => allocateExamHalls(examHall, resultStudentData, setAllocatedData)}
        >
          <a href="#allocation">Allocate</a>
        </span>
      </div>
    </>
  );
};

export default Deletedata;
