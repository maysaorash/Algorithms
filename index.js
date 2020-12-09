// Problem

// S1

// S2

// S3

// const = printA(s) => {
// 	console.log(s) // +1
// 	console.log(s + s)
// }
//  O(2) ~ O(1)

// O(n)

// const printEachItem = (arr = [0,1,2,3,4,5,6,7,8]) => {
// 	arr.forEach(item => {
// 		console.log(item)
// 		})  // +1 * arr.length; O(n)
// 	arr.forEach(item => console.log(item + item)// +1 * arr.length);O(n)
// 	arr.forEach(item => console.log(item + item)// +1 * arr.length);O(n)
// 	arr.forEach(item => console.log(item + item)// +1 * arr.length);O(n)
// }

// const printOdd = (arr = [1,2,3,4,5,6,7]){
// 	arr.forEach(item => { //+1
//   if (item % 2 === 0) { // % +1 +1
//    console.log(item); // +1 n/2
// 	 // O(3) * arr.lemgth ~ O(3) * O(n) ~ O(n) O(N) + O(C)*O(log n) 		
// 	}
// 	})
// }

// const multiplicationTable = (arr = [1,2,3,4,5,6,7,8,9])=> {
// 	for (i=0; i<arr.length; i++){
// 	for (j=0; j<arr.length; j++){
// 		console.log(arr[i] * arr[j]) //(O(2) * arr.length = n) arr.length
// 	 }
// 	} //1,000,000
//    arr.forEach(item => console.log(item)); O(n) //100
// }

// // (O(2) * n) *n) ~ O(n^2) + O(n) ~ O(n^2)

// // O(n) + O(n) = 3 * O(n)


/*Fund the largest number and print in a given array*/
const findLargest = (arr = [4,6,8,10]) => {
	let ans = 0; //+1
arr.forEach(num=>{ //+1
ans = Math.max(ans,num); //+2*N
})
console.log(ans);//+1
}

const findLargest = (arr = [4,6,8,10]) => {
	let ans = 0; //+1
arr.sort();
console.log(arr[arr.length - 1])
}


const findLargest = (arr = [4,6,8,10], arr2 = []) => {
	let ans = 0; //+1
arr.forEach(num=>{ //+1
ans = Math.max(ans,num); //+2*N
})
arr2.forEach(num=>{ //+1
ans = Math.max(ans,num); //+2*N
})
console.log(arr[arr.length - 1])
console.log(ans);//+1
// O(1) << NOT POSSIBLE
//O(log n) <<  NOT POSSIBLE
//
}

const reverseString = (word) => {
    const ans = "";
    for (var i = word.length - 1; i >= 0; i--) {
    ans = ans + word.charAt(i)
}
return ans;
}


function reverseString(word) {
    return word.split("").reverse().join("");
}
reverseString("hello");


function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');