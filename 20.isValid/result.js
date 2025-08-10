/**
 * @param {string} s
 * @return {boolean}
 */


 /* ну первое конечно пришло в голову перебором сделать, но понимаю что таким образом я должен каждый раз проверять не встретилась ли новая открывающая скобка. В общем - геммор. Следующая мысль пришла насчет рекурсии, типа если встретиться скобка открывающаяся, то мы вызываем вновь функцию, если встретили для нее закрывающуюся, то удаляем из строки эти скобки. В конце проверяем когда по всей строке проходимся пустая ли она, т.е. удалились ли все пары скобок, если удалились, значит true, если нет - false.
 
 Сейчас подумал, как я реализую эту рекурсивную функцию, к тому же мы может быть ограничены количеством вызова и рекурсия где-то не выдержит. Попробую вначале while loop, если получится крутяк) */

 /* Можно же использовать стек использовать для каждой открывающейся скобки, когда встречается закрывающаяся скобка, то удаляем из стека последний элемент, в конце когда пройдемся по всей строке если останется в каком-либо из стеков элемент значит она не валидна. Этот метод нужно немного усовершенствовать, чтобы между скобками не было валидных других скобок. */

 /* в момент когда мы удаляем из очереди индекс скобки, за место скобок в строку напишем "0" скажем и после проверяем между начальным и конечным индексом скобки есть ли что-то кроме нуля, если есть, то сразу брикуем и говорим false, нет - продолжаем. Наверное, не самый оптимальный вариант, но пока хоть этот чекну*/

 /* Пока получился ужас с большим количеством дублирования кода, пока запущу потесчу на тестах */

 /* тест кейсы на какой-то фигне попадали сейчас буду поправлять */

 /* я дурачок который забыл что строка не изменяемая, что я ей пытался изменить... */

 /* сейчас перепишу это все на массив */

 /* добавил одну строчку s = s.split("") */

 /* все тест кейсы прошли, попробую засабмитить, потом займусь улучшением синтаксиса и логики */

 /* завалил на тесте где одна закрывающаяся скобка... */

 /* добавил в каждый иф проверяющий закрывающую скобку такой иф 
            if(!firstIndex) return false */

/* переделал на    if(firstIndex === undefined) return false, потому что индекс может быть нулевым, господи этот код нужно поправить! */

/* хоть работает, 17ms скорость алгоритма, когда у всех до 5... Пошел переписывать код. */

/* читабельность может и лучше но логика говно все равно, даже чатгпт обосрал... */



// первый вариант
// var isValid = function(s) {

//     const firstBracket = [] 
//     const secondBracket = [] 
//     const thirdBracket = [] 
//     s = s.split("")
//     for(let i = 0; i < s.length; i++) {
//         if(s[i] === "("){
//             firstBracket.push(i);
//         } else if(s[i] === "[") {
//             secondBracket.push(i)
//         } else if(s[i] === "{") {
//             thirdBracket.push(i)
//         }
        
//         if(s[i] === ")"){
//             const firstIndex = firstBracket.pop();
            
//             if(firstIndex === undefined) return false
//             s[firstIndex] = "0"
//             s[i] = "0"

//             for(let j = firstIndex + 1; j < i; j++) {
//                 if(s[j] !== "0"){
//                     return false;
//                 }
//             }
//         } 

//         if(s[i] === "]"){
//             const firstIndex = secondBracket.pop();

//                if(firstIndex === undefined) return false

//             s[firstIndex] = "0"
//             s[i] = "0"

//             for(let j = firstIndex + 1; j < i; j++) {
//                 if(s[j] !== "0"){
//                     return false;
//                 }
//             }
//         }

//         if(s[i] === "}"){
//             const firstIndex = thirdBracket.pop();
//             if(firstIndex === undefined) return false
//             s[firstIndex] = "0"
//             s[i] = "0"

//             for(let j = firstIndex + 1; j < i; j++) {
//                 if(s[j] !== "0"){
//                     return false;
//                 }
//             }
//         }
//     }

//     if(firstBracket.length || secondBracket.length || thirdBracket.length){
//         return false;
//     }
//     return true;
// };






// вторая попытка
// const checkAvailibility = (s, arr, lastIndex) => {
//   if (!arr.length) return false;
//   const firstIndex = arr.pop();
  
//   s[firstIndex] = "0"
//   s[lastIndex] = "0"

//   for(let j = firstIndex + 1; j < lastIndex; j++) {
//     if(s[j] !== "0"){
//       return false;
//     }
//   }
//   return true;
// }


// var isValid = function(s) {

//     const firstBracket = [] 
//     const secondBracket = [] 
//     const thirdBracket = [] 
//     s = s.split("")
//     for(let i = 0; i < s.length; i++) {
      
//       switch (s[i]){
//         case "(":
//           firstBracket.push(i);
//           break;
//         case "[":
//           secondBracket.push(i);
//           break;
//         case "{":
//           thirdBracket.push(i);
//             break;
//         case ")":
//           if(!checkAvailibility(s, firstBracket, i)) return false;
//             break;
//         case "]":
//           if(!checkAvailibility(s, secondBracket, i)) return false;
//             break;
//         case "}":
//           if(!checkAvailibility(s, thirdBracket, i)) return false;
//             break; 
//         default:
//           return false;
//       }
//     }

//     if(firstBracket.length || secondBracket.length || thirdBracket.length){
//         return false;
//     }
//     return true;
// };






// третья попытка

// ооо лучше стало, хоть до 4мс спустил, теперь можно посмотреть на ответ грамотных людей
// const checkAvailibility = (s, arr, lastIndex, second, third) => {
//   if (!arr.length) return false;
//   const firstIndex = arr.pop();
  
// //   s[firstIndex] = "" -- это тоже
// //   s[lastIndex] = "" -- это тоже
  
//   const lastSecond = second[second.length - 1];
//   const lastThird = third[third.length - 1];
    
//   if((firstIndex < lastSecond && lastSecond < lastIndex) || (firstIndex < lastThird && lastThird < lastIndex)) return false;
//   return true;
// }


// var isValid = function(s) {

//     const firstBracket = [] 
//     const secondBracket = [] 
//     const thirdBracket = [] 
//     s = s.split("")
//     for(let i = 0; i < s.length; i++) {
      
//       switch (s[i]){
//         case "(":
//           firstBracket.push(i);
//           break;
//         case "[":
//           secondBracket.push(i);
//           break;
//         case "{":
//           thirdBracket.push(i);
//             break;
//         case ")":
//           if(!checkAvailibility(s, firstBracket, i, secondBracket, thirdBracket)) return false;
//             break;
//         case "]":
//           if(!checkAvailibility(s, secondBracket, i, firstBracket, thirdBracket)) return false;
//             break;
//         case "}":
//           if(!checkAvailibility(s, thirdBracket, i, firstBracket, secondBracket)) return false;
//             break; 
//         default:
//           return false;
//       }
//     }

//     if(firstBracket.length || secondBracket.length || thirdBracket.length){ // убрал || s.join("").length
//         return false;
//     }
//     return true;
// };


// бля как я все усложнил все же очень просто блин...

// попробую свою какашку под человеческий код переделать

// получается переписал код у другого, но все-таки лучше чем то, что выше :)


const checkAvailibility = (prev, curr) => {
    return (prev === "(" && curr === ")" || prev === "[" && curr === "]" || prev === "{" && curr === "}")
  }
  
  
  var isValid = function(s) {
  
      const stack = []
      
      for(let i = 0; i < s.length; i++) {
        const curr = s[i];
        
        if(stack.length){
          
          const prev = stack[stack.length - 1];
          if(checkAvailibility(prev, curr)){
            stack.pop();
            continue;
          }
          
          
        }
        
        stack.push(curr);
      }
    
      return stack.length === 0;
     
  };
  