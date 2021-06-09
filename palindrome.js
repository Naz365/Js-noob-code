var world =["hello","man","eye","brush","madam"];
var worldSplit = [];

var worldSplit2 = [];

for (var i=0;i<=world.length;i++){
    worldSplit[i]= world[i].split("");
    worldSplit[i] = worldSplit[i].reverse();
    worldSplit2[i] = worldSplit[i].join("");
if (world[i]===worldSplit2[i])

{
    console.log(world[i]+" is a palindrome ");
}
else
  console.log(world[i]+" is not a palindrome ");

}


/*for (let i=0;i<=arr.length;i++){


}*/
    /*if (arr == arr.split('').reverse().join('')) {
       // console.log(arr[i] + ' is palindrome.');
//let arrSplit = arr.split('')*/