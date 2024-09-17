function Student_Sheduling(arrays){
    let new_arr= []
    console.log("pk",arrays);
    //let arrays=[[1,2,3,4,5],[6,7,8,9],[10,11,12],[13,14],[22]]
    let first_element=0
    let arr1=arrays[0];
    let arr2=arrays[1];
    for(let i=0;i<arrays.length-1;i++){
        if(arr1.length!=0){
            if(arr2.length!=0){
                arr1=arr1
                arr2=arr2
            }
            else{
                arr1=arr1
                if(i==arrays.length-1){
                    arr2=arrays[arrays.length-1]
                }
                else if(arr2.length==0){
                    arr2=arrays[i+1]
                }
            }
        }
        else if(arr2.length!=0){
            arr2=arr2
            if (i==arrays.length-1){
                arr1=arrays[arrays.length-1]
            }
            else if (arr1.length==0){
                arr1=arrays[i+1] 
            }
            else{
                arr1=arrays[i+1]
            }
        }
        else{
            arr1=arrays[i]
            if(i==arrays.length-1){
                arr2=arrays[i]
            }
            else{
                arr2=arrays[i+1]
            }
        }
        if (arrays.length % 2 !=0 && i==arrays.length-3){
            let arr_last=arrays[arrays.length-1]
            while(arr1.length != 0 && arr2.length != 0){
                if (arr1.length != 0){
                    new_arr.push(arr1[first_element])
                    arr1.shift()
                }
                if (arr2.length != 0){
                    new_arr.push(arr2[first_element])  
                    arr2.shift()
                }
                if (arr_last.length != 0){
                    new_arr.push(arr_last[first_element])  
                    arr_last.shift()
                }
            }
        }
        else{
            while(arr1.length != 0 && arr2.length != 0){
                if (arr1.length !=0){
                    new_arr.push(arr1[first_element])
                    arr1.shift()
                }
                if (arr2.length!=0){
                    new_arr.push(arr2[first_element])  
                    arr2.shift()
                }
            }
        }
    }
    for(let j=0;j<arrays.length;j++){
        if(arrays[j]!=0){
            for(let i=0;i<arrays[j].length;i++){
                new_arr.push(arrays[j][i]);
            }
        }
    }
    console.log('lp',new_arr);
    return new_arr;

}
export{Student_Sheduling}