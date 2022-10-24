const inputSearch = document.querySelector("#search")
const form = document.querySelector("#form")
const sList = document.querySelector('.search-list')


let url = new URL(window.location.href);
let id = url.searchParams.get("id");
console.log(id);
//fetch data from api with id
let containerArtikel = document.getElementById("main");
let getDataArtikel = async (result, index) => {
  let response = await fetch(
    "https://634d5f1bf5d2cc648ea441d9.mockapi.io/articles/" + id
  );
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

// Article Search List Start
const getSearchArticles = async (URL) => {
  const response = await fetch(URL);
  const articles = await response.json();
  let html = ``;

  articles.forEach((item, index) => {
    let htmlList = 
    `<strong>Menampilkan hasil untuk <span style="color: orange;">${inputSearch.value}</span>  : </strong>    
        <hr />
        <div class="span8 d-flex">
          <div class="w-100">
            <a href="./isi-article.html"><b>${item.judul}</b>
          </a>
            <h6><a href="./index.html"><span>Tanyadokter.com,</span></a><h6 class="text">${item.isi_artikel1}</h6></h6>
            <hr>
          </div>
        </div>`;
    html += htmlList;
    sList.innerHTML = html;
  });
};
// Article Search List End

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let SEARCH_URL = "https://634d5f1bf5d2cc648ea441d9.mockapi.io//articles?judul=";
  const searchValue = inputSearch.value;
  getSearchArticles(SEARCH_URL + searchValue);
});
