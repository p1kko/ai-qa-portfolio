const results = [
  { name: 'login', status: 'passed', duration: 1200 },
  { name: 'logout', status: 'passed', duration: 800 },
  { name: 'add todo', status: 'failed', duration: 3000 },
  { name: 'delete todo', status: 'passed', duration: 950 },
  { name: 'edit todo', status: 'failed', duration: 4100 },
];

// function isFailed(result){                           //Напиши функцию isFailed(result), которая возвращает true, если тест упал, и false, если прошёл. Используй её в цикле for...of, чтобы вывести названия упавших тестов.
//   return result.status === 'failed'
// }


// for(const result of results){
//     if (isFailed(result)){
//         console.log(result.name) 
//     }
// }

// function formatResult(result){                                                  //Напиши функцию formatResult(result), которая возвращает (не выводит!) строку вида login — passed (1200 ms). В цикле выведи такие строки для всех тестов.
//     return `${result.name} - ${result.status} (${result.duration}ms)`
// }

// for (const result of results){
//     console.log(formatResult(result))
// }


// 3.Напиши функцию countByStatus(results, status), которая возвращает, сколько тестов имеют указанный статус. Вызови её два раза и выведи Passed: 3, Failed: 2.
// Подсказка: внутри — счётчик и цикл, как в уроке 1, только в конце return.

// function countByStatus(results, status) {
//   let count = 0;                       

//   for (const result of results) {      
//     if (result.status === status) {   
//       count++;                         
//     }
//   }

//   return count;                     
// }

// const passed = countByStatus(results, 'passed');   
// const failed = countByStatus(results, 'failed');
// console.log(`Passed: ${passed}, Failed: ${failed}`);   


//4.Перепиши isFailed из задания 1 как стрелочную функцию в одну строку.

// function isFailed(result){                //пример
//   return result.status === 'failed'
// }

// const isFailed = result => result.status === 'failed'

// for(const result of results){
//     if (isFailed(result)){
//         console.log(result.name) 
//     }
// }

// //5.⭐ С помощью filter и map получи массив названий медленных тестов (дольше 1000 мс) и выведи его. Должно получиться ['login', 'add todo', 'edit todo'].
// Подсказка: методы можно вызывать по цепочке: results.filter(...).map(...).

// function getSlowNames(results){
//     return results.filter(result => result.duration > 1000).map(result => result.name)
// }

// const slow = getSlowNames(results)
// console.log(slow)