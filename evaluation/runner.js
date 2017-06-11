const chalk = require("chalk");

const line = "—".repeat(15);
const time = new Date().toLocaleTimeString();
const separator = `${line} ${time} ${line}`;

console.log(chalk.dim.white(separator));
console.log("");

try {
    require("./src/index");
} catch (e) {
    console.log(chalk.red(e.stack));
}

console.log("");
console.log("");
