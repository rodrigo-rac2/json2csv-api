const { Parser } = require('json2csv');

module.exports = () => {
    const json2csvDB = require('../data/customerWallets.json');

    let indexes = Object.keys(json2csvDB)

    console.log(Object.keys(json2csvDB))
    let jsonOutPut;

    for (let obj in json2csvDB) {
        if (Object.prototype.hasOwnProperty.call(json2csvDB, obj)) {
            // var val = json2csvDB[value];
            let itemKeys = Object.keys(json2csvDB[obj])
            jsonOutPut.push(itemKeys)
            console.log(Object.keys(json2csvDB[obj]))
        }
    }

//    console.log("jsonoutput: " + jsonOutPut)

    for (var value in json2csvDB) {
        if (Object.prototype.hasOwnProperty.call(json2csvDB, value)) {
            var val = json2csvDB[value];
            // use val
            //            console.log("index: " + JSON.stringify(val))
        }
    }
 
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(json2csvDB);

    const controller = {};

    controller.convertjson2csv = (req, res) => {
        res.status(200).json(csv);
    }

    controller.getRodrigo = (req, res) => {
        res.status(200).json("rodrigo");
    }

    return controller;
}