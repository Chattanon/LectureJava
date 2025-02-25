// break ใน Loop ทำงานเมือ่ไหร่จบเลย
// continue ใน Loop ททำงานเมื่อไหร่ ถือว่าจบรอบนั้นไปรอบจ่อไป

for (let i = 1; i <= 5; i++) {
  console.log(i, "Hello...");
}
console.log("--------------");

for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i, "Hello...");
}
console.log("--------------");

for (let i = 1; i <= 5; i++) {
    if (i == 3) {
      continue;
    }
    console.log(i, "Hey...");
  }