import React, { useContext } from "react";
import Header from "./components/header/Header";
import Operations from "./components/operations/Operations";
import Results from "./components/results/Results";
import Alert from "./components/Alert.jsx";
import DataContext from "./context/dataContext.jsx";
const App = () => {
  const {
    setFile,
    studentStorage,
    setStudentstorage,
    examStorage,
    setExamStorage,
    resultStudentData,
    handleInputDate,
    searchExamStudents,
    handlePdfUpload,
    isUploading,
    Error,
    isLoading,
    handleSession,
    isForeNoon,
    isAfterNoon,
    handleExamHallInput,
  } = useContext(DataContext);

  return (
    <>
      <Header />
      {isLoading ? <Alert alterText={"Loading Please Wait"} /> : <></>}
      <Operations
        handleInputDate={handleInputDate}
        searchExamStudents={searchExamStudents}
        setFile={setFile}
        isUploading={isUploading}
        Error={Error}
        handlePdfUpload={handlePdfUpload}
        studentStorage={studentStorage}
        examStorage={examStorage}
        setStudentstorage={setStudentstorage}
        setExamStorage={setExamStorage}
        handleSession={handleSession}
        isAfterNoon={isAfterNoon}
        isForeNoon={isForeNoon}
        handleExamHallInput={handleExamHallInput}
      />
      <Results resultStudentData={resultStudentData} />
    </>
  );
};

export default App;
