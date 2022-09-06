# DNTK frontend


## Types
Only the below used types and their dependencies were added to the repo.


```
AbilityInvocationsNotify
AbilityInvokeArgument
AbilityActionCreateGadget
AbilityInvokeEntry
AbilityMetaModifierChange
EntityMoveInfo
EvtBeingHitInfo
CombatInvocationsNotify
CombatTypeArgument
ProtEntityType
EntityFightPropNotify
EntityFightPropUpdateNotify
EvtCreateGadgetNotify
EvtDestroyGadgetNotify
PlayerEnterSceneInfoNotify
SceneEntityAppearNotify
SceneEntityDisappearNotify
SceneTeamUpdateNotify
VisionType
UnionCmdNotify
PacketHead
```

These were generated with a slightly modified version of ts-proto 
due to c#'s protoc only generating in PascalCase, 
unlike ts-proto's options of camelCase or snake_case.


## *.dntkap files

They should be pretty easily parsed as:
```js
const fs = require("fs");

const file = fs.readFileSync("./Log.dntkap").toString("utf-8");

const pkts = file.split("█▄█\n")
console.log("found " + pkts.length + " packets");

const out = pkts.map((pkt) => {
    const strdata = Buffer.from(pkt, "base64").toString("utf-8");
    const jsonData = JSON.parse(strdata);
    /*

    {
        time: 000 //SentMs from server/client
        sender: 1 //1 for Client, 0 for Server
        data: {} //object with packet data
        cmd: "EntityFightPropNotify" //name of packet
    }
    */
    jsonData.data = {
        "lolNo": "replaced for privacy"
    }
    return jsonData;
});


console.log(out);
```