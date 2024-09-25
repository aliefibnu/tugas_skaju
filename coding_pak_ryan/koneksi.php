<?php

$host = "localhost";
$username = "root";
$password = "";
$nama_database = "db_sekolah";
$koneksi_ke_database = mysqli_connect($host, $username, $password, $nama_database) or die("koneksi gagal");
$database = mysqli_select_db($koneksi_ke_database, $nama_database);

if ($koneksi_ke_database) {
  echo ('koneksi berhasil');
} else {
  echo ("koneksi gagal");
}
