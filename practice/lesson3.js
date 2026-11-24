// ASYNC/AWAIT

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// async function main() {
//   console.log("1. Start");
//   await wait(2000); // пауза 2 секунды
//   console.log("2. End"); // выполнится только после паузы
// }

// main();

// Напиши всё внутри одной async function main() и вызови её в конце файла.

// 1.Предскажи, потом запусти. Не запуская код, напиши в комментарии,
// в каком порядке появятся строки и через сколько секунд. Потом запусти и проверь себя:
// async function main() {
//   console.log("A");
//   wait(1000);
//   console.log("B");
//   await wait(2000);
//   console.log("C");
// }
// main();

// // A;
// // B;
// // wait 2ms;
// // C;

// 2.Напиши async-функцию runTest(name, ms). Она ждёт ms миллисекунд и возвращает строку ${name} passed.
// В main вызови её последовательно для трёх тестов — 'login' (500 мс),
// 'logout' (300 мс), 'add todo' (800 мс) — и выведи результаты.

// async function runTest(name, ms) {
//   await wait(ms);
//   return `${name} passed`;
// }

// async function main() {
//   console.log(await runTest("login", 500));
//   console.log(await runTest("logout", 300));
//   console.log(await runTest("add todo", 800));
// }

// main();

// 3.Мини API-тест. Сделай запрос к https://jsonplaceholder.typicode.com/todos/1.
// Если статус ответа 200, выведи Status OK, иначе Status FAIL. Потом выведи title и completed.

// async function requestTodo() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   if (response.status === 200) {
//     console.log("Status OK");
//   } else {
//     console.log("STatus FAIL");
//   }
//   const responsJson = await response.json();
//   console.log(responsJson.title);
//   console.log(responsJson.completed);
// }

// requestTodo();

// 4.⭐ Запроси список https://jsonplaceholder.typicode.com/todos — это массив из 200 задач.
// С помощью filter и .length из урока 2 посчитай, сколько из них выполнено (completed === true),
//  и выведи Completed: X of 200.

async function requestTodos() {
  const todo = await (
    await fetch("https://jsonplaceholder.typicode.com/todos")
  ).json();
  const completedCount = todo.filter((r) => r.completed === true).length;
  console.log(`Completed: ${completedCount} of 200`);
}

requestTodos();
