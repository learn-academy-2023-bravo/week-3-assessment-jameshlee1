// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
describe("fibonacci", () => {})
it("returns an array length containing the numbers of the Fibonacci sequence", () => {
    expect(fibonacci(fibLengthOne)).toEqual([1,1, 2, 3, 5, 8])
    expect(fibonacci(fibLengthTwo)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
})

const fibLengthOne = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLengthTwo = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
// Pseudocode: First create a function called fibonacci that will take in a number. Then create a variable returnArray which will hold the numbers. Then i will use the for loop that will iterate the returnArray starting at the second index and start the number input in increments starting at one.

const fibonacci = (number) => {
    let returnArray = [1, 1]
    for (let i = 2; returnArray.length < number; i++) {
      returnArray.push(returnArray[i - 1] + returnArray[i - 2])
    }
    return returnArray
  }
  console.log(fibonacci(fibLengthOne))

//   yarn run v1.22.19
//   warning package.json: No license field
//   $ /Users/learnacademy/Desktop/week-3-assessment-jameshlee1/jest-james/node_modules/.bin/jest
//     console.log
//       [ 1, 1, 2, 3, 5, 8 ]
  
//         at Object.log (jest.test.js:38:11)
  
//    PASS  ./jest.test.js
//     ✓ returns an array length containing the numbers of the Fibonacci sequence (1 ms)
  
//   Test Suites: 1 passed, 1 total
//   Tests:       1 passed, 1 total
//   Snapshots:   0 total
//   Time:        0.157 s, estimated 1 s
//   Ran all test suites.
//   ✨  Done in 0.52s.
  

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
describe("objective", () => {}) 
    it("returns an array of the values sorted from least to greatest.", () => {
        expect(objective(studyMinutesWeekOne )).toEqual([15, 15, 20, 30, 30, 60, 90])
        expect(objective(studyMinutesWeekTwo)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
const studyMinutesWeekOne = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// // Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeekTwo = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.
// Pseudocode: First create a function called objective that will take in a object. Then create a variable values and use the Object.values static method to extract the values. The I will use the .sort() method to sort the values together to define the sort order in ascending order.

const objective = (object) => {
    const values = Object.values(object)
    return values.sort((a,b) => a-b)
  }
  console.log(objective(studyMinutesWeekOne)) //[15, 15, 20, 30,30, 60, 90]
  console.log(objective(studyMinutesWeekTwo))

//   ✓ returns an array of the values sorted from least to greatest.

//   Test Suites: 1 passed, 1 total
//   Tests:       2 passed, 2 total
//   Snapshots:   0 total
//   Time:        0.163 s, estimated 1 s
//   Ran all test suites.
//   ✨  Done in 0.58s.
//   ➜  jest-james git:(main) ✗ 
  

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("newArray", () => {
    it("returns a new array with a sum or an empty array ", () => {
      expect(newArray(accountTransactionsOne)).toEqual([100, 83, 60, 51])
      expect(newArray(accountTransactionsTwo)).toEqual([250, 161, 261, 165])
      expect(newArray(accountTransactionsThree)).toEqual([])
    })
  })

const accountTransactionsOne = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactionsTwo = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactionsThree = []
// Expected output: []

// b) Create the function that makes the test pass.
// Pseudocode: First I will create a function called newArray that takes in an array as an argument. It will create a new empty array and then iterate through the input array. then create another variable name sum and set it to zero. then use an .map() method to iterate the array. The variable sum += to num so each number in the array will be added to the sum.

const newArray = (array) => {
    let sum = 0
    let newArray = array.map((num) => {
      sum += num
      return sum
    })
    return newArray
  }
  
//   PASS  ./jest.test.js
//     ✓ returns a new array with a sum or an empty array 

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.155 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.55s.