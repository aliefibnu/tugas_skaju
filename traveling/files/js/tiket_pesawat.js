let data,
  startContentId,
  usdToIdr,
  elHeader,
  elNavigation,
  elTable,
  elTeksHarga,
  id,
  iNav,
  iTable;

data = {
  maskapai: "Lihat Maskapai Tersedia (Table 1)",
  harga: "Cek Harga Tiket (Table 2)",
  beli: "Beli Tiket Sekarang (Table 3)",
  durasi: "Cek Durasi Penerbangan (Table 4)",
  etihad: {
    harga: {
      low: 950,
      top: 1400,
    },
  },
  qatar_air: {
    harga: {
      low: 850,
      top: 1400,
    },
  },
  singapore_air: {
    harga: {
      low: 900,
      top: 1500,
    },
  },
  turkish_air: {
    harga: {
      low: 800,
      top: 1300,
    },
  },
};
startContentId = "maskapai";
usdToIdr = 15279.8;
elNavigation = document.getElementsByClassName("nav");
elTable = document.getElementsByClassName("cTable");
elHeader = document.getElementById("headerText");
elTeksHarga = document.getElementsByClassName("teksHarga");

tiketPesawatController(
  data,
  startContentId,
  usdToIdr,
  elNavigation,
  elHeader,
  elTable,
  elTeksHarga
);

// ! ALIP YG BUAT JANGAN DICURI :(
