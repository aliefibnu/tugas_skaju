<?php

//? Deklarasi Variabel
$host = "localhost";
$username = "root";
$password = "";
$nama_database = "db_sekolah";

//? Algoritma koneksi ke databae
$koneksi_ke_database = mysqli_connect($host, $username, $password, $nama_database) or die("koneksi gagal");

//? Algoritma menggunakan database yang sudah dipilih : db_sekolah
$database = mysqli_select_db($koneksi_ke_database, $nama_database);

//? Cek apakah koneksi berhasil atau gagal
if ($koneksi_ke_database) {
  echo ('koneksi berhasil');
} else {
  echo ("koneksi gagal");
}
