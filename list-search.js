const listArtikel = document.querySelector('#article-list')
const inputSearch = document.querySelector('#search')
const form = document.getElementById('form')

console.log(listArtikel);
console.log(form);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchValue = inputSearch.value
    console.log(searchValue);
})

