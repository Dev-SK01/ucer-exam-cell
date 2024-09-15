import React from "react";
import "./operation.css";
import deleteBtn from "../../assets/Trash.svg";
import { MyLocalStorage } from "../../db/indexedDB";
const Deletedata = ({
  setStudentstorage,
  setExamStorage,
  handleSession,
  isForeNoon,
  isAfterNoon,
}) => {
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
      </div>
    </>
  );
};

export default Deletedata;
