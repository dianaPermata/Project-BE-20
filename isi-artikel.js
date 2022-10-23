let containerArtikel = document.getElementById("main")

let getDataArtikel = async (result,index) =>{
    let response = await fetch("https://6354c808ccce2f8c020d4f4b.mockapi.io/artikel4")
    let artikel = await response.json()

    artikel.forEach(item => {
        containerArtikel.innerHTML += `
        <h2>${item.judul}</h2>
        <img src="./img/article/art-1.png" width="650">
        <h5>Kategori : ${item.kategori}</h5><br>
        <h5>${item.isi}</h5><br>
        <h6>Tanggal : ${item.tanggal}</h6>
        <br>
        <br>
        `
    })
}
getDataArtikel()