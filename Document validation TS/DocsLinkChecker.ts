import { listenerCount } from "cluster";
const path = require('path');
const fs = require('fs');
var walk    = require('walk');
const walkSync = require('walk-sync');

class LinkCheker { 
        FileArray : string[] = [];
        initialize() : LinkCheker
        {
            var object = new LinkCheker();
            var __dirname = "D:/Office/public/bis";
            const directoryPath = path.join(__dirname, 'domains');
            //passsing directoryPath and callback function        
            fs.readdirSync(directoryPath).forEach(file => {
            // console.log(file);
            object.FileArray.push(file)
        });
            return object;
        }

       
}

export async function Walker() 
{
    
    var obj1 = new LinkCheker();
    var files  : string[] = [];
    var __dirname = "D:/Office/public/bis/domains/";
    // Walker options
    var walker  = walk.walk(__dirname, { followLinks: true });
    
    walker.on('file', function(root, stat, next) {
        // Add this file to the list of files
        files.push(root + '/' + stat.name);
        next();
    });
    console.log("Hello " + files.length);
    walker.on('end', function() {
      // console.log(files);
    });
    //console.log("Hello " + files.length);
    return files;
}

    var obj = new LinkCheker();
    var obj  = obj.initialize();
    console.log("Out side of array :  " + obj.FileArray.length) 

    for (var i in obj.FileArray)
    {
        console.log(obj.FileArray[i]);
    }
    var obj2 =  new LinkCheker();
    var nums =  Walker();
    for (var i in nums)
    {
        console.log(nums[i]);
    }