/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr
    .filter((arr) => arr.marks > 50)
    .map((arr) => console.log(arr));
  
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
   arr.forEach((student) => {
    if (arr.marks > 50) {
      console.log(arr);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newarr = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newarr);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  console.log("\nRemoving failed students:");
  arr = arr.filter((arr) => arr.marks >= 50);
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
   let newStudents = [
    { id: 5, name: "jane", age: "21", marks: 75 },
    { id: 6, name: "jim", age: "19", marks: 90 },
    { id: 7, name: "jessica", age: "18", marks: 60 },
  ];
  arr = arr.concat(newStudents);
  console.log(arr);
}
