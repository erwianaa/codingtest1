// // input        // result
// [1,2,3,4,5]     // 15
// [1,2]           // 3
// [5]             // 5
// []              // array kosong

var soal1 = [1,2,3,4,5] 
var soal2 = [1,2]
var soal3 = [5]
var soal4 = []


function jawabsoal(soal) {
    let hasil = 0;
    for (let i=0; i < soal.length; i++) {
        hasil = hasil + soal[i];
    }
    return hasil;
}

console.log(soal1, jawabsoal(soal1));
console.log(soal2, jawabsoal(soal2));
console.log(soal3, jawabsoal(soal3));
console.log(soal4, jawabsoal(soal4));
