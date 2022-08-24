import TextMap from "./GenshinData/TextMap/TextMapEN.json" assert { type: 'json' };;
//import every file from /data/*.json

import AvatarExcel from "./GenshinData/ExcelBinOutput/AvatarExcelConfigData.json" assert { type: 'json' };;
import GadgetExcel from "./GenshinData/ExcelBinOutput/GadgetExcelConfigData.json" assert { type: 'json' };;
import MonsterExcel from "./GenshinData/ExcelBinOutput/MonsterExcelConfigData.json"assert { type: 'json' };;


function getText(id){
    return TextMap[id.toString()];
}

function parseAvatars(){
    let result = {};
    for(let avatar of AvatarExcel){
        let name = getText(avatar.nameTextMapHash);
        result[avatar.id] = name;
    }
    return result;
}


function parseGadgets(){
    let result = {};
    for(let gadget of GadgetExcel){
        let name = gadget.jsonName// == "" ? gadget.id: gadget.jsonName;
        result[gadget.id] = name;
    }
    return result;
}

function parseMonsters(){
    let result = {};
    for(let monster of MonsterExcel){
        let name = getText(monster.nameTextMapHash);
        result[monster.id] = name;
    }
    return result;
}


let final = {
    ...parseAvatars(),
    ...parseGadgets(),
    ...parseMonsters()
}
import fs from "fs"

fs.writeFileSync("../src/resources/FriendlyNames.json", JSON.stringify(final, null, 4));


//turn final into csv
let csv = "";
for(let key in final){
    csv += final[key] + "," + key + "\n"
}


fs.writeFileSync("./csv2.csv", csv)



