const binarySearch = (arr, target)=>{
    
    let start = 0;
    let end = arr.length -1;

    while(start <= end){

        const mid = Math.floor((start + end)/2);

        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] > target){
            end = mid - 1;
        }else{
            start = mid  + 1;
        }

    }

    return -1;
}

const arr = [3, 8, 14, 21, 29, 35, 42, 50, 61, 73, 88, 95];

console.log(binarySearch(arr, 95));
console.log(binarySearch(arr, 42));
console.log(binarySearch(arr, 3));
console.log(binarySearch(arr, 100));
console.log(binarySearch([42], 42));
