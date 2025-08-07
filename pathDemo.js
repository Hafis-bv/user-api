import path from "path";

const myPath = "/controllers/users.js";

// возвращает последний кусок пути
console.log(path.basename(myPath));

// возвращает название папки
console.log(path.dirname(myPath));

// возвращает расширение файла
console.log(path.extname(myPath));

// возвращает обьект со всей инфой про путь
console.log(path.parse(myPath));
