import fs from "fs";

const pkg = fs.readFileSync("./package.json");

// console.log(JSON.parse(pkg));

const pkgjson = JSON.parse(pkg);

pkgjson.name= "Dead-on-the-water";

fs.writeFileSync("./package.copy.json", JSON.stringify(pkgjson, null, 2));

// console.log("hello world");
console.log("complete");