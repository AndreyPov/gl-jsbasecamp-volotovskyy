// Поиск любимой песни
// 1.Создайте коллекцию из 5 музыкальных песен, где каждая песня содержит следующую информацию:
// played - количество раз песня была проиграна (определить случайным образом), name - имя песни
// 2.Напишите функцию favoriteSong, которая принимает коллекцию из песен, и возвращает следующую информацию:
// название песни, сколько раз песня была проиграна, индекс песни в коллекции.
// 3.Вызовите функцию favoriteSong и передайте ей созданную коллекцию
'use strict';

var topTitles = [
  'Three Days Grace - I Hate Everything About You',
  'Linkin Park – Numb',
  'Bullet for My Valentine – Riot',
  'Eluveitie – Inis Mona',
  'Bring Me The Horizon - True Friends'
];

var collection = makePlaylist(topTitles);

function Song(name) {
  this.played = Math.floor(Math.random() * 200);
  this.name = name;
}

function makePlaylist(titles) {
  var playlist = [];

  for (var i = 0; i < 5; i++) {
    playlist.push(new Song(titles[i]));
  }
  return playlist;
}

function favoriteSong(playlist) {
  var favSong = playlist[0];
  var favSongIndex = 0;

  for (var i = 1; i < playlist.length; i++) {
    if (playlist[i].played > favSong.played) {
      favSong = playlist[i];
      favSongIndex = i;
    }
  }

  var favSongInfo = {
    name: favSong.name,
    played: favSong.played,
    index: favSongIndex
  }

  console.log(favSongInfo);
  return favSongInfo;
}

favoriteSong(collection);