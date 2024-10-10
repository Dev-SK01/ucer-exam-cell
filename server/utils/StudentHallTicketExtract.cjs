async function StudentHallTicketExtract(pdf) {
    let studentData = [];
    let i, j;
    for (j = 0; j < 1; j=j+2   ) {
        // let registerNumber;
        // let firstName;
        // let lastName;
        // let regulation;
        // let subjects = [];
        // let numberOfSubjects;
        // let department;
        // let index;

        //Setting position for loop execution
        var SetPosition=0;
        //Total exams of the student
        var ExamcountInHallTicket=0;

        for (let i = 0; i <= pdf.Pages[j].Texts.length - 1; i++) {
            //console.log(i,pdf.Pages[j].Texts[i].R[0].T)
            if (pdf.Pages[j].Texts[i].R[0].T==='Registered%3A' && ExamcountInHallTicket==0){
                var ExamcountInHallTicket=pdf.Pages[j].Texts[i+1].R[0].T;
                i=0;   
            }
            
            if( ExamcountInHallTicket > 0 ){
                if( pdf.Pages[j].Texts[i].R[0].T === 'Title' ){
                    var SubjectCode=i+21;
                    if( ExamcountInHallTicket >= 15 ){
                        var SetlimitForCodeAtRightColumn = 15;
                    }else{
                        SetlimitForCodeAtRightColumn = ExamcountInHallTicket
                    }
                    
                    for( let i = SubjectCode; i < SubjectCode + SetlimitForCodeAtRightColumn; i++ ){
                        console.log(pdf.Pages[j].Texts[i].R[0].T);
                        SetPosition = i + 1
                    }  
                    if(SetPosition != 0){
                        i = i + SetPosition;
                    } 
                }   
            }
            if( ExamcountInHallTicket > 0 ){
                
                if( pdf.Pages[j].Texts[i].R[0].T === 'Applied' ){
                    SubjectCode=i-1;
                    if( ExamcountInHallTicket >= 15 ){
                        var SetlimitForCodeAtLeftColumn = ExamcountInHallTicket - 16;
                    }
                    
                    for( let i = SubjectCode - SetlimitForCodeAtLeftColumn; i <= SubjectCode; i++ ){
                        console.log(pdf.Pages[j].Texts[i].R[0].T);
                        SetPosition = i + 1
                    }   
                    if( SetPosition != 0){
                        i = i + SetPosition;
                    } 
                }
                
                
            }
            
        }
    }
}
module.exports = StudentHallTicketExtract;