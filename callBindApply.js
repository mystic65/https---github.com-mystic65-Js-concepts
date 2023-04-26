// call, bind & apply

// let userDetails={
//     name:"Manish kumar",
//     Age:28,
//     Designation: "SDE",
//     printDetails:function(){
//         console.log(this);
//     }
// }

// userDetails.printDetails();

// let userDetails2={
//     name:"Rohit kumar",
//     Age:22,
//     Designation: "SDE"
// }

    // call
// userDetails.printDetails.call(userDetails2);
// //apply
// userDetails.printDetails.apply(userDetails2);

// //bind
// let store= userDetails.printDetails.apply(userDetails2);
// store();
//suppose mujhe second object ki bhi details print karni hai to me baar baar to function call nhi krunga to isko
// solve karne ke liye CALL function ka use krte hai


// another example of bind call & apply

// const test = {
//     a:120,
//     b:220
// };

// function tester(a,b){
//     return `a:${this.a} and b:${this.b}`;
// }

// console.log(tester.call(test));

// console.log(tester.apply(test));

// const binding = tester.bind(test);
// console.log(binding());

var car = {
    regNo: "DL8535",
    brand:"Hero",
    
    printDetails: function(ownerName1, ownerName2){
        console.log(ownerName1 +", this is your car : " + this.regNo + " " + this.brand);
        console.log(ownerName2 +", this is your car : " + this.regNo + " " + this.brand);
    }
}

//call method;
// car.printDetails();

//bind method without parameter
// var carDetails = car.printDetails.bind(car);
// carDetails();

//******* bind method using parameters ************ */
// var carDetails = car.printDetails.bind(car, "Manish");
// carDetails();

// ******** Apply method *********            
car.printDetails.apply(car,["Manish", "Rohit"]);


//  question 1st //append array
const array = ["a", "b"];
const elements  = [0,1,2];

array.push.apply(array,elements);
console.log(array);


// Question :-2 find max & min of array

const numbers = [5,6,3,1,9];

console.log(Math.max.apply(null, numbers));