import fs from "fs/promises";

// позволяет читать файлы
async function readFileExample() {
  try {
    const data = await fs.readFile("test.txt", "utf8");
    console.log("✅", data);
  } catch (err) {
    console.log("Error reading file", err);
  }
}

readFileExample();

// позволяет писать в файлах
async function writeFileExample() {
  try {
    await fs.writeFile("test.txt", "Hello from async function");
    console.log("File overwritten successfully");
  } catch (e) {
    console.log("idi naxuy", e);
  }
}

// writeFileExample();

// добавлять текст в файл
async function appendFileExample() {
  try {
    await fs.appendFile("test.txt", "\nHello from appendFileExample function");
    console.log("File appended successfully");
  } catch (e) {
    console.log(e);
  }
}

appendFileExample();
