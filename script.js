// lesson username
// Переменные
let user='bob', age='35', sex='male'
const person=user+' '+age+' '+sex;
alert(person);

let admin='John';
let name=admin;
const msg=`var name is ${name}`;
console.log(msg);
alert(msg);

let planet='earth';
let curUser='fedor';
console.log(`current user is ${curUser}`);
console.log(`our planet is ${planet}`);

//Типы данных
console.log(typeof(5));
console.log(typeof null);

//alert, prompt
let yourAge=prompt('сколько тебе лет');
const lblAge=document.querySelector('.age');
lblAge.innerHTML=yourAge;

const res=confirm('я здесь БОСС!!!')
const lblBoss=document.querySelector('.boss');
lblBoss.innerHTML=res;









