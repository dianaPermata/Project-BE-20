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
              <a href=""><b>${item.judul}</b>
            </a>
              <p><a href=""><span>Tanyadokter.com,</span></a><p class="text">${item.isi_artikel1}</p></p>
              <hr>
            </div>
          </div>`;
      html += htmlList;
      listArtikel.innerHTML = html;
    });
  };
  // Article Search List End