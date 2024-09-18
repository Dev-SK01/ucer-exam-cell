export default function allocateExamHalls(examHall, studentData, setAllocatedData) {
    try {
        
        if (examHall.length != 0 || !studentData.length != 0) {
            let shuffledArray = [];
            const filteredData = filterStudentsByDepartment(studentData);
            let first_element = 0
            let arr1 = filteredData[0];
            let arr2 = filteredData[1];
            for (let i = 0; i < filteredData.length - 1; i++) {
                if (arr1.length != 0) {
                    if (arr2.length != 0) {
                        arr1 = arr1
                        arr2 = arr2
                    }
                    else {
                        arr1 = arr1
                        if (i == filteredData.length - 1) {
                            arr2 = filteredData[filteredData.length - 1]
                        }
                        else if (arr2.length == 0) {
                            arr2 = filteredData[i + 1]
                        }
                    }
                }
                else if (arr2.length != 0) {
                    arr2 = arr2
                    if (i == filteredData.length - 1) {
                        arr1 = filteredData[filteredData.length - 1]
                    }
                    else if (arr1.length == 0) {
                        arr1 = filteredData[i + 1]
                    }
                    else {
                        arr1 = filteredData[i + 1]
                    }
                }
                else {
                    arr1 = filteredData[i]
                    if (i == filteredData.length - 1) {
                        arr2 = filteredData[i]
                    }
                    else {
                        arr2 = filteredData[i + 1]
                    }
                }
                if (filteredData.length % 2 != 0 && i == filteredData.length - 3) {
                    let arr_last = filteredData[filteredData.length - 1]
                    while (arr1.length != 0 && arr2.length != 0) {
                        if (arr1.length != 0) {
                            shuffledArray.push(arr1[first_element])
                            arr1.shift()
                        }
                        if (arr2.length != 0) {
                            shuffledArray.push(arr2[first_element])
                            arr2.shift()
                        }
                        if (arr_last.length != 0) {
                            shuffledArray.push(arr_last[first_element])
                            arr_last.shift()
                        }
                    }
                }
                else {
                    while (arr1.length != 0 && arr2.length != 0) {
                        if (arr1.length != 0) {
                            shuffledArray.push(arr1[first_element])
                            arr1.shift()
                        }
                        if (arr2.length != 0) {
                            shuffledArray.push(arr2[first_element])
                            arr2.shift()
                        }
                    }
                }
            }
            for (let j = 0; j < filteredData.length; j++) {
                if (filteredData[j] != 0) {
                    for (let i = 0; i < filteredData[j].length; i++) {
                        shuffledArray.push(filteredData[j][i]);
                    }
                }
            }
            // constructing the allocated hall by hall number
            let hallAllocatedStudentsData = [];
            // reversing the array for a data construction
            // examHall.reverse();
            let hallIndex = 0;
            for (let i = 0; i < shuffledArray.length; i = i + 25) {
                hallAllocatedStudentsData.push({ [`${examHall[hallIndex]}`]: shuffledArray.slice(i, i + 25) });
                hallIndex++;
            }
            // state variable for the alocated student data
            setAllocatedData(hallAllocatedStudentsData);
            // console.log(studentData);
            // console.log(examHall);
            // console.log(filteredData);
            //console.log('Shuffled Array :', shuffledArray);
            // console.log(hallAllocatedStudentsData);
        } else {
            alert("Enter Exam Hall's !")
        }
    } catch (err) {
        alert(err.message)
        console.log(err.message)
    }
}

function filterStudentsByDepartment(studentData) {

    const filteredStudentsData = [];

    const CSE = studentData.filter((dataOfStudent) => {
        if (dataOfStudent.department == "Computer") {
            return dataOfStudent;
        }
    });
    const ECE = studentData.filter((dataOfStudent) => {
        if (dataOfStudent.department == "Electronics") {
            return dataOfStudent;
        }
    });
    const EEE = studentData.filter((dataOfStudent) => {
        if (dataOfStudent.department == "Electrical") {
            return dataOfStudent;
        }
    });
    const MECH = studentData.filter((dataOfStudent) => {
        if (dataOfStudent.department == "Mechanical") {
            return dataOfStudent;
        }
    });
    // const EECS = studentData.filter((dataOfStudent) => {
    //     if (dataOfStudent.department == "Civil") {
    //         return dataOfStudent;
    //     }
    // });
    const CIVIL = studentData.filter((dataOfStudent) => {
        if (dataOfStudent.department == "Civil") {
            return dataOfStudent;
        }
    });
    // pushing the filtered data by leaving the empty array   
    if(CSE.length!=0){
        filteredStudentsData.push(CSE);
    }
    if(ECE.length!=0){
        filteredStudentsData.push(ECE);
    }
    if(EEE.length!=0){
        filteredStudentsData.push(EEE);
    }
    if(MECH.length!=0){
        filteredStudentsData.push(MECH);
    }
    if(CIVIL.length!=0){
        filteredStudentsData.push(CIVIL);
    }
    // filteredStudentsData.push(EECS || []);
    // returning the filter department wise student data [[],[]]
    return filteredStudentsData;
}
