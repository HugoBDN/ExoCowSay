const userInfo = require("./information")
const cowsay = require("cowsay")

console.log(`Nom: ${userInfo.name}`);
console.log(`Campus: ${userInfo.campus}`);

console.log(cowsay.say({ text: `Hello, I am ${userInfo.name} from ${userInfo.campus} campus!` }));