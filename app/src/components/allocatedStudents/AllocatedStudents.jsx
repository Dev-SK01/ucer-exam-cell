import React, { useContext } from "react";
import "../results/results.css";
import DataContext from "../../context/dataContext";

const AllocatedStudents = () => {
  const { allocatedData, date, examHall ,isForeNoon,isAfterNoon, examStorage} = useContext(DataContext);
  console.log(allocatedData);
  
  return (
    <>
      <section className="container" id="allocation">
        <section className="results-container" id="pdf-content">
          {allocatedData.map((data, index) => (
            <table border="1" id={examHall[index]} key={index} className="allocation">
              <thead>
                <tr>
                  <th colSpan={5} className="thead">ANNA UNIVERSITY CHENNAI</th>
                </tr>
                <tr>
                <th colSpan={5} className="thead">THEORY EXAMININATION - {new Date().getFullYear()}</th>
                </tr>
                <tr>
                <th colSpan={3} className="thead">DATE : {date}</th>
                <th colSpan={2} className="thead">
                  Session : { isForeNoon? 'F.N' : isAfterNoon ? 'A.N' : 'F.N | A.N'}
                </th>
                </tr>
                <tr>
                <th colSpan={5} className="thead">HALL NO : {examHall[index]}</th>
                </tr>
                <tr style={{textAlign:'center'}}>
                  <th colSpan={1} className="thead-bg">SEAT NO</th>
                  <th colSpan={1} className="thead-bg">REGISTER NUMBER</th>
                  <th colSpan={1} className="thead-bg">NAME OF THE CANDIDATE</th>
                  <th colSpan={1} className="thead-bg">SUBJECT CODE</th>
                  <th colSpan={1} className="thead-bg">SUBJECT NAME</th>
                </tr>
              </thead>
              <tbody key={index}>
                {/* checking is students  have exam or not */}
                {data[examHall[index]].map((student, index) => (
                  //console.log(student[index].derpartment);
                  student.map((data,index)=>(
                  <>
                  <tr key={index}>
                    <td className="tdata" style={{fontWeight:'bolder'}}>{data.seatNumber}</td>
                    <td colSpan={1} className="tdata">{data.registerNumber}</td>
                    <td colSpan={1} className="tdata">{`${data.firstName} ${decodeURI(data.lastName)}`}</td>
                    <td className="tdata">{data.exam}</td>
                    <td className="tdata" style={{fontSize:'12px'}}>{examStorage.SubjectName[data.exam]}</td>
                  </tr>
                  </>
                  ))
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan={4}>Total Number of Student Present :</th>
                </tr>
                <tr>
                  <th colSpan={4}>Total Number of Student Absent :</th>
                </tr>
                <tr>
                  <th colSpan={5} style={{textAlign:'right'}}>Signature Of The Cheif Superintendent</th>
                </tr>
              </tfoot>
            </table>
          ))}
        </section>
      </section>
      <footer className="container">
        <p>
          Designed And Developed By Department Of Computer Science & Engineering
        </p>
      </footer>
    </>
  );
};

export default AllocatedStudents;
