const fs = require("fs");
var cc = require("./cc.json");

exports.handleCommand = function(input, id) {

    if(input.startsWith("create-cc")) {
        if(id == "334911278298562561") {
            var namevalue = input.slice(10, input.length);
            var spaceloc = namevalue.indexOf(" ");
            var nname = namevalue.slice(0, spaceloc).toLowerCase();
            var nvalue = namevalue.slice(spaceloc+1, namevalue.length);
        
            cc.list.push({
                name: nname,
                value: nvalue
            });

            console.log(cc);

            var ccjson = JSON.stringify(cc, null, 4);

            fs.writeFile("./zCommands/cc.json", ccjson);

        return "Command successfully created! Typing `Z!" + nname +"` will output `" + nvalue +"` now!" ;
        }

        else {
            return "You do not have the permission to create custom commands!";
        }
    }
    
    else if(input.startsWith("delete-cc")) {
        if(id == "334911278298562561") {
            var dname = input.slice(10, input.length);
            for(var j=0; j<cc.list.length; j++) {
                if(dname == cc.list[j].name) {
                    cc.list.splice(j, 1);

                    var ccjson2 = JSON.stringify(cc, null, 4);
                    fs.writeFile("./zCommands/cc.json", ccjson2);

                    return "Command successfully deleted!";
                }
            }
        }

        else {
            return "You do not have the permissions to delete custom commands!";
        }
    }

    else if(input == "list-cc") {
        var plist = cc.list[0].name;
        for(var k=1; k<cc.list.length; k++) {
            plist = plist + ", " + cc.list[k].name;
        }
        return plist;
    }
    
    else if(input == "version"){
        //.
    }

    else {
        for(var i=0; i<cc.list.length; i++) {
            input = input.toLowerCase();
            if(input == cc.list[i].name) {
                return cc.list[i].value;
            }
        }
    }
};