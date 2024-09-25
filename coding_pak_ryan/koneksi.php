<?php

$host = "localhost";
$username = "root";
$password = "";
$nama_database = "db_sekolah";
$koneksi = mysqli_connect($host, $username, $password, $nama_database) or die("koneksi gagal");
$database = mysqli_select_db($koneksi, $nama_database);

if ($koneksi) {
  echo ('koneksi berhasil');
} else {
  echo ("koneksi gagal");
}
