sole.log(id);
//fetch data from api with id
let containerArtikel = document.getElementById("main");
let getDataArtikel = async (result, index) => {
  let response = await fetch("https://634d5f1bf5d2cc648ea441d9.mockapi.io/articles/" + id);
  let artikel = await response.json();
  containerArtikel.innerHTML += `
            <h2>${artikel.judul}</h2>
            <img src="./img/article/art-1.png" width="650">
            <h5>Kategori : ${artikel.kategori}</h5><br>
            <h5>${artikel.isi_artikel1}</h5><br>
            <h6>Tanggal : ${artikel.tanggal}</h6>
            <br>
            <br>
            `;
};
getDataArtikel();
