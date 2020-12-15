// Contoh penerapan penambahan data pada array objek 
let barang = [
    { nama : "Rinsoo", harga : 6000},
    { nama : "Moonlight", harga : 4000}
]

console.log("Isi array barang");
console.log(barang);
console.log("Jumlah data = " + barang.length);

console.log("------------------------------------");

// tambah data barang baru
barang.push(
    { nama : "Mloto", harga : 1000}
)

console.log("Isi array barang saat ini");
console.log(barang);
console.log("Jumlah data saat ini = " + barang.length);