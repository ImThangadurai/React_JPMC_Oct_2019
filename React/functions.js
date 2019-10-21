
// implicit args  ==> this, arguments
function sum(x, y){
    console.log("in sum");
    console.log("this", this);
    console.log("arguments", arguments);
}

// function sum(){
//     console.log("in sum no args");
// }
// sum(2,3);
// sum();
// sum(2,3,4,5,6);

//Arraw functions ==>  no args  ==> this, arguments

// Callbacks and Async code
// Functional API's

var obj = {
    id: 1,
    print: function(){
        console.log("id: ", this.id);
        // setTimeout(function(){
        //     console.log("id: ", this.id);
        // }, 2000);
        setTimeout(()=>{
            console.log("id: ", this.id);
        }, 2000);
    }
} 

obj.print();
