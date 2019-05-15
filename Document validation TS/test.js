"use strict";
var Car = /** @class */ (function () {
    function Car() {
        //field 
        //engine:string; 
        this.lisOfLinks = [];
    }
    //constructor 
    //constructor(engine:string) { 
    //   this.engine = engine 
    // }  
    //function 
    Car.prototype.disp = function () {
        console.log("Hello World  :   ");
        for (var i = 0; i < 5; i++) {
            this.lisOfLinks[i] = "i";
        }
    };
    Car.prototype.init = function () {
        for (var i = 0; i < 5; i++) {
            this.lisOfLinks[i] = "i";
        }
        for (var i = 0; i < 5; i++) {
            console.log("value is   :   " + this.lisOfLinks[i]);
        }
    };
    return Car;
}());
//create an object 
//var obj = new Car()
//access the field 
// console.log("Reading attribute value Engine as :  "+obj.init())  
//access the function
//obj.disp()
