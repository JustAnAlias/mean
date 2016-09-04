var names = ["Rasmus","mikkel","Ole","Søren","Jens"];

function myforEach(arr,callback){
    for(var i =0; i < arr.length; i++){w
        callback(arr[i]);
    }
}

function myFilter(arr,callback){
    for(var i =0; i < arr.length; i++){
        if(arr[i].length <= 3) {
            callback(arr[i]);

        }
    }
}

function myMap(arr,callback){
    for(var i =0; i < arr.length; i++){
        callback(arr[i].toUpperCase());
    }
}

console.log("Opg 2.1")
console.log("###########")
myforEach(names,function(name){
    console.log(name);

});

console.log("Opg 2.2")
console.log("###########")
myFilter(names,function(name){
    console.log(name);

});

console.log("Opg 2.3")
console.log("###########")
myMap(names,function(name){
    console.log(name);

});

function myforEach2(callback){
    for(var i =0; i < this.length; i++){
        callback(this[i]);
    }
}

function myFilter2(callback){
    for(var i =0; i < this.length; i++){
        if(this[i].length <= 3) {
            callback(this[i]);

        }
    }
}

function myMap2(callback){
    for(var i =0; i < this.length; i++){
        callback(this[i].toUpperCase());
    }
}

Array.prototype.myforEach = myforEach2;
Array.prototype.myFilter = myFilter2;
Array.prototype.myMap = myMap2;

console.log("Opg 3.1")
console.log("###########")
names.myforEach(function(name){
    console.log(name);

});

console.log("Opg 3.2")
console.log("###########")
names.myFilter(function(name){
    console.log(name);

});

console.log("Opg 3.3")
console.log("###########")
names.myMap(function(name){
    console.log(name);

});

console.log("Opg 4.1")
console.log("###########")

var a = [1,2,3];
var b = [1,2,3];


function handleNumArrays1(a, b, callback){
    var array = [];
    for(var i =0; i < a.length; i++){
        array.push(a[i] + b[i]);
    }
    callback(array);
}




handleNumArrays1(a,b,function(res){
    console.log(res.join(","));
})

console.log("Opg 4.2")
console.log("###########")

function handleNumArrays2(a, b, callback){
    var number = 0;
    for(var i =0; i < a.length; i++){
        number += a[i] + b[i];
    }
    callback(number);
}




handleNumArrays2(a,b,function(res){
    console.log(res);
})

console.log("Opg 4.3")
console.log("###########")

function handleNumArrays3(a, callback){
    var array = [];
    for(var i =0; i < a.length; i++){
        array.push(a[i] * 10);
    }
    callback(array);
}




handleNumArrays3(a,function(res){
    console.log(res.join(","));
})


console.log("Opg 5");

var a2 = 5;


var hosting = function(){
    var c2 = a2+b2;
    console.log("a2 is: " + a2 + " b2 is: " + b2 + " c2 is: " + c2)

}
hosting();

var b2 = 4;

function Hosting2(){
    llama();
    Spider();

    function llama(){
        console.log("I'm a llama");
    }

    function Spider(){
        console.log("I'm spider");
    }
}

Hosting2();