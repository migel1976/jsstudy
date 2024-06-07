// lesson username
// // Переменные
// let user='bob', age='35', sex='male'
// const person=user+' '+age+' '+sex;
// alert(person);

// let admin='John';
// let name=admin;
// const msg=`var name is ${name}`;
// console.log(msg);
// alert(msg);

// let planet='earth';
// let curUser='fedor';
// console.log(`current user is ${curUser}`);
// console.log(`our planet is ${planet}`);

// //Типы данных
// console.log(typeof(5));
// console.log(typeof null);

// //alert, prompt
// let yourAge=prompt('сколько тебе лет');
// const lblAge=document.querySelector('.age');
// lblAge.innerHTML=yourAge;

// const res=confirm('я здесь БОСС!!!')
// const lblBoss=document.querySelector('.boss');
// lblBoss.innerHTML=res;

//convert types
let val=true;
console.log(typeof val);
console.log(typeof String(val));

//численный преобразования
console.log('6'/'3');
console.log(null + 45);
console.log(undefined + 76);

//логические преобразования
console.log(Boolean('hj'));
console.log(Boolean(null));
console.log(Boolean('0'));
console.log(Boolean(0));



//базовые операции
console.log(6%5);//остаток от деления
console.log(3**4);//возведение в степень

console.log(3+4+'78');//сложение с строкой
console.log('45'+90);//сложение со строкой
console.log('6'/'3');//деление происходит как обычно сначало идет преобразование строки к числу
console.log('45'-5);//вычитание происходит также как и деление


//Привидение к типу, унарный плюс
console.log(typeof(+'34'));
console.log(+true);
console.log(+false);


let apple='34';
let ananas='12';
console.log(apple+ananas);//происходит сначала 
console.log(+apple + +ananas);//происходит сначала преобразование к типам

console.log(+apple + +ananas);//происходит сначала преобразование к типам


let a=(1+3, 3+3);
console.log(a);

a=1+3, 3+3;
console.log(a);

const x=prompt('введите число X');
const y=prompt('введите число Y');
const sum=+x + +y;
const sumEl=document.querySelector('.sum');
sumEl.innerHTML=sum;
// alert(`сумма равна: ${sum} `);















