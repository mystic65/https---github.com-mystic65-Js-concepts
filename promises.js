//Async Js programing
// callback, Asyncs, promises & Awaits.

const datas = [
    {name: "Manish", Profession: "Frontend developer"},
    {name: "Rohit", Profession: "Frontend developer"}
];

//set timeout we use when we want to execute something after a particular time
function getDatas(){
    setTimeout(() =>{
        let output = "";
        datas.forEach((data) =>{
            output+= `<li>${data.name} </li>`;
        })
        document.body.innerHTML=output;
    }, 1000);
}

// yaha se abhi output screen me only Manish or Rohit he show kar rhe hai kyuki jo upar vala function hai
// wo 1 sec me chal raha hai or 2nd wala function 2 sec me chal raha hai to isliye jab tak second vale ka naam show 
// hoga tab tak upar vala function baar baar refresh ho jata hai.

// ********* Now isko same time pe execute karne ke liye callbacks ka use krte hai *****
// ---------------This is a call back function --------------

// function createdata(newdata, callback){
//     setTimeout(()=>{
//         datas.push(newdata);
//         callback();
//     }, 2000);
// }

// createdata({name: "Mahesh", Profession: "Frontend developer"}, getDatas);

// *************** Now we are goonna use promises to get these datas very efficiently *******

function createdata(newdata){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            datas.push(newdata);
            let error = false;
            if(!error){
                resolve();
            }
            else{
                reject("Something went wrong");
            }
        }, 2000);
    })
}


//  then hota hai jab promises successfully execute ho jata hai
// createdata({name: "Mahesh", Profession: "Frontend developer"})
// .then(getDatas)
// .catch(err => console.log(err));


// ******** Now i am using async & await function*********
async function start(){
    await createdata({name: "Mahesh", Profession: "Frontend developer"});
    getDatas();
}

start();