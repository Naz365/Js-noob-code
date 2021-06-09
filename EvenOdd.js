let arr = [42, 53, 62, 58, 29];
console.log(arr);
for (let i = 0;i<=arr.length;i++){
    if(arr[i] % 2 == 0){
        console.log("This number is Even: "+ arr[i]);


    }
    else{
        console.log("This number is Odd: " +arr[i]);
    }
}
