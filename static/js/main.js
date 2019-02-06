;
svg4everybody();



//SLIDER
$('.slider__feedback-slides').slick({
  infinite: false,
  prevArrow: '.slider__prev-btn',
  nextArrow: '.slider__next-btn'
});


//DROPDOWN
(function() {
var navBtn = document.getElementById('toggle-navigation-btn'),
    navCloseBtn = document.getElementById('navCloseBtn'),
    mainNav = document.getElementById('mainNav')
navBtn.onclick = function() {
	mainNav.classList.toggle('nav_open')
}

navCloseBtn.onclick = function() {
  mainNav.classList.remove('nav_open')
}
}());




//SHOW TRANSAKTIONS ON THE MAP
(function(){
  var mapInfo = document.querySelectorAll('.map__item'),
  x = 0;
  function makeVisible(){
    mapInfo[x].classList.add('map__item_active');
  }


    setTimeout(function shown() {
      makeVisible();
      setTimeout(function(){
        mapInfo[x].classList.remove('map__item_active');
        if(x < mapInfo.length-1){
          x++;
        } else {
          x = 0;
        }
        setTimeout(shown, Math.random() * 5000);
      }, 2000);

    }, Math.random() * 5000)

}());


//CUSTOM VIDEO CONTROLS
(function() {
  var video = document.getElementById('video'),
      videoPlayBtn = document.getElementById('playBtn'),
      videoPauseBtn = document.getElementById('pauseBtn'),
      videoTitle = document.querySelectorAll('.video__title');
      video.controls = false;
      videoPlayBtn.onclick = function() {
        videoTitle[0].classList.add('video__title_hidden');
        this.classList.add('video__playBtn_hidden');
        videoPauseBtn.classList.remove('video__pauseBtn_hidden');
        video.play();
      };

  videoPauseBtn.onclick = function() {
    console.log(this, videoPlayBtn);
    videoTitle[0].classList.remove('video__title_hidden');
    this.classList.add('video__pauseBtn_hidden');
    videoPlayBtn.classList.remove('video__playBtn_hidden');
    video.pause();
  };
}());
