var obj = {
    id: 10,
    print: function(){
        console.log("Id: ", this.id);
    },
    somefn: function(msg){
        console.log("Id: ", this.id);
        console.log("Msg: ", msg);
    }

}
obj.print();

var emp = {
    id: 200
};

//emp.print();
var fn=obj.print.bind(emp);
fn();

var fn1 = obj.somefn.bind(emp);
fn1("this is a message");

var fn2 = obj.somefn.bind(emp, "Test msg");
fn2();





