let containerArtikel = document.getElementById("main")
const inputSearch = document.querySelector("#search")
const form = document.querySelector("#form")
const sList = document.querySelector('.search-list')

// let getDataArtikel = async (result, index) => {
//   let response = await fetch(
//     "https://634d5f1bf5d2cc648ea441d9.mockapi.io/articles"
//   );
//   let artikel = await response.json();

    artikel.forEach(item => {
        containerArtikel.innerHTML += `
        <div class="m-4">
        <h2 class="my-4">${item.judul}</h2>
        <img src="./img/article/art-1.png" width="650">
        <h5 class="mt-4">Kategori : ${item.kategori}</h5><br>
        <h6>${item.isi}</h6><br>
        <h6>${item.tanggal}</h6>
        </div>
        <br>
        <br>
        `
    })
getDataArtikel()

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
  
