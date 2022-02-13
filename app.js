const express = require('express')
const app = express()
const port = 3000


//Setting halaman root (home)
app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
})

//Setting halaman about
app.get('/about', (req, res) => {
    res.sendFile('./about.html', {root: __dirname})
})

//Setting halaman Contact
app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', {root: __dirname})
})

//Latihan menggunakan metode rq.params. Penggunan metode ini akan menangkap request URL yang memiliki pola seperti ini: http://localhost:3000/produk/8/ctegory/rumah
app.get('/produk/:id/ctegory/:kategori', (req, res) => {
    res.send(`ID Produk : ${req.params.id} <br> Kategori Produk : ${req.params.kategori}`)
})

//Latihan menggunakan metode req.query. Penggunan metode ini akan menangkap request URL yang memiliki pola seperti ini: http://localhost:3000/produk/8?ctegory=rumah
app.get('/produk/:id', (req, res) => {
    res.send(`ID Produk : ${req.params.id} <br> Kategori Produk : ${req.query.ctegory}`)
})

//Metode use(), menangkap apupun yang direquest kemudian mengeksekusi function yang ada di dalamnya. Oleh karena itu jangan letakkan metode ini di paling atas agar requestnya tidak selalu ditangkap oleh metode use() ini. Pada umumnya metode ini nerfungsi untuk menghandle request halaman yang tidak ada.

app.use('/', (req, res) => {
    res.status(404) //res.status(404) akan mengirimkan status pada webbrowser 404 (Page Not Found). Apabila metode ini tidak dikirimkan maka web akan mengirimkan status yang lain.
    res.send(`<h1>404</>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
