// Meminta pustaka MySQL
const mysql = require('mysql');

// Variabel koneksi database
const db = mysql.createConnection({
  host: 'localhost', // Host database
  user: 'root', // Pengguna database
  password: '', // Kata sandi database
  database: 'sql6702759' // Mengasumsikan 'mahasiswa' adalah nama database Anda
});

// Mengekspor variabel koneksi database untuk digunakan di modul lain
module.exports = db;
