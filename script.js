function hitungJodoh() {
  const nama1 = document.getElementById("nama1").value;
  const nama2 = document.getElementById("nama2").value;
  const hasil = document.getElementById("hasil");

  if (nama1 === "" || nama2 === "") {
    hasil.innerHTML = "💔 Nama tidak boleh kosong!";
    return;
  }

  const persen = Math.floor(Math.random() * 41) + 60; // 60–100%

  let pesan = "";
  if (persen > 85) {
    pesan = "💍 Jodoh Dunia Akhirat!";
  } else if (persen > 70) {
    pesan = "💖 Cocok Banget!";
  } else {
    pesan = "😊 Lumayan Cocok!";
  }

  hasil.innerHTML = `
    ❤️ Kecocokan: <b>${persen}%</b><br>
    ${pesan}
  `;
}
