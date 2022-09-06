const fs = require("fs")
const path = require("path")


//iterate over all files in src/packets and list all imports
const packetsDir = path.join(__dirname, "src", "packets")
const files = fs.readdirSync(packetsDir)
const imports = ["PacketHead"]
for (const file of files) {
    const content = fs.readFileSync(path.join(packetsDir, file), "utf-8")
    const lines = content.split("\r\n")    
    for (const line of lines) {
        if (line.startsWith("import")) {
            if(line.includes("/messages/")){
                //get the name of the message
                const messageName = line?.split("/messages/")[1]?.split(`"`)[0] || ""
                //check if the message is already imported
                if(!imports.includes(messageName)){
                    imports.push(messageName)
                }
            }
        }
    }
}

console.log(imports.join("\r\n"))