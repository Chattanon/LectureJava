//Control Flow:Loop/Iteration/Repetition
// ใช้ทำงานเดิมๆซ้ําๆ
//while, do-while, for, foreach
//while พิสูจน์ก่อนแล้วค่อยทำ
let x = 1;
while (x <= 5) {
//   console.log(x, " Hello...", true);
//   console.log(x + " Hello..." + true);
  console.log(`${x} Hello... ${true}`); //**** */
  x++;
}
console.log("--------------");
//do-while ทำงานก่อนแล้วพิสูจน์
let y = 1;
do {
  console.log(`${y} Hey... ${true}`); //**** */
  y++;
} while (y <= 5);
console.log("--------------");
//for ทำงานก่อนแล้วพิสูจน์
for (let i = 1; i <= 5; i++) {
  console.log(`${i} Hi... ${true}`); //**** */

}