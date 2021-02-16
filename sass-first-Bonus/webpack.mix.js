let mix = require('laravel-mix');
//Secondo la stringa appena sotto, deve esser compilato il file app.scss (contenuto in "src") e deve esser salvato il file compilato in "dist":
mix.sass('src/app.scss', 'dist/');
