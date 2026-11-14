// const results = [
//   { name: 'login', status: 'passed', duration: 1200 },
//   { name: 'logout', status: 'passed', duration: 800 },
//   { name: 'add todo', status: 'failed', duration: 3000 },
//   { name: 'delete todo', status: 'passed', duration: 950 },
//   { name: 'edit todo', status: 'failed', duration: 4100 },
// ];

// // for (const result of results){                     //Выведи название каждого теста в формате Test: login.
// //     console.log(`Test: ${result.name}`)
// // }

// let statusPass = 0
// let statusFail = 0
// for(const result of results){                     //Посчитай, сколько тестов прошло и сколько упало, и выведи Passed: 3, Failed: 2.
//    if(result.status === 'passed'){
//     statusPass++;
//    }else if(result.status === 'failed'){
//     statusFail++;
//    }
// }
// console.log(`Passed: ${statusPass}, Failed: ${statusFail}`)

// for(const result of results){                     //Выведи названия только упавших тестов.
//    if(result.status === 'failed'){
//     console.log(`Test: ${result.name}`)
//    }
// }

         //Если упал хотя бы один тест, выведи Build failed, иначе Build passed.
//    if( statusFail > 0){
//     console.log('Build failed')
//    }else{
//     console.log('Build passed')
//    }


// for (const result of results){
// if(result.duration > 1000){
//         console.log(`Slow test: ${result.name} (${result.duration})ms`)                 //⭐ Выведи тесты, которые шли дольше 1000 мс, в формате Slow test: login (1200 ms).
// }
// }                    