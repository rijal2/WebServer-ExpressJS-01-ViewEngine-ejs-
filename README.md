# WebServer-ExpressJS-01-ViewEngine-ejs-
Membuat Template untuk tampilan Web.
Pada latihan ini template engine yang akan digunakan adalah ejs (Embeded Javascript templates).
Dukumentasinya bisa dilihat di:
1. npmjs.com/package/ejs
2. ejs.co

=====================================================================
MENGGUNKAAN VIEW ENGINE EJS

01. Instal sesuai petunjuk:
    $ npm install ejs@3.1.6

02. Beritahu dulu app.js bahwa sistem akan menggunakan ejs. Caranya bisa dengan menuliskan kode berikut pada app.js:
    app.set('view engine', 'ejs')

    dengan menggunakan kode diatas expressJS akan mengenali bahwa sistem menggunakan view engine bernama ejs untuk menampilkan halaman web nya. ExpressJS pun akan mencari folder bernama "views", kemudian mengambil file-file yang ada didalamnya sesuai yang request.

    Pada latihan sebelumnya, sudah dibuat 3 file untuk menampilkan halaman web, yaitu index.html, about.html, dan contact.html. Agar bisa dipakai oleh ejs, maka ketiga file ini  harus di pindah ke folder "vews"

03. Bikin Folder VIEWS, karena sebelumnya tidak punya.
04. Memindahkan file-file html ke "views".
05. ubah extensi html menjadi ejs.(about.ejs, contact.ejs, index.ejs)
06. Pada semua metode get, ganti res.sendFile() dengan res.render()
    Contoh: res.render('index') => menuju halaman index
            res.render('about') => menuju halaman about
07. Install extensi ejs, agar VSCode mengetahui bahwa tanda ini <% %> merupakan tag dari ejs

===========================================================================
MENERAPKAN CONTROL FLOW DIDALAM EJS

CONTROL FLOW 1 - ARRAY
Rencananya pada halaman index akan dimunculkan daftar masiswa yang terdiri dari nama mahasiswa dan emailnya. Langkah:
1. Buat Array Mhs
    Di dalam metode get yang responnya menuju halaman index, buat sebuah array dengan nama mhs.
    Array mhs ini berupa object yang masing2 object menyimpan nilai nama mahasiswa dan email.

    const mhs = [{nama: mhs1, email: emailmhs1@gmail.com}]

2. Pada halaman endex.ejs buat elemen yang akan digunakan menampilkan data seorang mahasiswa. Kemudian looping elemen tersebut menggunakn ejsforEach.
    Contoh:
    <% mhs.forEach(m => { %>
      <ul>
        <li>Nama: <%= m.nama %>  </li>
        <li>Email: <%= m.email %> </li>
      </ul>
     
    <% }) %>

    dengan looping tersebut maka data mahasiswa yang berada di dalam array akan ditampilkan.





