class Car { 
    //field 
    //engine:string; 
    lisOfLinks : string[] = []; 
    //constructor 
    //constructor(engine:string) { 
    //   this.engine = engine 
   // }  
    
    //function 
    disp():void { 
       console.log("Hello World  :   ") 
       for (var i = 0; i < 5; i++) {
        this.lisOfLinks[i] = "i";
        }
       
    } 
    init():void { 
        for (var i = 0; i < 5; i++) {
                this.lisOfLinks[i] = "i";
        }

        for (var i = 0; i < 5; i++) {
            console.log("value is   :   "+this.lisOfLinks[i]) 
        }
     } 
 } 
 
 //create an object 
 //var obj = new Car()
 
 //access the field 
// console.log("Reading attribute value Engine as :  "+obj.init())  
 
 //access the function
 //obj.disp()