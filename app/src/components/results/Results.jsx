import React from "react";
import "./results.css";
import resultLogo from "../../assets/header.svg";

const Results = ({ resultStudentData }) => {
  return (
    <>
      <section className="container" id="resRef">
        <p style={{ fontWeight: "bolder", fontSize: "1.3rem", color: "green" }}>
          Total Students : {resultStudentData.length}
        </p>
        <section className="results-container" id="pdf-content">
          <img
            src={resultLogo}
            alt="UCER LOGO"
            className="img-fluid  img-thumbnail"
            style={{ width: "100%", border: "none" }}
          />
          <table border="1" className="result">
            <thead style={{ position: "sticky", top: 0 }}>
              <tr>
                <th className="th">Register Number</th>
                <th className="th">Name</th>
                <th className="th">Department</th>
                <th className="th">Exam</th>
                <th className="th">Regulation</th>
              </tr>
            </thead>
            <tbody>
              {/* checking is students  have exam or not */}
              {resultStudentData.length ? (
                resultStudentData.map((resultData) => (
                  <tr key={resultData.id}>
                    <td className="td">{resultData.registerNumber}</td>
                    <td className="td">
                      {resultData.firstName +
                        "  " +
                        decodeURI(resultData.lastName)}
                    </td>
                    <td className="td">{resultData.department}</td>
                    <td style={{ color: "blue" }} className="td">
                      {resultData.exam}
                    </td>
                    <td className="td">{resultData.regulation}</td>
                  </tr>
                ))
              ) : (
                <tr key="001">
                  <td className="td">Students Not Found !</td>
                  <td className="td">Students Not Found !</td>
                  <td className="td">Students Not Found !</td>
                  <td className="td">Students Not Found !</td>
                  <td className="td">Students Not Found !</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </section>
    </>
  );
};

export default Results;
