const listArtikel = document.querySelector("#article-list");
const runningText = document.querySelector("#running-text")
const inputSearch = document.querySelector("#search");
const form = document.querySelector("#form");


let html = ``;
let marquee = ``;

const API_URL = "https://634d5f1bf5d2cc648ea441d9.mockapi.io/articles";

const getDataArticles = async (URL) => {
  const response = await fetch(URL);
  const articles = await response.json();
  console.log(articles);

  articles.forEach((item, index) => {
    runningText.innerHTML = `<p class="text-sm-center my-auto">
    <marquee scrolldelay="50"
      ><span class="text-primary">${item.tanggal}</span> – ${item.isi_artikel1}</marquee
    >
  </p>
  <hr />`;

    listArtikel.innerHTML += `<div class="span8 d-flex">
        <div class="w-25 m-3 mt-0">
          <img src="./img/article/art-1.png" id="img" class="rounded-3 w-100 shadow-sm" alt="" />
        </div>
        <div class="w-100">
          <h4>${item.judul}</h4>
          <p class="text-black-50">${item.kategori}, ${item.tanggal}</p>
          <p class="text">${item.isi_artikel1}</p>
          <div>
            <div class="more label"><a href="#">Read more</a></div>
          </div>
          <hr />
        </div>
      </div>`;
  });
  
};

  const getSearchArticles = async (URL) => {
    const response = await fetch(URL);
    const articles = await response.json();

    articles.forEach((item, index) => {
        let htmlList = `<strong>Menampilkan hasil untuk <span style="color: orange;">${inputSearch.value}</span>  : </strong>    
        <hr />
        <div class="span8 d-flex">
          <div class="w-100">
            <a href=""><b>${item.judul}</b>
          </a>
            <p><a href=""><span>Tanyadokter.com,</span></a><p class="text">${item.isi_artikel1}</p></p>
            <hr>
          </div>
        </div>`
        html += htmlList;
    });
    listArtikel.innerHTML = html;
  }

getDataArticles(API_URL);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let SEARCH_URL = "https://634d5f1bf5d2cc648ea441d9.mockapi.io//articles?judul="
    const searchValue = inputSearch.value
    console.log(searchValue);
    getSearchArticles(SEARCH_URL + searchValue);
})
