import {songs} from "./db"


document.addEventListener('DOMContentLoaded', () => {
    const 
          mainCntrl = document.querySelector('#player__main-control'),
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
          progress = document.querySelector('.player__progress')
    
    let isMusicPlay = false,
        index = 1,
        repeat = false
    

    const rewind = () => {
        console.log('rew')
        const procentOfProgress = (music.duration/100) * progress.value
        music.currentTime = procentOfProgress
    }

    function loadTrack(song) {
        songName.textContent = song.songName
        author.textContent = song.author
        cover.src = song.cover
        music.src = song.path
        bg.src = song.cover
        lyric.innerHTML = song.lyric

    }

    function playMusic() {
        isMusicPlay = true
        mainCntrl.classList.remove('fa-play')
        mainCntrl.classList.add('fa-pause')
        music.play()
    }

    function pauseMusic() {
        isMusicPlay = false
        mainCntrl.classList.remove('fa-pause')
        mainCntrl.classList.add('fa-play')
        music.pause()
    }

    function toggleMusicPlay() {
   
        if (isMusicPlay) {
            pauseMusic()
        } else {
            playMusic()
        }
    }
    
    const onLoadedData = () => {
        ostTime.textContent = '0:00'
        music.addEventListener('timeupdate', () => {        
            const procentOftime = ((music.currentTime)/music.duration) * 100
            progress.value = procentOftime;

            let now = Math.floor(music.currentTime) 
            let ost = Math.floor(music.duration) - now
            
            let sec = (Math.floor(now % 60) + '').length == 1 ? '0' + (Math.floor(now % 60) + '') : (Math.floor(now % 60) + '')
            let secs =  (Math.floor(ost % 60) + '').length == 1 ? '0' + (Math.floor(ost % 60) + '') : (Math.floor(ost % 60) + '')

            nowTime.textContent = `${Math.floor(now/60) + ':' + sec} `
            ostTime.textContent = `-${(Math.floor(ost/60) + '') +':'+secs}`
        })
    }

    const onPrevClick = () => {
        if(music.currentTime > 5 ) {
            music.currentTime = 0
        } else {
            index = (index - 1 + songs.length) % songs.length
            loadTrack(songs[index])
            playMusic()
            ostTime.textContent = '0:00'
        }
    }

    const onNextClick = () => {
        index = (index + 1 + songs.length) % songs.length
        loadTrack(songs[index])
        playMusic()
        ostTime.textContent = '0:00'  
    }

    const ended = () => {
        if(repeat) {
            music.currentTime = 0
        } else {
            index = (index + 1 + songs.length) % songs.length
            loadTrack(songs[index])
        }
        playMusic()
    }

    const toggleRepeat = () => {
        repeatBtn.classList.toggle('player__repeat_active')
        repeat = !repeat
    }

    loadTrack(songs[1])

    music.addEventListener('loadedmetadata', onLoadedData)

    next.addEventListener('click', onNextClick)

    prev.addEventListener('click', onPrevClick)

    music.addEventListener('ended', ended)

    repeatBtn.addEventListener('click', toggleRepeat)

    mainCntrl.addEventListener('click', toggleMusicPlay)

    progress.addEventListener('change', rewind)
    
    progress.addEventListener('click', rewind)

    textOn.addEventListener('click', () => {
        text.classList.add('player__text_active')
    })

    textOff.addEventListener('click', () => {
        text.classList.remove('player__text_active')
    })

    document.addEventListener('keydown', (e) => {
        if ((e.key == 'Escape' || e.key =='Enter') && text.classList.contains('player__text_active')) {
            text.classList.toggle('player__text_active')
        }
    })

})