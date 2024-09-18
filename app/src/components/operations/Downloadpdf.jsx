import React, { useContext, useState } from "react";
import "./operation.css";
import downloadBtn from "../../assets/Download.svg";
import jsPDF from "jspdf";
import Alert from "../Alert";
import autoTable from "jspdf-autotable";
import DataContext from "../../context/dataContext";

const Downloadpdf = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { examHall } = useContext(DataContext);
  const handleDownloadPDF = () => {
    setIsDownloading(true);
    const doc = new jsPDF();
    // condiditons for downloads
    if (examHall.length == 1) {
      autoTable(doc, { html: `[id='${examHall[0]}']` });
    } else if (examHall.length == 2) {
      autoTable(doc, { html: `[id='${examHall[0]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[1]}']`, useCss: true });
    } else if (examHall.length == 3) {
      autoTable(doc, { html: `[id='${examHall[0]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[1]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[2]}']`, useCss: true });
    } else if (examHall.length == 4) {
      autoTable(doc, { html: `[id='${examHall[0]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[1]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[2]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[3]}']`, useCss: true });
    }else if (examHall.length == 5) {
      autoTable(doc, { html: `[id='${examHall[0]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[1]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[2]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[3]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[4]}']`, useCss: true });
    }else if (examHall.length == 6) {
      autoTable(doc, { html: `[id='${examHall[0]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[1]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[2]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[3]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[4]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[5]}']`, useCss: true });
    }else if (examHall.length == 7) {
      autoTable(doc, { html: `[id='${examHall[0]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[1]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[2]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[3]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[4]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[5]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[6]}']`, useCss: true });
    }else if (examHall.length == 8) {
      autoTable(doc, { html: `[id='${examHall[0]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[1]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[2]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[3]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[4]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[5]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[6]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[7]}']`, useCss: true });
    }else if (examHall.length == 9) {
      autoTable(doc, { html: `[id='${examHall[0]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[1]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[2]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[3]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[4]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[5]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[6]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[7]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[8]}']`, useCss: true });
    }else if (examHall.length == 10) {
      autoTable(doc, { html: `[id='${examHall[0]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[1]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[2]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[3]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[4]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[5]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[6]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[7]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[8]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[9]}']`, useCss: true })
    }else if (examHall.length == 11) {
      autoTable(doc, { html: `[id='${examHall[0]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[1]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[2]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[3]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[4]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[5]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[6]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[7]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[8]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[9]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[10]}']`, useCss: true });
    }else if (examHall.length == 12) {
      autoTable(doc, { html: `[id='${examHall[0]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[1]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[2]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[3]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[4]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[5]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[6]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[7]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[8]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[10]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[11]}']`, useCss: true });
    }else if (examHall.length == 13) {
      autoTable(doc, { html: `[id='${examHall[0]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[1]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[2]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[3]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[4]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[5]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[6]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[7]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[8]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[10]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[11]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[12]}']`, useCss: true });
    }else if (examHall.length == 14) {
      autoTable(doc, { html: `[id='${examHall[0]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[1]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[2]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[3]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[4]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[5]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[6]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[7]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[8]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[10]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[11]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[12]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[13]}']`, useCss: true });
    }else if (examHall.length == 15) {
      autoTable(doc, { html: `[id='${examHall[0]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[1]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[2]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[3]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[4]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[5]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[6]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[7]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[8]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[10]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[11]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[12]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[13]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[14]}']`, useCss: true });
    }else if (examHall.length == 16) {
      autoTable(doc, { html: `[id='${examHall[0]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[1]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[2]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[3]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[4]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[5]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[6]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[7]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[8]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[10]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[11]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[12]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[13]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[14]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[15]}']`, useCss: true });
    }else if (examHall.length == 17) {
      autoTable(doc, { html: `[id='${examHall[0]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[1]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[2]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[3]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[4]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[5]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[6]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[7]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[8]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[10]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[11]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[12]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[13]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[14]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[15]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[16]}']`, useCss: true });
    }else if (examHall.length == 18) {
      autoTable(doc, { html: `[id='${examHall[0]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[1]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[2]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[3]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[4]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[5]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[6]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[7]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[8]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[10]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[11]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[12]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[13]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[14]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[15]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[16]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[17]}']`, useCss: true });
    }else if (examHall.length == 19) {
      autoTable(doc, { html: `[id='${examHall[0]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[1]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[2]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[3]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[4]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[5]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[6]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[7]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[8]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[10]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[11]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[12]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[13]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[14]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[15]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[16]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[17]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[18]}']`, useCss: true });
    }else if (examHall.length == 20) {
      autoTable(doc, { html: `[id='${examHall[0]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[1]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[2]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[3]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[4]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[5]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[6]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[7]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[8]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[10]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[11]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[12]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[13]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[14]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[15]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[16]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[17]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[18]}']`, useCss: true });
      doc.addPage();
      autoTable(doc, { html: `[id='${examHall[19]}']`, useCss: true });
    }
    doc.save(`${new Date().toLocaleDateString()}` + "-EXAM-STUDENTS.pdf");
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <>
      {isDownloading ? (
        <>
          <div className="download-btn" onClick={handleDownloadPDF}>
            <img src={downloadBtn} alt="Download" />
          </div>
          <Alert alterText={"Preparing PDF"} />
        </>
      ) : (
        <>
          <div className="download-btn" onClick={handleDownloadPDF}>
            <img src={downloadBtn} alt="Download" />
          </div>
        </>
      )}
    </>
  );
};

export default Downloadpdf;
