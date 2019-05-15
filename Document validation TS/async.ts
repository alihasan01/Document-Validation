(function () {
    "use strict";
   
    var walk = require('walk');
    var fs = require('fs');
    var options;
    var walker;
    var Filearray : string [] = [];
    options = {
      followLinks: false
      // directories with these keys will be skipped
    , filters: ["Temp", "_Temp"]
    };
   
    //walker = walk.walk("D:/Office/public/bis/domains/", options);
   
    // OR
     walker = walk.walkSync("D:/Office/public/bis/domains/", options);
   
    walker.on("names", function (root, nodeNamesArray) {
      nodeNamesArray.sort(function (a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      });
    });
   
    walker.on("directories", function (root, dirStatsArray, next) {
      // dirStatsArray is an array of `stat` objects with the additional attributes
      // * type
      // * error
      // * name
   
      next();
    });
   
    walker.on("file", function (root, fileStats, next) {
      fs.readFile(fileStats.name, function () {
        // doStuff
        Filearray.push(root + "/" +fileStats.name);
        //console.log(root + "/" +fileStats.name);
        next();
      });
    });
   
    walker.on("errors", function (root, nodeStatsArray, next) {
      next();
    });
   
    walker.on("end", function () {
      console.log("all done");
      for (var i in Filearray)
      {
          //console.log(Filearray[i])
      }
    });
  }());