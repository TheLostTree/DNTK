import TextMap from "./data/TextMapEN.json" assert { type: 'json' };;
//import every file from /data/*.json

import AvatarExcel from "./data/AvatarExcelConfigData.json" assert { type: 'json' };;
import GadgetExcel from "./data/GadgetExcelConfigData.json" assert { type: 'json' };;
import MonsterExcel from "./data/MonsterExcelConfigData.json"assert { type: 'json' };;
import NpcExcel from "./data/NpcExcelConfigData.json" assert { type: 'json' };;

function getText(id){
    return TextMap[id.toString()];
}

function parseAvatars(){
    let result = {};
    for(let avatar of AvatarExcel){
        let name = getText(avatar.nameTextMapHash);
        result[name] = avatar.id;
    }
    return result;
}


function parseGadgets(){
    let result = {};
    for(let gadget of GadgetExcel){
        let name = gadget.jsonName// == "" ? gadget.id: gadget.jsonName;
        result[name] = gadget.id;
    }
    return result;
}

function parseMonsters(){
    let result = {};
    for(let monster of MonsterExcel){
        let name = getText(monster.nameTextMapHash);
        result[name] = monster.id;
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



