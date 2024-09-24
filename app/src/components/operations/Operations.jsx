import React from "react";
import Exampdf from "./examPdf/Exampdf";
import Studentpdf from "./studentpdf/Studentpdf";
import Search from "./data-search/Search";
import Deletedata from "./Deletedata";
import Downloadpdf from "./Downloadpdf";
import "./operation.css";

const Operations = ({
  handleInputDate,
  searchExamStudents,
  setFile,
  isUploading,
  Error,
  handlePdfUpload,
  studentStorage,
  examStorage,
  setStudentstorage,
  setExamStorage,
  handleSession,
  isForeNoon,
  isAfterNoon,
  handleExamHallInput,
}) => {
  return (
    <section className="container main-menu">
      <div className="left-container">
        <Exampdf
          setFile={setFile}
          isUploading={isUploading}
          Error={Error}
          handlePdfUpload={handlePdfUpload}
          studentStorage={studentStorage}
          examStorage={examStorage}
        />
        <Studentpdf
          setFile={setFile}
          isUploading={isUploading}
          Error={Error}
          handlePdfUpload={handlePdfUpload}
          studentStorage={studentStorage}
          examStorage={examStorage}
        />
      </div>
      <div className="center-container">
        <Downloadpdf />
        <Deletedata
          setStudentstorage={setStudentstorage}
          setExamStorage={setExamStorage}
          handleSession={handleSession}
          isAfterNoon={isAfterNoon}
          isForeNoon={isForeNoon}
        />
      </div>
      <div className="right-container">
        <Search
          handleInputDate={handleInputDate}
          searchExamStudents={searchExamStudents}
          isAfterNoon={isAfterNoon}
          isForeNoon={isForeNoon}
          handleExamHallInput={handleExamHallInput}
        />
      </div>
    </section>
  );
};

export default Operations;
