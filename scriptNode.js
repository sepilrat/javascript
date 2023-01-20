const fs = require("fs");
const txt ="ssslflflfsls";
fs.write("./archivo.txt",txt,()=>{
    
    try {
        console.log("archivo creado");
    } catch (error) {
        console.log("o se que paso");
    }
}
)
