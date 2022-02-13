const express = require('express')
const app = express()
const port = 3000


//Setting halaman root
app.get('/', (req, res) => {
//   res.send('Hello World! Ini adalah halaman root')
    res.sendFile('./index.html', {root: __dirname})
})

//Setting halaman about
app.get('/about', (req, res) => {
//   res.send('Hello World! Ini adalah halaman about')
    res.sendFile('./about.html', {root: __dirname})
})

//Setting halaman Contact
app.get('/contact', (req, res) => {
//   res.send('Hello World! Ini adalah halaman contact')
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

/*
const http = require('http');//memanggil Core Module http yang ada di NodeJS
const { debug } = require('util');
const port = 3000;
const fs = require('fs');

const renderHTML = (path, res) => {
    fs.readFile(path, ((err, data) => {//Parameter 'err' akan mengirimkan informasi file html yang dicari apakah file nya ada atau tidak. Jika tidak ada maka parameter 'err' akan berisi error.
        if(err){//Jika err bernilai error/true
            res.writeHead(404);
            res.write(`Error: File yang anda cari tidak ditemukan`)
        } else{//Jika file nya ada / tidak error
            res.write(data);//parameter 'data' berisi data file html
        }
        res.end()
    }))
}

//Membuat server cengan methode CreateServer(), kemudian jalankan dengan methode listen()
http.createServer((req, res) => {
    const url = req.url;//Menangkap request dari user yang berupa URL
    
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    if(url === '/about'){
        renderHTML('./about.html', res)    
    } else if(url === '/contact'){
        renderHTML('./contact.html', res)
    } else{
        renderHTML('./index.html', res)
    }
    
}).listen(port, () => {
    console.log(`Server sedang berjalan pada port ${port}..`)//akan dicetak pada terminal
})

*/