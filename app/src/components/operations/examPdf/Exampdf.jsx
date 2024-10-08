import { React } from "react";
import "./exampdf.css";
import Alert from "../../Alert";

const Exampdf = ({
  setFile,
  isUploading,
  Error,
  handlePdfUpload,
  studentStorage,
  examStorage,
}) => {
  return (
    <div className="exam-container">
      <p>Exam Schedule PDF</p>
      {isUploading ? <Alert alterText={"Getting Data From Server"} /> : <></>}
      {Error ? <Alert alterText={"Error In The Server"} /> : <></>}
      <div className="exam-input" style={{ backgroundColor: "#D9D9D9" }}>
        <input
          type="file"
          name="exampdf"
          id="exampdf"
          accept=".pdf"
          multiple={true}
          onChange={(e) => setFile(e.target.files)}
        />
        <button
          className="upload-btn"
          onClick={() => handlePdfUpload("ExamDates")}
          disabled = {examStorage ? true : false}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            width="30px"
            viewBox="0 -960 960 960"
            fill="#78A75A"
          >
            <path d="M190-140h580q13 0 21.5 8.5T800-110q0 13-8.5 21.5T770-80H190q-13 0-21.5-8.5T160-110q0-13 8.5-21.5T190-140Zm200-100q-13 0-21.5-8.5T360-270v-250H260q-19 0-26.5-16.5T237-568l219-282q5-6 11-8.5t13-2.5q7 0 13 2.5t11 8.5l218 282q11 15 3.5 31.5T699-520h-99v250q0 13-8.5 21.5T570-240H390Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Exampdf;
