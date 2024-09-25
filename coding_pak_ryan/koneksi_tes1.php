<?php

$host = "localhost";
$username = "root";
$password = "";
$nama_database = "db_sekolah";

$conn = new mysqli($host, $username, $password, $nama_database);
var_dump($conn);
