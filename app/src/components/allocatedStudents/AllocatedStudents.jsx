import React, { useContext } from 'react'
import '../results/results.css'
import DataContext from '../../context/dataContext'
const AllocatedStudents = () => {
    const {allocatedData,date,isForeNoon,isAfterNoon,examHall} = useContext(DataContext)

  return (
    <>
    <section className="container" id="resRef">
        
        <section className="results-container" id="pdf-content">
          { allocatedData.map((data,index) => (
                <table border="1" id="content" key={index}>
                <thead style={{ position: "sticky", top: 0 }}>
                    <tr>
                        <th>ANNA UNIVERSITY CHENNAI</th>
                        <th>THEORY EXAMININATION -2024</th>
                        <th>DATE : {date}</th>
                        <th>Session :{isForeNoon ? ' F.N' : ' A.N' } </th>
                        <th>HALL NO : {examHall[index]}</th>
                    </tr>
                  <tr>
                    <th>SEAT NO</th>
                    <th>REGISTERED NUMBER</th>
                    <th>NAME OF THE CANDIDATE</th>
                    <th>SUBJECT CODE</th>
                  </tr>
                </thead>
                <tbody>
                  {/* checking is students  have exam or not */}
                   {/* {data[index].map((student,index)=>(
                    <tr>
                    <td>{index}</td>
                    <td>{student.registerNumber}</td>
                    <td>{`${student.firstName} ${student.lastName}`}</td>
                    <td>{student.exam}</td>
                   </tr>
                  ))} */}
                  {console.log(examHall[1])}
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
  )
}

export default AllocatedStudents