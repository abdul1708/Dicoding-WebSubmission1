
function masukan() {
  const nama = prompt("Tuliskan nama Anda?");
  const kritik = prompt("Berikan kritik?");
  const saran = prompt("Berikan saran?");

  const user = {
    nama: nama,
    kritik: kritik,
    saran: saran
  };

  alert("Selamat " + nama + ". " + "Masukan Anda telah kami rekam!");
}

function image() {
  let catImage1 = document.querySelector("#catImage1");
  let catImage2 = document.querySelector("#catImage2");
  let catImage3 = document.querySelector("#catImage3");
  let catImage4 = document.querySelector("#catImage4");

  catImage1.setAttribute("src", "https://i.ibb.co/55VG7vL/three-cat.jpg");
  catImage2.setAttribute("src", "https://i.ibb.co/55VG7vL/three-cat.jpg");
  catImage3.setAttribute("src", "https://i.ibb.co/55VG7vL/three-cat.jpg");
  catImage4.setAttribute("src", "https://i.ibb.co/55VG7vL/three-cat.jpg");
}

function text() {
  let catCaption1 = document.querySelector("#caption1");
  let catCaption2 = document.querySelector("#caption2");

  catCaption1.innerHTML = 'Indonesian Motorcycle'
  catCaption2.innerHTML = 'Indonesia is always ahead!'
}