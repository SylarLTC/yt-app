// // // const Stack = () => {
// // //     this.count = 0
// // //     this.storage = {}

// // //     this.push = function(value) {
// // //         this.storage[this.count] = value
// // //         this.count++
// // //     }

// // //     this.pop = function() {
//         // if (this.count === 0) return undefined
//         // this.count--
//         // let result = this.storage[this.count]
//         // delete this.storage[this.count]
//         // return result
// // //     }

// // //     this.peek = function() {
// // //         return this.storage[this.count - 1]
// // //     }

// // //     this.size = function() {
// // //         return this.count
// // //     }
// // // }

// // class Stack {
// //     constructor() {
// //         this.count = 0;
// //         this.storage = {};
// //     }
    
// //     push = (value) => {
// //         this.storage[this.count] = value;
// //         this.count++;
// //     }
// // }

// // var removeOuterParentheses = function(s) {
// //     const stack = new Stack();
          
// //     let countTotal = 0,
// //         countLeft = 0,
// //         countRight = 0,
// //         arr1 = [];

// //     for (let i in s) {
// //         if (s[i] === '(') {
// //             countLeft++;
// //         } else if (s[i] === ')') {
// //             countRight++;
// //         }
// //         stack.push(s[i]);
// //         countTotal++;

// //         if (countLeft === countRight) {
// //             const arr = Object.values(stack.storage);
// //             console.log(`Total: ${countTotal}; '(': ${countLeft}; ')': ${countRight}`);
// //             arr1.push(arr.slice((countTotal-(countLeft+countRight)+1), countTotal-1));
// //             countLeft = 0;
// //             countRight = 0;
// //         }
// //     }

// //     console.log(arr1.join('').replace(/,/gi, ''));
// // };

// // removeOuterParentheses("()()");

// // class Stack {
// //     constructor() {
// //         this.count = 0
// //         this.storage = []
// //     }

// //     push = (value) => {
// //         this.storage[this.count] = value
// //         this.count++
// //     }

// //     pop = () => {
// //         if (this.count === 0) return undefined
// //         let deleteValue = this.storage.splice(this.count-1, 1)
// //         this.count--
// //         return deleteValue
// //     }
// // }

// // var removeDuplicates = function(s) {
// //     const stack = new Stack()

// //     for (let char in s) {
// //         stack.push(s[char])
// //         if (stack.storage[stack.count-1] === stack.storage[stack.count-2]) {
// //             stack.pop()
// //             stack.pop()
// //         }
// //     }

// //     let finalString = ''

// //     for (let char in stack.storage) {
// //         finalString += stack.storage[char]
// //     }

// //     console.log(finalString)
// // };

// // removeDuplicates("abbaca");

// class Stack {
//     constructor() {
//         this.count = 0
//         this.storage = []
//     }

//     push = (value) => {
//         this.storage[this.count] = value
//         this.count++
//     }
// }

// var buildArray = function(target, n) {
//     const stack = new Stack();
//     let num = 1;

//     for (let i in target) {
//         if (num !== n+1) {
//             if (num !== target[i]) {
//                 stack.push('Push');
//                 stack.push('Pop');
//                 num++;
//                 i--;
//             } else {
//                 stack.push('Push');
//                 num++;
//             }
            
//         } else {
//             break;
//         }
//     }
//     console.log(stack.storage);
// };

// buildArray([2,3,4], 5)

// class Stack {
//     constructor() {
//         this.length = 0
//         this.memory = []
//     }

//     push = (value) => {
//         this.memory[this.length] = value
//         this.length++
//     }

//     pop = () => {
//         if (this.length === 0) return undefined

//         let deletedValue = this.memory.splice(this.length-1, 1)
//         this.length--
//         return deletedValue
//     }

//     sum = () => {
//         let sum = 0
//         for (let i=0; i<this.length; i++) {
//             sum += this.memory[i]
//         }
//         return sum
//     }
// }

// var calPoints = function(ops) {
//     let stack = new Stack()

//     for (let address=0; address<ops.length; address++) {
//         if (ops[address] !== '+' && ops[address] !== 'D' && ops[address] !== 'C') {
//             stack.push(parseInt(ops[address]))
//             console.log(`Added number: ${ops[address]}`)
//         } else {
//             console.log(`Stack memory after adding/deleting numbers: ${stack.memory}`)
//             if (ops[address] === '+') {
//                 let sumTwoPrevious = stack.memory[stack.length-2] + stack.memory[stack.length-1]
//                 console.log(`Second previous number: ${stack.memory[stack.length-2]}`)
//                 console.log(`First previous number: ${stack.memory[stack.length-1]}`)
//                 stack.push(sumTwoPrevious)
//             } else if (ops[address] === 'D') {
//                 let doublePrevious = stack.memory[stack.length-1] * 2
//                 console.log(`Doubled previos number as matched 'D': ${doublePrevious}`)
//                 stack.push(doublePrevious)
//             } else {
//                 console.log(`Deleted previos number as matched 'C': ${stack.memory[stack.length-1]}`)
//                 stack.pop()
//             }
//         }
//     }
//     console.log(`Total Stack sum: ${stack.sum()}`)
// };

// calPoints(["5","-2","4","C","D","9","+","+"])


// const CustomStack = function(maxSize) {
//     this.memory = []
//     this.length = 0
//     this.maxSize = maxSize
//     if (maxSize) return null
// };

// CustomStack.prototype.push = function(x) {
//     this.memory[this.length] = x
//     this.length++
//     if (this.length === this.maxSize) return
// };

// CustomStack.prototype.pop = function() {
//     if (this.length <= 0) return -1

//     let deletedValue = this.memory.splice(this.length-1, 1)
//     this.length--
//     return deletedValue
// };

// CustomStack.prototype.increment = function(k, val) {
//     this.memory[k] += val
// };

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

// class Stack {
//     constructor() {
//         this.memory = []
//         this.length = 0
//     }

//     push = (value) => {
//         this.memory[this.length] = value
//         this.length++
//     }

//     pop = () => {
//         if (this.length === 0) return undefined

//         const deletedValue = this.memory.splice(this.length-1, 1)
//         this.length--
//         return deletedValue
//     }
// }

// var minAddToMakeValid = function(s) {
//     const stack = new Stack()
//     for (let i=0; i<s.length; i++) {
//         stack.push(s[i])
//         if (stack.memory[stack.length-2] === '(' && stack.memory[stack.length-1] === ')') {
//             stack.pop()
//             stack.pop()
//         }
//     }
//     console.log(stack.length)
// };

// minAddToMakeValid(")())(()(")

const repeatedVal = (arr) => {
    const countVal = {}
    // let maxCount = 1
    // let mostRepeatedVal = arr[0]
    
    for (let i in arr) {
        const val = arr[i]
        if (countVal[val] !== undefined) {
            countVal[val]++
        } else {
            countVal[val] = 1
        }
    }
    console.log(countVal)
}

repeatedVal([5,7,5,7,4,5,7,7])
