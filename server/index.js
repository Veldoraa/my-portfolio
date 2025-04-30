const express = require("express");
const app = express();
const path = require("path");

// Menyajikan file statis dari folder "public"
app.use(express.static(path.join(__dirname, "public")));

// Jika kamu ingin menyajikan halaman utama (misalnya index.html), tambahkan rute ini
app.get("/", (req, res) => {
  res.send("Backend berjalan dengan baik!");
});

app.listen(5000, () => {
  console.log("Server berjalan di http://localhost:5000");
});
