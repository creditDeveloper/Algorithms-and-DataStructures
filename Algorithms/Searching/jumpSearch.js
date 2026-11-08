const jumpSearch = (arr, target) => {

    let length = arr.length;
    let prev = 0;

    if( length <= 0 || target > arr[length -1] || target < arr[0]){
        return - 1;
    }

    let jumpStep = Math.floor(Math.sqrt(length));
    let current = jumpStep;

    while(arr[Math.min(current,length -1)] < target){
        prev = current;
        current += jumpStep;
    }

    while(arr[prev] < target){
        prev++;
        if(prev > Math.min(current,length - 1)){
            return -1;
        }
    }

    if(arr[prev] === target){
        return prev;
    }else{
        return -1;
    }

}

const arr = [3, 8, 14, 21, 29, 35, 42, 50, 61, 73, 88, 95];

//test cases

console.log(jumpSearch(arr, 95));
console.log(jumpSearch(arr, 42));
console.log(jumpSearch(arr, 3));
console.log(jumpSearch(arr, 100));
console.log(jumpSearch([42], 42));