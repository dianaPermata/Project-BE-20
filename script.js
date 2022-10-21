const inputSearch = document.querySelector("#search");
const form = document.querySelector("#form");


const API_URL = "https://634d5f1bf5d2cc648ea441d9.mockapi.io/articles";

 let getDatasearch = async (URL) => {
  let response = await fetch(URL);
  let result = await response.json();
  console.log(result);
  let hasilSearch='';
    result.forEach((item,index) => {
      let searchList = `<strong>Menampilkan hasil untuk <span style="color: orange;">${inputSearch.value}</span>  : </strong>    
        <hr />
        <div class="span8 d-flex">
          <div class="w-100">
            <a href=""><b>${item.judul}</b>
          </a>
            <p><a href=""><span>Tanyadokter.com,</span></a><p class="text">${item.isi_artikel1}</p></p>
            <hr>
          </div>
        </div>`
        hasilSearch += searchList;

    });
    const hasilCari=document.getElementById("hasilSearch");
    hasilCari.innerHTML=hasilSearch;
  }

  getDatasearch(API_URL)

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let SEARCH_URL = "https://634d5f1bf5d2cc648ea441d9.mockapi.io/articles?judul=";
    const searchValue = inputSearch.value
    console.log(searchValue);
    getDatasearch(SEARCH_URL + searchValue);
})
