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

// //Условные операторы, тринарный оператор
// const a=prompt('Введите число а');
// const b=prompt('Введите число b');

// let sum=+a + +b<14;
// alert(sum ? sum + ' мало': sum + ' много');
// console.log(sum);

//Использование логического ИЛИ
// const firstName=prompt('Введите имя ');
// const secondName=prompt('Введите фамилию');
// const nickName=prompt('Введите имя пользователя');

// const msg=firstName||secondName||nickName||'Гость';//выполняется проверка на вхождение, первая значение которое равно true будет возращено
// alert(msg);
// false||alert('Show me your self');

// let car=prompt('Введите название своего автомобиля');
// car ||= "У него нету автомашины";
// alert(car);

// //Использование логического И 
// alert(1 && 'первое значение в выражении 0 && true ложно значит вернется первый операнд');
// alert (1 && null && 3);

// const x=prompt('Введите значение Х');
// x>0 && alert(`Вы ввели значение ${x} которое больше нуля`);

// //преобразование к логическому типу
// const text='непустая строка';
// let txt=!!text;
// console.log(typeof txt);//тип Boolean

// let bTxt=Boolean(text);
// console.log(typeof bTxt);//тип Boolean

// console.log(!!'непустая строка');
// console.log(Boolean('тоже самое что и первая строка'));

// //оператор нулевого слияния
// let user='jim';
// // alert(user??'Guest');
// console.log(user??'Guest');

// // let test=0;
// let test=null;
// console.log(test||1000);
// console.log(test??'используется оператор нулевого слияния ?? так как test undefined');

// let x= (1 || 4) ?? 5;
// console.log(x);

// let age;
// const yourAge=prompt('Введите ваш возраст');
// age??=yourAge;
// console.log('you age is ', age);

// let num1 = 10,
//     num2 = 20,
//     result;

// if (result === null || result === undefined) {
//   if (num1 !== null && num1 !== undefined) {
//     result = num1;
//   } else {
//     result = num2;
//   }
// }
// console.log(result);

// result??=num1??num2;
// console.log(result);


// //Циклы for and while
// let sum=0;
// while(true){
//     let value=+prompt('Введите число');
//     if(!value) break;
//     sum+=value;
//     console.log('sum is ', sum);
//     console.log('value is ', value);
// }
// console.log('sum is ', sum);

// //Конструкция switch case
// let arg=+prompt('Введите число');
// switch(arg){
//     case 3: alert('вы ввели число три');
//     case '3': alert('вы ввели символо три');
// }


//Работа с функциями
// let user='Петя';
// function showMessage(){
//     console.log('глобальная переменная ',user);
//     user='Вася';
//     console.log('локальная переменная ', user);
// }
// showMessage();

// function showMessage(from, text){
//     text=text||'текст не добавлен';
//     console.log('первый параметр', from );
//     console.log('второй параметр', text);
// }
// showMessage('aloha!!', 'that right');

// function showCount(count){
//     console.log(count??'значение не задано');
// }
// showCount();
// showCount(null);
// showCount(0);

// function checkAge(age){
//     if(age??false){
//     // age??false?{
//         let msg=`your age is ${age} `; 
//         msg+=age>18?'so you can access':'don\'t have access';
//         return msg;
//     }
//     return 'введите возраст';
// }

// console.log(checkAge());
// console.log(checkAge(20));

//function declaration
// function doNothig(){
// }
// console.log(doNothig()==2);

// //задачи
// function anotherCheckAge(age){
//     // return age??'это не возраст';
//     return (age>18)||'you don\'t have access to this site';
// }
// console.log(anotherCheckAge(16));


// //function expression
// let sayHi=function(){
//     console.log('say hi');
// }
// let aloha=sayHi;
// aloha();
// sayHi;//неправильный вызов 

// //callback function
// ask('Вы согласны?', 
//     function(){'Вы согласились!!!'},
//     function(){'Вы не согласились'}
// )

// function ask(question, yes, no){
//    if(confirm) {yes();}
//    else{no();}
// }
// //использование function expression
// let age=prompt('how old are you');
// let welcome;
// if(age>18){
//     welcome=function(){console.log('you can access to this site');}
// }else{
//     welcome=function(){console.log('sorry to young');}
// }
// welcome();

//короткая форма записи
// let age=prompt('Enter your age');
// let welcome=(age<18) ? 
//     function(){console.log('hello');}:
//     function(){console.log('good day');}

// welcome();

//стрелочная функция
// const a=+prompt('input a');
// const b=+prompt('input a');

// const sum=(a, b)=>{
//     const tmp=a+b;
//     return tmp;
// }

// console.log('summa is :', sum(a, b));

// const age=prompt('input your age');
// let welcome = (age>18)?()=>alert('you can access to site'):
//                        ()=>alert('you don\'t have permisssion');
// welcome();

// //Объекты
// const myKey='your hobbie';
// const user={
//     age:18,
//     sex:'male',
//     myKey:'kite'
// }

// console.log(user.age);
// console.log(user.sex);
// console.log(user.myKey);

// // let fruit=prompt('input fruit', 'apple');
// // console.log(fruit);

// //проверка на вхождения поля в объкте
// console.log('age' in user);
// console.log('aloha' in user);

// for(let key in user){
//     console.log('key is ', key);
//     console.log(user[key]);
//     // console.log(user.key);
// }

// //клонирование объектов
// //при копировании экземпляра объекта происходит передача ссылки на объект

// const test1={
//     name:'jim'
// }
// let test2=test1;
// test1.name='John';
// console.log(test1.name);
// console.log('compare object test1 to test2, they equal coz, refer to on object', test1==test2);
// console.log('compare object test1 to test2, they equal coz, refer to on object', test1===test2);

// const a={};
// const b={};
// console.log('compare object a to b', a===b);
// console.log('compare object a to b', a==b);


// const clone=Object.assign({},test1);
// console.log('clone object use method Object.assign', clone===test1);
// clone.name='fedor';
// console.log('clone.name is ', clone.name);


// const obj1={
//     user:'pete',
//     kiter:{
//         kite:'cabrihna',
//         board:'flydoor'
//     }
// }

// const sasha=Object.assign({},obj1);
// console.log('объекты obj1 и sasha не равны друг другу ', obj1===sasha);
// console.log('вложенный объект kiter obj1 и sasha равны друг другу ', obj1.kiter===sasha.kiter);


// //методы объекта
// const user={
//     name:'jim',
//     age:27,
//     sayHi(){
//         console.log(`${this.name} say aloha, his age ${this.age}`);
//         // console.log('aloha');
//     }
// }
// user.sayHi();

const user={name:'Soul'};
const admin={name:'Admin'};

function sayHi(){
    const msg=`user ${this.name} say aloha`;
    console.log(msg);
    return msg;
}

user.f=sayHi;
user.f();

admin.f=sayHi;
admin.f();

function makeUser(){
    return{
        name:'Fedor',
        ref(){
            return this;
        }
    }
}
const newUser=makeUser();
console.log(`имя пользователя ${newUser.ref().name}`);

const sumDiv=document.querySelector('.sum');
const h=document.createElement('h1');
h.textContent=`имя пользователя ${newUser.ref().name}`;
sumDiv.appendChild(h);

const ul=`<ul>
            <li>${user.f()}</li>
            <li>${admin.f()}</li>
          </ul>`;
sumDiv.insertAdjacentHTML('beforebegin', ul);


function User(name, age){
    this.name=name, 
    this.age=age
};

const jim=new User('jim morrison', 27);
const jimHtml=document.createElement('p');
jimHtml.textContent=`his name is ${jim.name} and his ${jim.age} age old`;
sumDiv.insertAdjacentElement("afterend", jimHtml);

const signer=document.querySelector('.signer');
const alice=new User('alice cooper', 56);
const aliceHtml=document.createElement('h1');
aliceHtml.textContent=`his name is ${alice.name} and his ${alice.age} age old`;
signer.appendChild(aliceHtml);


//создание функции в объекте
function NewUser(name){
    this.name=name,
    this.sayHi=function(){
        // return this.name;
        // console.log(`меня зовут ${name}`);
        const msg=`<h2><i>Меня зовут ${this.name} </i></h2>`;
        return msg;
    }
}
const petr=new NewUser('Petr');
const petrDiv=document.querySelector('.petr');
petrDiv.insertAdjacentHTML("beforebegin", petr.sayHi());

//задачи 
let obj={};
function A(){ return obj;}
function B(){ return obj;}
console.log(`объект A === B ${new A()===new B()}`);



