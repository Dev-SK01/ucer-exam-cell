import React, { useContext, useState } from "react";
import "../results/results.css";
import DataContext from "../../context/dataContext";

const AllocatedStudents = () => {
  const { allocatedData, date, examHall ,isForeNoon,isAfterNoon,} = useContext(DataContext);
  return (
    <>
      <section className="container" id="allocation">
        <section className="results-container" id="pdf-content">
          {allocatedData.map((data, index) => (
            <table border="1" id={examHall[index]} key={index} className="allocation">
              <thead>
                <tr>
                  <th colSpan={4} className="thead">ANNA UNIVERSITY CHENNAI</th>
                </tr>
                <tr>
                <th colSpan={4} className="thead">THEORY EXAMININATION - 2024</th>
                </tr>
                <tr>
                <th colSpan={2} className="thead">DATE : {date}</th>
                <th colSpan={2} className="thead">
                  Session : { isForeNoon? 'F.N' : isAfterNoon ? 'A.N' : 'F.N | A.N'}
                </th>
                </tr>
                <tr>
                <th colSpan={4} className="thead">HALL NO : {examHall[index]}</th>
                </tr>
                <tr>
                  <th colSpan={1} className="thead-bg">SEAT NO</th>
                  <th colSpan={1} className="thead-bg">REGISTERED NUMBER</th>
                  <th colSpan={1} className="thead-bg">NAME OF THE CANDIDATE</th>
                  <th colSpan={1} className="thead-bg">SUBJECT CODE</th>
                </tr>
              </thead>
              <tbody key={index}>
                {/* checking is students  have exam or not */}
                {data[examHall[index]].map((student, index) => (
                  <tr key={index}>
                    <td className="tdata" style={{fontWeight:'bolder'}}>{index + 1}</td>
                    <td colSpan={1} className="tdata">{student.registerNumber}</td>
                    <td colSpan={1} className="tdata">{`${student.firstName} ${student.lastName}`}</td>
                    <td className="tdata">{student.exam}</td>
                  </tr>
                ))}
              </tbody>
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
