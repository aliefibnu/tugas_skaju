//? Elemen Untuk Hasil
let hasil_nip = document.getElementById("hasil_nip");
let hasil_nama_pegawai = document.getElementById("hasil_nama_pegawai");
let hasil_jabatan = document.getElementById("hasil_jabatan");
let hasil_gaji_pokok = document.getElementById("hasil_gaji_pokok");
let hasil_status = document.getElementById("hasil_status");
let hasil_tunjangan_istri = document.getElementById("hasil_tunjangan_istri");
let hasil_gaji_akhir = document.getElementById("hasil_gaji_total");

//? Kalau User Submit Form
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  //? Hasil Input
  let nip = document.getElementById("nip").value;
  let nama_pegawai = document.getElementById("nama_pegawai").value;
  let jabatan = document.getElementById("jabatan").value;
  let gaji_pokok = parseFloat(
    document.getElementById("gaji_pokok").value.replaceAll(".", "")
  );
  gaji_pokok = gaji_pokok == NaN ? 0 : gaji_pokok;
  let status_pegawai = document.getElementById("status").value;

  //? Olah Data
  let tunjangan_istri = status_pegawai == "Menikah" ? gaji_pokok / 10 : 0;
  let gaji_akhir = gaji_pokok + tunjangan_istri;

  //? Tampilkan Data
  hasil_nip.textContent = nip;
  hasil_nama_pegawai.textContent = nama_pegawai;
  hasil_jabatan.textContent = jabatan;
  hasil_gaji_pokok.textContent = gaji_pokok.toLocaleString("id-ID");
  hasil_status.textContent = status_pegawai;
  hasil_tunjangan_istri.textContent = tunjangan_istri.toLocaleString("id-ID");
  hasil_gaji_akhir.textContent = gaji_akhir.toLocaleString("id-ID");
});
