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
    mainNav = document.getElementById('mainNav'),
    mainNavItems = document.querySelectorAll('.nav__item');

navBtn.onclick = function() {
	mainNav.classList.toggle('nav_open')
}

navCloseBtn.onclick = function() {
  for(var i=0; i<mainNavItems.length; i++){
    mainNavItems[i].classList.remove('nav__item_active')
  };
  mainNav.classList.remove('nav_open')
}


mainNav.onclick = function(e) {
  var target = e.target;
  while(target != mainNav){
    console.log(target)
    if(target.classList.contains('nav__item')){
      for(var i=0; i<mainNavItems.length; i++){
        mainNavItems[i].classList.remove('nav__item_active')
      }
      target.classList.add('nav__item_active')
      break;
    } else {
      target = target.parentNode;
    }
  }
}
}());



//TABS
(function(){
  var tabsBox = document.getElementById('tabs'),
      tabsBtn = document.querySelectorAll('.tabs__btn'),
      tabContent = document.querySelectorAll('.tabs-content');
  tabsBox.onclick = function(e){
    var target = e.target;
    while(target != tabsBox){
      if(target.classList.contains('tabs__btn')){
        break;
      } else {
        target = target.parentNode;
      }
    }
    var data = target.getAttribute('data-tab');



    for(var i=0; i<tabsBtn.length; i++){
      tabsBtn[i].classList.remove('tabs__btn_active');
    }
    target.classList.add('tabs__btn_active')


    for(var i=0; i<tabContent.length; i++){
      tabContent[i].classList.remove('tabs-content_active');
    }
    document.getElementById(data).classList.add('tabs-content_active');
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
