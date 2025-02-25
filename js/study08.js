//Function คือ การทำงานหนึ่งๆ จะไม่ทำงานถ้าไม่เรียกใช้ (call function)
// function มี 4 ประเภท 
// 1. no parameter, no return 
function funcA(){
    console.log("wow wow wow");
}

// 2. have parameter, no return
function funcB(a, b){ 
    console.log(a + b);
}

//3. no parameter, have return
function funcC(){
    console.log("Hello...");
    return 10;
}

//4. have parameter, have return
function funcD(a, b, c, d){
    console.log(a, b, c, d);
    return a*b*c*d;
}

funcA();
funcB(10, 20); //เราเรียกข้อมูลที่ส่งให้ พารามิเตอร์ ว่า Argument
console.log(funcC());
console.log(funcD(1, 2, 3, 4));