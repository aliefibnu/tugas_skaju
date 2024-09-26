// ! Algoriitma animasi teks Judul "New York"

// ? Deklarasi variabel
let elTitle = document.querySelectorAll("#home h1")[0];
// ? Set default size untuk teks
elTitle.style.scale = `${(window.scrollY / 50) * 100 + 50}%`;
// ? Logika kalau window di scroll
document.addEventListener("scroll", (y) => {
  updateSizeJudul()
});
