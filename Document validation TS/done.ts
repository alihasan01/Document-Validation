var _getAllFilesFromFolder = function(dir) {

    var filesystem = require("fs");
    var results : string [] =[];

    filesystem.readdirSync(dir).forEach(function(file) {
        var final;
        final = dir+'/'+file;
        var stat = filesystem.statSync(final);

        if (stat && stat.isDirectory()) {
            results = results.concat(_getAllFilesFromFolder(final))
        } else results.push(final);

    });

    return results;

};
var nums = _getAllFilesFromFolder( "D:/Office/public/bis/");
for (var i in nums)
{
    console.log(nums[i])
}