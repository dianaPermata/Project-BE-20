let containerArtikel1 = document.getElementById("isi1")

let getDataArtikel1 = async (result,index) =>{
    let response = await fetch("https://6354c808ccce2f8c020d4f4b.mockapi.io/artikel1")
    let artikel = await response.json()

    artikel.forEach(item => {
        // console.log(item)
        containerArtikel1.innerHTML += `
        <div class="flex-col  m-auto" style="width: rem;">
        <h3>${item.judul}</h3>
        <img src="../img/article/art-1.png" width="650">
        <h6>Kategori : ${item.kategori}</h6><br>
        <h4>${item.isi}</h4>
        <h6>Tanggal : ${item.tanggal}</h6>
        </div>
        <br>
        <br>
        `
    })
}
getDataArtikel1()

let containerArtikel2 = document.getElementById("isi2")

let getDataArtikel2 = async (result,index) =>{
    let response = await fetch("https://6354c808ccce2f8c020d4f4b.mockapi.io/artikel2")
    let artikel = await response.json()

    artikel.forEach(item => {
        // console.log(item)
        containerArtikel2.innerHTML += `
        <div class="flex-col  m-auto" style="width: rem;">
        <h3>${item.judul}</h3>
        <img src="../img/article/art-2.png" width="650">
        <h6>Kategori : ${item.kategori}</h6><br>
        <h4>${item.isi}</h4>
        <h6>Tanggal : ${item.tanggal}</h6>
        </div>
        <br>
        <br>
        `
    })
}
getDataArtikel2()

let containerArtikel3 = document.getElementById("isi3")

let getDataArtikel3 = async (result,index) =>{
    let response = await fetch("https://6354c808ccce2f8c020d4f4b.mockapi.io/artikel3")
    let artikel = await response.json()

    artikel.forEach(item => {
        // console.log(item)
        containerArtikel3.innerHTML += `
        <div class="flex-col  m-auto" style="width: rem;">
        <h3>${item.judul}</h3>
        <img src="../img/article/art-3.png" width="650">
        <h6>Kategori : ${item.kategori}</h6><br>
        <h4>${item.isi}</h4>
        <h6>Tanggal : ${item.tanggal}</h6>
        </div>
        <br>
        <br>
        `
    })
}
getDataArtikel3()

