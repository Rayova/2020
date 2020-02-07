console.log('hallo')
// координаты
let location1 = 5
let location2 = 6
let location3 = 7

let currentShot

let shots = 0

let hits = 0

let isSunk = false
 console.log(2);
while (isSunk === false) {
   currentShot = Number(prompt('Введите число от 0 до 9:'))
   if (currentShot > 9 || currentShot < 0) {
     alert('число за пределами')
   } else {
      shots += 1
   }
   console.log(shots);
   if (currentShot === location1 || currentShot === location2 || currentShot === location3) {
     hits += 1
   }
    if (currentShot === location1 || currentShot === location2 || currentShot === location3) {
      alert('Попадание!')
    } else {
      alert('Промах!')
    }
    if (hits === 3) {
      alert('Победа!')
      isSunk = true
     }



   }



   // Спаршиваю координату выстрела у игрока
   // пишем цикл который работает пока корабль не утонул
   // утонул ли корабль
   // сколько выстрелов и попаданий
   // переменная чтобы хранить координату выстрела
