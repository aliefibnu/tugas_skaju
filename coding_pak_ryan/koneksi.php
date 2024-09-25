<?php

$host = "localhost";
$username = "root";
$password = "";
$db = "db_sekolah";
$koneksi = mysqli_connect($host, $username, $password, $db) or die("koneksi gagal");
$database = mysqli_select_db($koneksi, $db);

if ($koneksi) {
  echo ('koneksi berhasil');
} else {
  echo ("koneksi gagal");
}
