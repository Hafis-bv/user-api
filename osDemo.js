import os from "os";

// os.userInfo()
// возвращает инфу про конкретного юзера
const user = os.userInfo();
console.log(user);

const totalMemory = os.totalmem() / (1024 * 1024 * 1024);
console.log(`Total Memory: ${totalMemory.toFixed(2)} GB`);

const freeMemory = os.freemem() / (1024 * 1024);
console.log(`Free memory: ${freeMemory.toFixed(2)} MB`);

// CPU

const cpus = os.cpus();

console.log(cpus);
