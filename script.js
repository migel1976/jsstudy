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

// //convert types
// let val=true;
// console.log(typeof val);
// console.log(typeof String(val));

// //численный преобразования
// console.log('6'/'3');
// console.log(null + 45);
// console.log(undefined + 76);

// //логические преобразования
// console.log(Boolean('hj'));
// console.log(Boolean(null));
// console.log(Boolean('0'));
// console.log(Boolean(0));



// //базовые операции
// console.log(6%5);//остаток от деления
// console.log(3**4);//возведение в степень

// console.log(3+4+'78');//сложение с строкой
// console.log('45'+90);//сложение со строкой
// console.log('6'/'3');//деление происходит как обычно сначало идет преобразование строки к числу
// console.log('45'-5);//вычитание происходит также как и деление


// //Привидение к типу, унарный плюс
// console.log(typeof(+'34'));
// console.log(+true);
// console.log(+false);


// let apple='34';
// let ananas='12';
// console.log(apple+ananas);//происходит сначала 
// console.log(+apple + +ananas);//происходит сначала преобразование к типам

// console.log(+apple + +ananas);//происходит сначала преобразование к типам


// let a=(1+3, 3+3);
// console.log(a);

// a=1+3, 3+3;
// console.log(a);

// const x=prompt('введите число X');
// const y=prompt('введите число Y');
// const sum=+x + +y;
// const sumEl=document.querySelector('.sum');
// sumEl.innerHTML=sum;

// console.log('2'>1);
// console.log('44'<'34');
// console.log('54'<'2');


// const a=0;
// console.log('преобразование а=0 в Boolean', Boolean(a));

// const b='0';
// console.log('преобразование b=\'0\' в Boolean ', Boolean(b));

// console.log('если проводит сравнение a==b то получим следующий результат: ', a==b);
// console.log('для корректного сравнения используется оператор строгого сравнения, в данном операнде не происходит преобразование типов === ', a===b);

// const y=(24==5);
// console.log(y)


//код рабочий
// const age=prompt('Введите Ваш возраст', 23);
// const msg=age>18?'Вам можно заходить на сайт':`А вам нельзя так как Ваш возраст всего лишь ${age}`;
// // console.log(msg);
// alert(msg);

//код рабочий
// const age=prompt('Введите Ваш возраст');
// const msg=age<3?'Привет малыщ':
//                 age < 18 ? 'Здорово пацан':
//                     'Здравствуйте';
// alert(msg);

//Условные операторы, тринарный оператор
const a=prompt('Введите число а');
const b=prompt('Введите число b');

let sum=+a + +b<14;
alert(sum ? sum + ' мало': sum + ' много');
console.log(sum);