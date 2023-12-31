/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/db.js":
/*!**********************!*\
  !*** ./src/js/db.js ***!
  \**********************/
/*! exports provided: songs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "songs", function() { return songs; });
var songs = [{
  songName: 'Капитал',
  author: 'Baby Melo',
  path: './audio/Baby_Melo_-_Kapital_prod_by_Spyrofoam_(musmore.com).mp3',
  cover: './img/baby-melo.jpg',
  lyric: "Они боятся женщину, о чем вообще базар?<br>Будешь в каждых новостях мы тебе сделаем пиар<br>И твой старший для меня малой мой, держит криминал<br>RIP тот что в бегах за тебя поднимаю нал<br><br>Ты от нее без ума, она сосала мне за (шмыг, шмыг)<br>Капитал был низок, поднимал бабки на (шмыг, шмыг)<br>Занимался боксом пиздил кмса Кун фу<br>Белые форсы в крови дают понять что я тру<br>Источник: txtsong.ru<br><br>Я буду ржать на тем как плачет твоя мама,<br>Буду наблюдать как за твой гроб башляет папа,<br>Бабки надо возвращать в указанную дату<br>Приезжай на точку будем все решать по факту, моим фарту<br><br>Дай бог удачи пацанам в бегах,<br>Факт участия Гоги уже на ее губах,<br>Факт ненужной суки уже на ее щеках,<br>И слезах, ну увы, потеряла паца на деньгах<br><br>Я разучился извиняться<br>Это WOW щит<br>Пацы с калашами<br>Салютую СВАО щит<br><br>Пацы с лучшим газом<br>Салютую ЗАО щит<br>Но я вырос на окраине<br>И в крови ЮЗАО щит<br><br>Меня уважают мажики России за сироп,<br>Пару водников с типом, у кого целый дом сирот,<br>И сама лезет ко мне, походу в ход пошел азот,<br>Клубы, ЦУМ и spin4spin я уже уловил джекпот<br><br>Ты от нее без ума, она сосала мне за (шмыг, шмыг)<br>Капитал был низок, поднимал бабки на (шмыг, шмыг)<br>Занимался боксом пиздил кмса Кун фу<br>Белые форсы в крови дают понять что я тру<br>"
}, {
  songName: 'Anything',
  author: 'Andrianne Lenker',
  path: './audio/Adrianne_Lenker_-_anything_(musmore.com).mp3',
  cover: './img/songs.webp',
  lyric: "Staring down the barrel of the hot sun<br>Shining with the sheen of a shotgun<br>Carol has a little if we need some<br>Joyous rays, we wanna come<br>Hanging your jeans with a clothes pin<br>Skin still wet, still on my skin<br>Mango in your mouth, juice dripping<br>Shoulder of your shirtsleeve slipping<br>Christmas Eve with your mother and sis<br>Don't wanna fight but your mother insists<br>Dog's white teeth slice right into my fist<br>Drive to the ER and you put me on my wrist<br>Grocery store list, now you get this<br>Brunch, had calls and messages<br>I don't wanna be the owner of your fantasy<br>I just wanna be a part of your family<br>And I don't wanna talk about anything<br>I don't wanna talk about anything<br>I wanna kiss, kiss your eyes again<br>Wanna witness your eyes looking<br>I don't wanna talk about anyone<br>I don't wanna talk about anyone<br>I wanna sleep in your car while you're driving<br>Lay on your lap wh&#1077;n I'm crying<br>Circle of pine and riddle<br>Circl&#1077; of moss and fire smoke<br>Fan on the ceiling like a wheel spoke<br>Push the clutch in and I pull the choke<br>Wanna listen to the sound of you blinking<br>Wanna listen to your hands soothe<br>Listen to your heart beating<br>Listen to the way you move<br>And I don't wanna talk about anything<br>I don't wanna talk about anything<br>I wanna kiss, kiss your eyes again<br>Wanna witness your eyes looking<br>I don't wanna talk about anyone<br>I don't wanna talk about anyone<br>Wanna sleep in your car while you're driving<br>Lay in your lap when I'm crying<br>Weren't we the stars in Heaven<br>Weren't we the salt in the sea<br>Dragging the newborn mountain<br>Didn't you believe in me?<br>Yeah, you held me the whole way through<br>When I couldn't say the words like you<br>I was scared indigo but I wanted to<br>I was scared indigo but I wanted to<br>I don't wanna talk about anything<br>I don't wanna talk about anything<br>I wanna kiss, kiss your eyes again<br>Wanna witness your eyes looking<br>I don't wanna talk about anyone<br>I don't wanna talk about anyone<br>I wanna sleep in your car while you're driving<br>Lay in your lap when I'm crying"
}, {
  songName: 'Smeels Like Teen Spirit',
  author: 'Nirvana',
  path: './audio/Нирвана - Smells Like Teen Spirit.mp3',
  cover: './img/NirvanaNevermindalbumcover.jpg',
  lyric: 'Нассы мне полный рот мочи'
}];


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ "./src/js/db.js");

document.addEventListener('DOMContentLoaded', function () {
  var mainCntrl = document.querySelector('#player__main-control'),
    music = new Audio(),
    songName = document.querySelector('.player__song-name'),
    author = document.querySelector('.player__song-author'),
    cover = document.querySelector('.player__img'),
    nowTime = document.querySelector('.player__now'),
    ostTime = document.querySelector('.player__ost'),
    prev = document.querySelector('#prev'),
    next = document.querySelector('#next'),
    bg = document.querySelector('.bg'),
    repeatBtn = document.querySelector('.player__settings i'),
    text = document.querySelector('.player__text'),
    textOn = document.querySelector('.player__textBtn'),
    textOff = document.querySelector('.textOff'),
    lyric = document.querySelector('.player__lyric'),
    progress = document.querySelector('.player__progress');
  var isMusicPlay = false,
    index = 1,
    repeat = false;
  var rewind = function rewind() {
    console.log('rew');
    var procentOfProgress = music.duration / 100 * progress.value;
    music.currentTime = procentOfProgress;
  };
  function loadTrack(song) {
    songName.textContent = song.songName;
    author.textContent = song.author;
    cover.src = song.cover;
    music.src = song.path;
    bg.src = song.cover;
    lyric.innerHTML = song.lyric;
  }
  function playMusic() {
    isMusicPlay = true;
    mainCntrl.classList.remove('fa-play');
    mainCntrl.classList.add('fa-pause');
    music.play();
  }
  function pauseMusic() {
    isMusicPlay = false;
    mainCntrl.classList.remove('fa-pause');
    mainCntrl.classList.add('fa-play');
    music.pause();
  }
  function toggleMusicPlay() {
    if (isMusicPlay) {
      pauseMusic();
    } else {
      playMusic();
    }
  }
  var onLoadedData = function onLoadedData() {
    ostTime.textContent = '0:00';
    music.addEventListener('timeupdate', function () {
      var procentOftime = music.currentTime / music.duration * 100;
      progress.value = procentOftime;
      var now = Math.floor(music.currentTime);
      var ost = Math.floor(music.duration) - now;
      var sec = (Math.floor(now % 60) + '').length == 1 ? '0' + (Math.floor(now % 60) + '') : Math.floor(now % 60) + '';
      var secs = (Math.floor(ost % 60) + '').length == 1 ? '0' + (Math.floor(ost % 60) + '') : Math.floor(ost % 60) + '';
      nowTime.textContent = "".concat(Math.floor(now / 60) + ':' + sec, " ");
      ostTime.textContent = "-".concat(Math.floor(ost / 60) + '' + ':' + secs);
    });
  };
  var onPrevClick = function onPrevClick() {
    if (music.currentTime > 5) {
      music.currentTime = 0;
    } else {
      index = (index - 1 + _db__WEBPACK_IMPORTED_MODULE_0__["songs"].length) % _db__WEBPACK_IMPORTED_MODULE_0__["songs"].length;
      loadTrack(_db__WEBPACK_IMPORTED_MODULE_0__["songs"][index]);
      playMusic();
      ostTime.textContent = '0:00';
    }
  };
  var onNextClick = function onNextClick() {
    index = (index + 1 + _db__WEBPACK_IMPORTED_MODULE_0__["songs"].length) % _db__WEBPACK_IMPORTED_MODULE_0__["songs"].length;
    loadTrack(_db__WEBPACK_IMPORTED_MODULE_0__["songs"][index]);
    playMusic();
    ostTime.textContent = '0:00';
  };
  var ended = function ended() {
    if (repeat) {
      music.currentTime = 0;
    } else {
      index = (index + 1 + _db__WEBPACK_IMPORTED_MODULE_0__["songs"].length) % _db__WEBPACK_IMPORTED_MODULE_0__["songs"].length;
      loadTrack(_db__WEBPACK_IMPORTED_MODULE_0__["songs"][index]);
    }
    playMusic();
  };
  var toggleRepeat = function toggleRepeat() {
    repeatBtn.classList.toggle('player__repeat_active');
    repeat = !repeat;
  };
  loadTrack(_db__WEBPACK_IMPORTED_MODULE_0__["songs"][1]);
  music.addEventListener('loadedmetadata', onLoadedData);
  next.addEventListener('click', onNextClick);
  prev.addEventListener('click', onPrevClick);
  music.addEventListener('ended', ended);
  repeatBtn.addEventListener('click', toggleRepeat);
  mainCntrl.addEventListener('click', toggleMusicPlay);
  progress.addEventListener('change', rewind);
  progress.addEventListener('click', rewind);
  textOn.addEventListener('click', function () {
    text.classList.add('player__text_active');
  });
  textOff.addEventListener('click', function () {
    text.classList.remove('player__text_active');
  });
  document.addEventListener('keydown', function (e) {
    if ((e.key == 'Escape' || e.key == 'Enter') && text.classList.contains('player__text_active')) {
      text.classList.toggle('player__text_active');
    }
  });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map