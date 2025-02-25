console.log("ABC...");

console.log(123456);

console.log(true);

//ตัวแปร
var a = 10; //เป็นค่าแบบ global ใช้ได้ทั้งหมด
let b = 20; //เป็นค่าแบบ local ใช้ได้เฉพาะใน { } หนึ่งๆเท่านั้น
const c = 30; //ค่าไม่สามารถเปลี่ยนได้ เป็นแบบ local ใช้ได้เฉพาะใน { } หนึ่งๆเท่านั้น

let data01 = "wow...";
let data02 = 123456;

// เวลาเอาข้อมูลหลากหลายแบบมาใช้ร่วมกัน
console.log("AAA" + 555 + data01 + data02)

console.log(`AAA${555}${data01}${data02}`)

/study01.js
//data type in javascript
 
//String
console.log("ABC..."); console.log('ABC')
//Number
console.log(123456) ;
console.log(115.546)
//Boolean
console.log(true)  //false
//Array
console.log([1, 2, 3, 4, 5, 'Hello...', true])
//Object
console.log({fullname:'John', age:20})
//Null
console.log(null);
//Undefined
console.log(undefined)
 