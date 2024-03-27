"use strict"
//task 9
let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];
let arrayone=array5.map(function(x){
    return x/3
});
console.log(arrayone);

//task 10
let array7 =  [15, 100, 25, 10, 36]
array7.splice(3,1);
console.log(array7);

//task11
let array1 = [1,5,4,3,7];

array1.splice(3,1,'three');

console.log(array1);

//task14
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let languages1=languages.filter(function(item){
   return item.length > 3;
});
console.log(languages1);

//task17
let array6 = [-1, -2, -3, 4];
console.log(array6.some((a)=> a>0));

//task8
let array3 =[1, 2, 3, 4, 5];
array3.splice(3,0,'a','b','c');
console.log(array3);

//task15
let words = ['Madrid', 'rome', 'Milan', 'berlin'];
let wordsall=words.filter(function(a){
    return a.toLowerCase().includes('m')
});
console.log(wordsall);

