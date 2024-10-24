//Student data extration function from the Hall Ticket

async function StudentHallTicketExtract(pdf) {
    const StudentsDetails = [];
    let j;
    for (j = 0; j <pdf.Pages.length; j=j+2   ) {
        let registerNumber;
        let firstName;
        let lastName;
        let subjects = [];
        let department;
        //Text position for loop execution
        let SetPosition=0;
        //Total exams of the student
        let ExamcountInHallTicket=0;
        let SetlimitForCodeAtRightColumn=0;
        let SubjectCode=0;
        let SetlimitForCodeAtLeftColumn=0;
        let i=0;
        let OnePersonCompleted=false;
        let secondColumn=false;
        let GoToSheetTwo=false;
        let GetDataFromSheetTwo=false;
        let SheetTwoRightColumn=false;
        let TextData;
        let SemesterNum;
        let PageTwoReg;
        let PageTwoTitle;
        let SemesterNum2;
        while (!OnePersonCompleted) {
            //console.log(i,pdf.Pages[j].Texts[i].R[0].T)
            TextData=pdf.Pages[j].Texts[i].R[0].T
            if(TextData==='Number'){
                registerNumber=pdf.Pages[j].Texts[i+1].R[0].T
            }
            if(TextData==='Name'){
                firstName=pdf.Pages[j].Texts[i+1].R[0].T;
                lastName=pdf.Pages[j].Texts[i+2].R[0].T;
                if(lastName.includes("%")){
                    lastName=lastName.split("")[0];
                }
            }
            if(TextData==='Branch'){
                department=pdf.Pages[j].Texts[i+2].R[0].T;
            }
            //To getting a no.of exams count per hall ticket
            if (TextData==='Registered%3A' && ExamcountInHallTicket==0){
                ExamcountInHallTicket=pdf.Pages[j].Texts[i+1].R[0].T;
                i=0;   
            }
            //Condition for getting a subject code at the rightside column
            if( ExamcountInHallTicket > 0 ){
                if( pdf.Pages[j].Texts[i].R[0].T === 'Title' ){
                    if( Number(ExamcountInHallTicket) > 15 ){
                        SubjectCode=i+21;
                        SetlimitForCodeAtRightColumn = 15;
                        secondColumn=true;
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
                        //console.log(pdf.Pages[j].Texts[i].R[0].T);
                        subjects.push(pdf.Pages[j].Texts[i].R[0].T);
                        SetPosition = i +   1
                    }  
                    if(SetPosition != 0){
                       i = i + SetPosition;
                    }
                }   
            }
            //Condition for getting a subject code at the leftside column
            if( ExamcountInHallTicket > 0 ){
                if(secondColumn){
                    SemesterNum=pdf.Pages[j].Texts[i].R[0].T;
                    if( SemesterNum === '01' || SemesterNum === '02' || SemesterNum === '03' || SemesterNum === '04' || SemesterNum === '05' || SemesterNum === '06' || SemesterNum === '07' || SemesterNum === '08' ){
                        if( ExamcountInHallTicket > 30){
                            SetlimitForCodeAtLeftColumn = 15;
                            GoToSheetTwo=true;
                            
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
                        i=0;
                        //Condition for checking the next page wether a single person hold a additional sheet in hall ticket
                        if(GoToSheetTwo){
                            PageTwoReg=pdf.Pages[j+2].Texts[23].R[0].T;
                            if( PageTwoReg === registerNumber ){
                                while(!GetDataFromSheetTwo){
                                    PageTwoTitle=pdf.Pages[j+2].Texts[i].R[0].T
                                    if( PageTwoTitle === 'Title' ){
                                        if(ExamcountInHallTicket >= 30 && ExamcountInHallTicket <= 45){
                                            SubjectCode=i+Number(ExamcountInHallTicket)-30+6;
                                            SetlimitForCodeAtRightColumn = ExamcountInHallTicket-30;
                                            GetDataFromSheetTwo=true;
                                        }else{
    
                                            SubjectCode=i+ Number(SetlimitForCodeAtLeftColumn)+6;
                                            SetlimitForCodeAtRightColumn = 15
                                            SheetTwoRightColumn=true;
                                        }
                                        for( let i = SubjectCode; i < Number(SubjectCode+SetlimitForCodeAtRightColumn); i++ ){
                                            //console.log(i,pdf.Pages[j+2].Texts[i].R[0].T);
                                            subjects.push(pdf.Pages[j+2].Texts[i].R[0].T);
                                            SetPosition = i +   1
                                        }
                                        if(SetPosition != 0){
                                            i = i + SetPosition;
                                         }
                                    }
                                    
                                    if(SheetTwoRightColumn){
                                        SemesterNum2=pdf.Pages[j].Texts[i].R[0].T
                                        if( SemesterNum2 === '01' || SemesterNum2 === '02' || SemesterNum2 === '03' || SemesterNum2 === '04' || SemesterNum2 === '05' || SemesterNum2 === '06' || SemesterNum2 === '07' || SemesterNum2 === '08' ){
                                            if( ExamcountInHallTicket >= 46){
                                                SetlimitForCodeAtLeftColumn = 15;
                                                OnePersonCompleted=true;
                                            }else if( ExamcountInHallTicket === 60 ){
                                                SetlimitForCodeAtLeftColumn = 15;
                                                OnePersonCompleted=true;
                                                
                                            }
                                            else{
                                                SetlimitForCodeAtLeftColumn=ExamcountInHallTicket - 45;
                                                OnePersonCompleted=true;
                                                
                                            }
                                            SubjectCode=i+SetlimitForCodeAtLeftColumn;
                                            for( let i = SubjectCode; i < SubjectCode+SetlimitForCodeAtLeftColumn; i++ ){
                                                //console.log(pdf.Pages[j].Texts[i].R[0].T);
                                                subjects.push(pdf.Pages[j].Texts[i].R[0].T);
                                                SetPosition = i + 1
                                            }
                                            GetDataFromSheetTwo=true;
                                        }
                                    }
                                    i++;
                                }
                                
                                j=j+2;
                            }
                        }
                        OnePersonCompleted=true;
                    }
                }
            }
            i=i+1
            
        }
        const StudentExams={
            registerNumber:registerNumber,
            firstName:firstName,
            lastName:lastName,
            department:department,
            subjects:subjects
        }
        StudentsDetails.push(StudentExams);
        
    }
    return StudentsDetails;
}
module.exports = StudentHallTicketExtract;