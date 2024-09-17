import React, { createContext, useEffect, useState } from "react";
import { MyLocalStorage } from "../db/indexedDB";
import {Student_Sheduling} from "../db/Student_sheduling";
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
  const localostURL = "http://localhost:9000/";
  const productionURL =
    "https://ucer-backend-50021988656.development.catalystappsail.in/";
  const [Student_CSE,setStudent_CSE]=useState([1,2,3,4,5]);
  const [Student_ECE,setStudent_ECE]=useState([6,7,8,9]);
  const [Student_EEE,setStudent_EEE]=useState([10,11,12]);
  const [Student_MECH,setStudent_MECH]=useState([13,14]);
  const [Student_civil,setStudent_civil]=useState([22]);
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
      //filtering the exam students
      const __mappedStudentData = studentStorage.filter((data) => {
        const __subjectsArr = data.subjects;
        for (let i = 0; i < __subjectsArr.length; i++) {
          // filtering foreNoon exam students
          if (isForeNoon) {
            if (examStorage?.foreNoon[date]?.includes(__subjectsArr[i])) {
              // adding exam to the student data
              data.exam = __subjectsArr[i];
              setForeNoon(false);
              return data;
            }
          } // Filtering  afterNoon  exam students
          else if (isAfterNoon) {
            if (examStorage?.afterNoon[date]?.includes(__subjectsArr[i])) {
              // adding exam to the student data
              data.exam = __subjectsArr[i];
              setAfterNoon(false);
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
      // setting the examed students for results
      //setResultStudentData(__mappedStudentData);
      //spliting dept into arrays
        for(let j=0;j<__mappedStudentData.length;j++) {
          if (__mappedStudentData[j].department ==='CSE'){
            setStudent_CSE(Student_CSE=>[...Student_CSE,__mappedStudentData[j]])
          }
          if (__mappedStudentData[j].department ==='ECE'){
            setStudent_ECE(Student_ECE=>[...Student_ECE,__mappedStudentData[j]])
          }
          if (__mappedStudentData[j].department ==='EEE'){
            setStudent_EEE(Student_EEE=>[...Student_EEE,__mappedStudentData[j]])
          }
          if (__mappedStudentData[j].department ==='MECH'){
            setStudent_MECH(Student_MECH=>[...Student_MECH,__mappedStudentData[j]])
          }
          if (__mappedStudentData[j].department ==='Civil'){
            setStudent_civil(Student_civil=>[...Student_civil,__mappedStudentData[j]])
          }
        }
        
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
    // console.log(isAfterNoon,isForeNoon);
  };

  const handleExamHallInput = (Halllist) => {
    try {
        const arr = [Student_CSE, Student_ECE, Student_EEE, Student_MECH, Student_civil];
        const shuffled_student = Student_Sheduling(arr);
        let j=0
        let hall_num;
        for(let i=0;i<shuffled_student.length;i=i+25){
          hall_num=Halllist[j];
          setExamHall(examHall=>[...examHall,{[hall_num]:shuffled_student.slice(i,i+25)}]);
          j=j+1;
        }
    } catch (err) {
      alert(err.message);
    }
  };
  console.log(examHall);
  // logs for the reference
  // console.log(resultStudentData);
  // console.log(examDates);
  // console.log(examHall);
  //console.log("student Data :", studentStorage);
  // console.log("ExamDates Data :", examStorage);

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
        handleExamHallInput,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
