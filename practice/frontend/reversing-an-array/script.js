// function reverseArray (arr) {
//     return arr.reverse();
// }

// console.log(reverseArray(['a', 'b', 'c', 'd', 'e']))

function reverseArrayInPlace (arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

console.log(reverseArrayInPlace(['a', 'b', 'c', 'd', 'e']))
