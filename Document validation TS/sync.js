"use strict";
(function () {
    "use strict";
    var walk = require('walk');
    var fs = require('fs');
    var options;
    var walker;
    var Filearray = [];
    // To be truly synchronous in the emitter and maintain a compatible api,
    // the listeners must be listed before the object is created
    options = {
        listeners: {
            names: function (root, nodeNamesArray) {
                nodeNamesArray.sort(function (a, b) {
                    if (a > b)
                        return 1;
                    if (a < b)
                        return -1;
                    return 0;
                });
            },
            directories: function (root, dirStatsArray, next) {
                // dirStatsArray is an array of `stat` objects with the additional attributes
                // * type
                // * error
                // * name
                next();
            },
            file: function (root, fileStats, next) {
                fs.readFile(fileStats.name, function () {
                    Filearray.push(root + "/" + fileStats.name);
                    // console.log(root + "/" +fileStats.name);
                    next();
                });
            },
            errors: function (root, nodeStatsArray, next) {
                next();
            }
        }
    };
    walker = walk.walkSync("D:/Office/public/bis/domains/", options);
    for (var i in Filearray) {
        console.log(Filearray[i]);
    }
    //console.log("all done");
}());
