//Operator ตัวดำเนินการ
// + - * /  % ++ --
console.log(10**2);


// == != === !== > < >= <=
// ! && || 
let a = 10;

let b = '10';
//Python a + b จะได้ error
//Java a + b จะได้ 1010
//JavaScript a + b จะได้ 20

console.log(a * b);
//เปรียบเทียบว่าเท่ากันใช่ไหม
console.log(a == b);//ไม่สนใจ Type
console.log(a === b);//สนใจ Type
//เปรียบเทียบว่าไม่เท่ากันใช่ไหม
console.log(a != b);//ไม่สนใจ Type
console.log(a !== b);//สนใจ Type

a = 'Hello';
console.log(a)

console.log('Banagna'<'Bangkok')
// Ternary Operator ***
// ____?____:______
// เงื่อนไข ? ทำเมื่อเงื่อนไขเป็นจริง : ทำเมื่อเงื่อนไขเป็นเท็จ

let score = 45
let grade = score >= 55 ? 'A' : 'B'
console.log(grade)

// Nullish  Operator
// ____ ?? ___
// หน้าเครื่องหมาย ?? เป็น null หรือ undefined จะได้ค่าหลังเครื่องหมาย 
// หน้าเครื่องหมาย ?? ไม่เป็น null หรือ undefined จะได้ค่านั้นเลย
let data1 = null
console.log(data1 ?? 'No Data')
let data2 = 'Wow wow wow'
console.log(data2 ?? 'No Data')
let data3;
console.log(data3 ?? 'No Data')