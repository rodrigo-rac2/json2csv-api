const { Parser, transforms: { unwind } } = require('json2csv');

module.exports = () => {
    const controller = {};

    controller.convertjson2csv = (req, res) => {
        const json2csvDB = require('../data/standardJSON.json');

        let indexes = Object.keys(json2csvDB)
        let columns = ["|"]
        let tmpObjArray = []

        for (let i = 0; i < indexes.length; i++) {
            let tmpJson = ""
            tmpJson = tmpJson + `{ "|": "${indexes[i]}",`
            let keys = Object.keys(json2csvDB[i]) //columns in i
            let values = Object.values(json2csvDB[i]) //values
            for (let j = 0; j < keys.length; j++) {
                let value =  ((values[j] == true) || (values[j] == false)) ? values[j] : `"${values[j]}"` 
                tmpJson = tmpJson + ` "|__${keys[j]}": ${value}` 

                if(j < keys.length - 1) { //no comma for the last guy
                    tmpJson = tmpJson + "," 
                }

                if (columns.lastIndexOf(`|__${keys[j]}`) === -1) { //building our fields criteria
                    columns.push(`|__${keys[j]}`)
                }
            }
            tmpJson = tmpJson + " }"
            console.log(tmpJson)
            let tmpObj = JSON.parse(tmpJson)
            tmpObjArray.push(tmpObj) 
        }

        const json2csvParser = new Parser(columns);

        const csv = json2csvParser.parse(tmpObjArray);

        res.status(200).json(csv);
    }

    controller.postJson = (req, res) => {
        const JSONString = req.body;

        let indexes = Object.keys(JSONString)
        let columns = ["|"]
        let tmpObjArray = []

        for (let i = 0; i < indexes.length; i++) {
            let tmpJson = ""
            tmpJson = tmpJson + `{ "|": "${indexes[i]}",`
            let keys = Object.keys(JSONString[i]) //columns in i
            let values = Object.values(JSONString[i]) //values
            for (let j = 0; j < keys.length; j++) {
                let value =  ((values[j] == true) || (values[j] == false)) ? values[j] : `"${values[j]}"` 
                tmpJson = tmpJson + ` "|__${keys[j]}": ${value}` 

                if(j < keys.length - 1) { //no comma for the last guy
                    tmpJson = tmpJson + "," 
                }

                if (columns.lastIndexOf(`|__${keys[j]}`) === -1) { //building our fields criteria
                    columns.push(`|__${keys[j]}`)
                }
            }
            tmpJson = tmpJson + " }"
            console.log(tmpJson)
            let tmpObj = JSON.parse(tmpJson)
            tmpObjArray.push(tmpObj) 
        }

        const json2csvParser = new Parser(columns);

        const csv = json2csvParser.parse(tmpObjArray);

        res.status(200).json(csv);
    }

    return controller;
}