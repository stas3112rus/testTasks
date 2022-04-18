"use strict";
// Task
// Дан целочисленный отсортированный по возрастанию массив, и некое целое число - 
// задача найти ближайший к этому числу элемент массива

// Для решения задачи за основу взят алгоритм бинарного поиска
// В задаче не указано, что возвращать, если:
// 1. Массив пустой - решил выводить строку  "Not elements in array"
// 2. Если два элемента равноудалены от искомого значения (ищем 0, массив [-1, 1]). 
//В таком случае отдаю массив из двух элментов, который содержит эти ближайшие значения

const searchNearlestDigit = (elem, array) => {
    let left = 0;
    let right = array.length - 1;

    if (array.length === 0) return  "Not elements in array";

    const getMiddle = (left, right) => Math.floor((left + right) / 2);
    const getDifferent = (a, b) => Math.abs(a-b);    

    while (left <= right){
        let middle = getMiddle(left, right);
        let hypothesis = array[middle];

        if (hypothesis === elem){
            return hypothesis
        } 

        if (hypothesis > elem){
            right = middle - 1;
          
        } else{
            left = middle + 1;
        }
    }

    if (right < 0) return array[0];

    const leftDifferent = getDifferent(array[left], elem);
    const rightDifferent = getDifferent(array[right], elem);
    
    if (leftDifferent === rightDifferent) return [array[right], array[left]]
   
    return  (leftDifferent < rightDifferent) ? array[left] : array[right];
}

console.log (searchNearlestDigit(1, [])) // "Not elements in array"
console.log (searchNearlestDigit(1, [1])) // 1
console.log (searchNearlestDigit(1, [0,2])) // [0,2]
console.log (searchNearlestDigit(1, [1,2,3,4,5,6,7])) // 1
console.log (searchNearlestDigit(5, [1,2,3,4,5,6,7])) // 5
console.log (searchNearlestDigit(1, [0,2,3,4,5,6,7])) // [0,2]
console.log (searchNearlestDigit(1, [-2,-1,0,1,2])) // 1
console.log (searchNearlestDigit(5, [-2,-1,0,1,2])) // 2
console.log (searchNearlestDigit(-1, [-2,-1,0,1,2])) // -1
console.log (searchNearlestDigit(-5, [-2,-1,0,1,2])) // -2
console.log (searchNearlestDigit(0, [1, 2])) // 1





