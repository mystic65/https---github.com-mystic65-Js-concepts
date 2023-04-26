
// var sum = function(a){
//     console.log("live Viewers" +a);
    
//     var c=4;
//     //anonymous function jiska name nhi hota hai
//     return function(b){
//         return a+b+c;
//         // a & b are lexical ScriptProcessorNode, because they are accessable
//     }

// }

// var store = sum(2);
// console.log(store(5));

var sum=function(a,b,c){
    return{
        getSumTwo:function(){
            return a+b;       
        },
        getSumThree:function(){
            return a+b+c;       
        }
    }
}

var store = sum(3,4,5);
console.log(store.getSumTwo());
console.log(store.getSumThree());

