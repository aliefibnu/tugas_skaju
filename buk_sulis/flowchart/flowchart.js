// ? Deklarasi Variabel
let alas, tinggi, hasil;

// ? Masukkan input
alas = parseFloat(prompt("Masukkan panjang alas segitiga (cm)"));
tinggi = parseFloat(prompt("Masukkan tinggi segitiga (cm)"));

//! Membuat Fungsi
function hitungLuas(alas, tinggi) {
  return (1 / 2) * alas * tinggi;
}

// ! Validasi tipe data
if (isNaN(alas) || isNaN(tinggi)) {
  // ? Jika salah satu input bukan angka, maka tampilkan pesan error
  alert("MASUKKAN NOMOR SAJA");
} else {
  // ? Tampilkan data
  alert(
    `Luas segitiga dari =
    alas : ${alas}cm  
    tinggi : ${tinggi}cm 
    adalah : ${hitungLuas(alas, tinggi)}cm`
  );
}
