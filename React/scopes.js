console.log("x: ", x);
var x = 10;
console.log("x: ", x);

var y;;
console.log("y: ", y);

//console.log("z: ", z);

//function statement
function foo()
{
    console.log("foo...");
    if(x < 100){
        var msg = "Hello";
    }
    console.log("Msg: ", msg );
}
foo();
//IIFE (Immediately Invoked Function Expression)==> block scope

//function expression
var bar = function(){

};

(function(){
    console.log("iife...");
})();


function iffe()
{
    console.log("foo...");
    if(x < 100){
        (function(){
            var msg = "Test iife";
            console.log("Msg in iife: ", msg );
        })()
    }
    
}
iffe();

//ES6 Block scopes==> let const

function blockscopes(){

    if(x < 100){
        let test = "ABC";
        console.log("test in b_scopes: ", test);
    }
    //console.log("test in b_scopes: ", test);
}
blockscopes();


console.log("app over");