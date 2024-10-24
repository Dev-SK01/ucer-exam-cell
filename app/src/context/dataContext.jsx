import React, { createContext, useEffect, useState } from "react";
import { MyLocalStorage } from "../db/indexedDB";
import allocateExamHalls from "../utils/allocateExamHalls";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [date, setDate] = useState("");
  const studentLocalStorage = new MyLocalStorage();
  const examDateLocalStorage = new MyLocalStorage();
  const [studentStorage, setStudentstorage] = useState([]);
  const [examStorage, setExamStorage] = useState({});
  const [examDates, setExamDates] = useState(() => examStorage || {});
  const [resultStudentData, setResultStudentData] = useState([
    {
      department: "Select Date",
      firstName: "Select ",
      lastName: "Date",
      registerNumber: "Select Date",
      id: "YYY",
      regulation: "Select Date",
      exam: "Select Date",
    },
  ]);
  const [files, setFile] = useState([]);
  const [isUploading, setisUploading] = useState(false);
  const [Error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isForeNoon, setForeNoon] = useState(false);
  const [isAfterNoon, setAfterNoon] = useState(false);
  const [examHall, setExamHall] = useState([]);
  const [allocatedData, setAllocatedData] = useState([]);
  const localostURL = "http://localhost:9000/";
  const productionURL = "https://ucer-backend-50021988656.development.catalystappsail.in/";

  useEffect(() => {
    // while loading the app getting the data from indexed db and store in state variable
    setIsLoading(true);
    studentLocalStorage.get("studentData").then((data) => {
      setStudentstorage(data);
    });

    examDateLocalStorage.get("ExamDates").then((data) => {
      setExamStorage(data);
    });
    setTimeout(() => setIsLoading(false), 2500);
  }, []);

  const handleInputDate = () => {
    try {
      const __month = new Date(document.getElementById("date").value)
        .toDateString()
        .slice(4, 7)
        .toLocaleUpperCase();
      const __date = new Date(document.getElementById("date").value)
        .toDateString()
        .slice(8, 10);
      const __year = new Date(document.getElementById("date").value)
        .getFullYear()
        .toString()
        .slice(2, 4);
      //constructing the date for the object key. to get the exams
      const __formatedDate = `${__date}-${__month}-${__year}`;
      //setting the dates for the for the setDate
      setDate(__formatedDate);
      // creating a exam dates array with the formattedDate
      setExamDates(examStorage[__formatedDate]);
      // set [] if the undefined throw
    } catch (err) {
      console.log(err.message);
    }
  };

  const searchExamStudents = (isForeNoon, isAfterNoon) => {
    try {
      console.log(isAfterNoon,isForeNoon);
      //filtering the exam students
      const __mappedStudentData = studentStorage.filter((data) => {
        const __subjectsArr = data.subjects;
        for (let i = 0; i < __subjectsArr.length; i++) {
          // filtering foreNoon exam students
          if (isForeNoon) {
            if (examStorage?.foreNoon[date]?.includes(__subjectsArr[i])) {
              // adding exam to the student data
              data.exam = __subjectsArr[i];
              // setForeNoon(false);
              return data;
            }
          } // Filtering  afterNoon  exam students
          else if (isAfterNoon) {
            if (examStorage?.afterNoon[date]?.includes(__subjectsArr[i])) {
              // adding exam to the student data
              data.exam = __subjectsArr[i];
              // setAfterNoon(false);
              return data;
            }
          }
          //filtering total exam students
          else {
            
            if (
              examStorage?.foreNoon[date].includes(__subjectsArr[i]) ||
              examStorage?.afterNoon[date].includes(__subjectsArr[i])
            ) {
              // adding exam to the student data
              data.exam = __subjectsArr[i];
              return data;
            }
          }
        }
      });
      setResultStudentData(__mappedStudentData);
    } catch (err) {
      console.log(err.message);
      // if error occcurs setting the error message
      setResultStudentData([
        {
          department: "No Exam Today",
          firstName: "No Exam ",
          lastName: "Today",
          registerNumber: "No Exam Today",
          id: "YYY",
          regulation: "No Exam Today",
        },
      ]);
    }
  };

  // Handle form submission
  const handlePdfUpload = (route) => {
    // delaying hte response time from the server
    setTimeout(async () => {
      // Create a new FormData instance
      const formData = new FormData();
      // Append each file to FormData
      for (let i = 0; i < files.length; i++) {
        formData.append(route, files[i]);
      }
      try {
        if (files.length == 0) {
          alert("No Files Were Selected !");
          setisUploading(false);
        } else {
          // for display message
          setisUploading(true);
          // Make the POST request
          const response = await fetch(`${localostURL}${route}`, {
            method: "POST",
            body: formData, // Send FormData with files
          });
          const resData = await response.json();
          console.log(response.status);
          // checking if any error from server
          studentLocalStorage.setItem(route, resData);
          // getting the data from the indexedDB
          studentLocalStorage.get("studentData").then((data) => {
            setStudentstorage(data);
          });
          examDateLocalStorage.get("ExamDates").then((data) => {
            setExamStorage(data);
          });
          setisUploading(false);
          setFile([]);
          console.log("Response Stored In IndexDB");
        }
      } catch (error) {
        console.error("Error:", error);
        setError(true);
      }
      // if there is no error in server
      setError(false);
    }, 2000);
  };

  // handling session selection for search
  const handleSession = (e) => {
    if (e.target.nextElementSibling.innerText == "F.N") {
      setForeNoon(e.target.checked);
    } else if (e.target.nextElementSibling.innerText == "A.N") {
      setAfterNoon(e.target.checked);
    }

  };

  const handleExamHallInput = (e) => {  
    try {
      const hallList = e.target.value.toUpperCase().split(",");
      if (hallList.length == 0) {
        alert("Seperate Hall By Comma Separated values!");
      } else {
        setExamHall(hallList);
      }
    } catch (err) {
      alert(err.message);
    }
  };
  // logs for the reference
  // console.log(resultStudentData);
  // console.log(examDates);
  // console.log(examHall);
  //console.log("student Data :", studentStorage);
  // console.log("ExamDates Data :", examStorage);
  //console.log(allocatedData);
  

  return (
    <DataContext.Provider
      value={{
        date,
        setDate,
        files,
        setFile,
        studentLocalStorage,
        examDateLocalStorage,
        studentStorage,
        setStudentstorage,
        examStorage,
        setExamStorage,
        examDates,
        setExamDates,
        resultStudentData,
        setResultStudentData,
        handleInputDate,
        searchExamStudents,
        handlePdfUpload,
        isUploading,
        setisUploading,
        Error,
        setError,
        isLoading,
        setIsLoading,
        handleSession,
        isForeNoon,
        isAfterNoon,
        examHall,
        handleExamHallInput,
        allocateExamHalls,
        allocatedData,
        setAllocatedData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
