const fs = require('fs');


const proto_path = process.argv[2];
/**
 * assuming directory structure is like this:
 * /raw
 * /translated
 *    /protos
 *    packetIds.json 
 */

function createOpcodeCsFile(){
    let str = `namespace Common;\n`
    str += `public enum Opcode {\n`
    str += `    None = 0,\n`

    const packetIds = JSON.parse(fs.readFileSync(`${proto_path}/translated/packetIds.json`));
    for (const key in packetIds) {
        str += `    ${packetIds[key]} = ${key},\n`
    }
    str += `}\n`
    fs.writeFileSync(`./Common/Opcode.cs`, str);
}

function copyProtos(){
    const protolist = [
        // "PacketHead.proto",
        "GetPlayerTokenReq.proto",
        "GetPlayerTokenRsp.proto",
        "AvatarDataNotify.proto",
        "AvatarFightPropNotify.proto",
        "AvatarFightPropUpdateNotify.proto",
        "CombatInvocationsNotify.proto",
        "PlayerEnterSceneInfoNotify.proto",
        "UnionCmdNotify.proto",
        "AbilityInvocationsNotify.proto",
        "SceneTeamUpdateNotify.proto",
        "SceneEntityDisappearNotify.proto",
        "SceneEntityAppearNotify.proto",
        "PlayerEnterSceneNotify.proto",    
    ]

    const includes = []

    const proto_source = `${proto_path}/translated/protos`
    //copy dependencies + protolist to ./protos

    while(protolist.length > 0){
        const proto = protolist.shift()
        includes.push(proto)
        const proto_path = `${proto_source}/${proto}`
        const proto_content = fs.readFileSync(proto_path, 'utf8')
        const proto_imports = proto_content.match(/import\s+"(.*)";/g)
        if(proto_imports){
            proto_imports.forEach(proto_import => {
                const import_proto = proto_import.match(/import\s+"(.*)";/)[1]
                if(!includes.includes(import_proto)){
                    protolist.push(import_proto)
                }
            })
        }
    }
    //copy dependencies + protolist to ./protos
    includes.forEach(proto => {
        const protocontents = fs.readFileSync(`${proto_source}/${proto}`, 'utf8');
        //replace "syntax = "proto3";" with ""syntax = "proto3";\noption csharp_namespace = "Common";""
        const protocontents_new = protocontents.replace(/syntax\s=\s"proto3";/, `syntax = "proto3";\noption csharp_namespace = "Common.Protobuf";`)


        fs.writeFileSync("./Common/Proto/"+proto, protocontents_new)
    })
}
function copyAllProtos(){
    const protolist = [
        // "PacketHead.proto", 
    ]

    const includes = []

    const proto_source = `${proto_path}/translated/protos`
    fs.readdirSync(proto_source).forEach(file => {
        if(file.endsWith(".proto")){
            protolist.push(file.split("/").pop())
        }
    })
    console.log(protolist)
    //copy dependencies + protolist to ./protos

    while(protolist.length > 0){
        const proto = protolist.shift()
        includes.push(proto)
        const proto_path = `${proto_source}/${proto}`
        const proto_content = fs.readFileSync(proto_path, 'utf8')
        const proto_imports = proto_content.match(/import\s+"(.*)";/g)
        if(proto_imports){
            proto_imports.forEach(proto_import => {
                const import_proto = proto_import.match(/import\s+"(.*)";/)[1]
                if(!includes.includes(import_proto)){
                    protolist.push(import_proto)
                }
            })
        }
    }
    //copy dependencies + protolist to ./protos
    includes.forEach(proto => {
        const protocontents = fs.readFileSync(`${proto_source}/${proto}`, 'utf8');
        //replace "syntax = "proto3";" with ""syntax = "proto3";\noption csharp_namespace = "Common";""
        const protocontents_new = protocontents.replace(/syntax\s=\s"proto3";/, `syntax = "proto3";\noption csharp_namespace = "Common.Protobuf";`)


        fs.writeFileSync("./Common/Proto/"+proto, protocontents_new)
    })
}

createOpcodeCsFile();
// copyProtos();
copyAllProtos();