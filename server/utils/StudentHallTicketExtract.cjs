async function StudentHallTicketExtract(pdf) {
    const StudentsDetails = [];
    let j;
    for (j = 0; j <pdf.Pages.length; j=j+2   ) {
        let registerNumber=0;
        let firstName;
        let lastName;
        // let regulation;
        let subjects = [];
        // let numberOfSubjects;
        let department;
        // let index;

        //Setting position for loop execution
        let SetPosition=0;
        //Total exams of the student
        let ExamcountInHallTicket=0;
        let SetlimitForCodeAtRightColumn=0;
        let SubjectCode=0
        let SetlimitForCodeAtLeftColumn=0
        let i=0
        let OnePersonCompleted=false
        let secondColunm=false
        console.log("Page : ",j);
        while (!OnePersonCompleted) {
            //console.log(i,pdf.Pages[j].Texts[i].R[0].T)
            if(pdf.Pages[j].Texts[i].R[0].T==='Number'){
                registerNumber=pdf.Pages[j].Texts[i+1].R[0].T
            }
            if(pdf.Pages[j].Texts[i].R[0].T==='Name'){
                firstName=pdf.Pages[j].Texts[i+1].R[0].T;
                lastName=pdf.Pages[j].Texts[i+2].R[0].T;
            }
            if(pdf.Pages[j].Texts[i].R[0].T==='Branch'){
                department=pdf.Pages[j].Texts[i+2].R[0].T;
            }
            if (pdf.Pages[j].Texts[i].R[0].T==='Registered%3A' && ExamcountInHallTicket==0){
                ExamcountInHallTicket=pdf.Pages[j].Texts[i+1].R[0].T;
                console.log(ExamcountInHallTicket);
                i=0;   
            }
            
            if( ExamcountInHallTicket > 0 ){
                if( pdf.Pages[j].Texts[i].R[0].T === 'Title' ){
                    
                    if( Number(ExamcountInHallTicket) > 15 ){
                        SubjectCode=i+21;
                        SetlimitForCodeAtRightColumn = 15;
                    }else if( Number(ExamcountInHallTicket) === 15 ){
                        SubjectCode=i+21;
                        SetlimitForCodeAtRightColumn = 15;
                        OnePersonCompleted=true;
                    }
                    else{
                        SubjectCode=i+ Number(ExamcountInHallTicket)+6;
                        SetlimitForCodeAtRightColumn = Number(ExamcountInHallTicket)
                        OnePersonCompleted=true;
                    }
                    for( let i = SubjectCode; i < SubjectCode + Number(SetlimitForCodeAtRightColumn); i++ ){
                        console.log(pdf.Pages[j].Texts[i].R[0].T);
                        subjects.push(pdf.Pages[j].Texts[i].R[0].T);
                        SetPosition = i +   1
                    }  
                    if(SetPosition != 0){
                       i = i + SetPosition;
                    }
                    secondColunm=true; 
                }   
            }
            if( ExamcountInHallTicket > 0 ){
                if(secondColunm){
                    if( pdf.Pages[j].Texts[i].R[0].T === '01' || pdf.Pages[j].Texts[i].R[0].T === '02' || pdf.Pages[j].Texts[i].R[0].T === '03' || pdf.Pages[j].Texts[i].R[0].T === '04' || pdf.Pages[j].Texts[i].R[0].T === '05' || pdf.Pages[j].Texts[i].R[0].T === '06' || pdf.Pages[j].Texts[i].R[0].T === '07' || pdf.Pages[j].Texts[i].R[0].T === '08' ){
                        if( ExamcountInHallTicket > 30 ){
                            SetlimitForCodeAtLeftColumn = 15;
                        }else if( ExamcountInHallTicket === 30 ){
                            SetlimitForCodeAtLeftColumn = 15;
                            OnePersonCompleted=true;
                        }
                        else{
                            SetlimitForCodeAtLeftColumn=ExamcountInHallTicket - 15;
                            OnePersonCompleted=true;
                        }
                        SubjectCode=i+SetlimitForCodeAtLeftColumn;
                        for( let i = SubjectCode; i < SubjectCode+SetlimitForCodeAtLeftColumn; i++ ){
                            //console.log(pdf.Pages[j].Texts[i].R[0].T);
                            subjects.push(pdf.Pages[j].Texts[i].R[0].T);
                            SetPosition = i + 1
                        }
                        let GetDataFromSheetTwo=false;
                        i=0;
                        if(pdf.Pages[j+2].Texts[23].R[0].T === registerNumber ){
                            console.log("sk");
                            
                            while(!GetDataFromSheetTwo){
                                if( pdf.Pages[j+2].Texts[i].R[0].T === 'Title' ){
                                    if(ExamcountInHallTicket >= 30 && ExamcountInHallTicket <= 45){
                                        SubjectCode=i+Number(ExamcountInHallTicket)-30+6;
                                        SetlimitForCodeAtRightColumn = ExamcountInHallTicket-30;
                                    }else{
                                        SubjectCode=i+ Number(SetlimitForCodeAtLeftColumn)+6;
                                        SetlimitForCodeAtRightColumn = 15
                                    }
                                    for( let i = SubjectCode; i < SubjectCode+SetlimitForCodeAtRightColumn; i++ ){
                                        //console.log(i,pdf.Pages[j+2].Texts[i].R[0].T);
                                        subjects.push(pdf.Pages[j+2].Texts[i].R[0].T);
                                        SetPosition = i +   1
                                    }
                                    GetDataFromSheetTwo=true
                                }
                                i++;
                            }
                            j=j+2;
                        }
                    }
                    OnePersonCompleted=true;
                }
            }
            i=i+1
            
        }
        i=0;
        const StudentExams={registerNumber:registerNumber,firstname:firstName,lastname:lastName,department:department,subjects:subjects}
        StudentsDetails.push(StudentExams);
        
    }
    return StudentsDetails;
}
module.exports = StudentHallTicketExtract;