/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


 /* первая мысль - пройтись по первому массиву внутри него сравнивать текущее значение со значениями из второго массива, если они меньше или равны текущему, то добавляем за ним. Если больше, то переходим на следующий элемент первого массива. Попробую сейчас написать код  */

/* вроде написал, пытаюсь на тестах проверить у меня ошибка типов... */

/* ааа, это не массив, а связанный список... */

/* хорошо изменю все на while получается... */
// var mergeTwoLists = function(list1, list2) {
    
//     const arr = [];
//     let startInner = 0;

//     for(let i = 0; i < list1.length; i++){
//         for(let j = startInner; j < list2.length; j++){
//             if(list1[i] >= list2[j]){
//                 arr.push(list2[j]);
//             } else {
//                 startInner = j;
//                 break; 
//             }
//         }
//         arr.push(list1[i]);
//     }

//     return arr;

// };
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


 /* первая мысль - пройтись по первому массиву внутри него сравнивать текущее значение со значениями из второго массива, если они меньше или равны текущему, то добавляем за ним. Если больше, то переходим на следующий элемент первого массива. Попробую сейчас написать код  */

/* вроде написал, пытаюсь на тестах проверить у меня ошибка типов... */

/* я в теме связанных списков вообще хромаю, спрашиваю по синтаксису у чатгпт, вроде логика не сложная просто написать это в контексте связанных списков - сложно... */

const addNode = (head, newEl) => {
    let curr = head;
    
    while(curr.next) {
      curr = curr.next
    }
    
    curr.next = new ListNode(newEl);
  }
  var mergeTwoLists = function(list1, list2) {
      
      const arr = new ListNode();
  
      while(list1) {
        const node = list1.val;
        
        while(list2) {
          const nodeInner = list2.val;
          
          if(node >= nodeInner){
            addNode(arr, nodeInner);
          } else {
            break;
          }
          list2 = list2.next;
        }
        addNode(arr, node)
        list1 = list1.next;
      }
      
      while(list2){
          const node = list2.val;
          addNode(arr, node);
          list2 = list2.next
      }
      return arr.next;
  
  };
  
  // прикольно, решил, наполовину с гипити конечно, но...
  
  
  // чужие решения похожи просто логика куда проще, а еще это рекурсией решить можно оказывается...