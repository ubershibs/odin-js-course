var slides = {
  position: 1,
  count: 5,
  delay: 5000
};

function updateDot() {
  $('.dot').removeClass('current');
  var dotPicker = '.dot[value="' + (slides.position-1) + '"]';
  $(dotPicker).addClass('current');
}

function nextSlide() {
  slides.position++
  if(slides.position > slides.count){
    slides.position = 1;
    $('#slidereel').css({left: "0"});
  }
  var left_offset = slides.position * 680;
  $('#slidereel').animate({left: "-"+left_offset+"px"})
  updateDot();
}

function previewNext() {
  var next_slide = slides.position + 1;
  if(next_slide >= slides.count) {
    next_slide = 1;
  }
  $('#preview-next').css({'background-image': "url('images/img" + next_slide+ ".jpg')"});
}

function previewPrev() {
  var prev_slide = slides.position-1;
  if(prev_slide <= 0) {
    prev_slide = slides.count;
  }
  $('#preview-prev').css({'background-image': "url('images/img" + (prev_slide) + ".jpg')"});
}

function clearPreview() {
  $('#preview-next').css({'background-image': "none"});
  $('#preview-prev').css({'background-image': "none"});
}

function prevSlide() {
  slides.position--
  if(slides.position <= 0) {
    slides.position = slides.count;
    $('#slidereel').css({left: "-4080px" });
  }
  var left_offset = slides.position * 680;
  $('#slidereel').animate({left: "-"+left_offset+"px"}, 1000);
  updateDot();
}

function jumpTo(event) {
  slides.position = $(event.target).attr("value");
  var left_offset = slides.position * 680;
  $('#slidereel').animate({left: "-"+left_offset+"px"}, 1000);
  updateDot();
}

function slideLoop() {
  var timer = 0
  function run() {
    nextSlide();
    slideLoop();
  }
  timer = setTimeout(run, 5000);

  $('#pause').click(stop);

  function stop() {
    clearTimeout(timer);
    $('#play').css({color: "transparent", 'text-shadow': "none", display: "block"});
    $('#pause').css({display: "none"});
  }
}

function startSlideShow() {
  $('#play').css({color: "transparent", display: "none"});
  $('#pause').css({display: "block"});
  slideLoop();
};

$(document).ready(function() {
  $('#next').hover(previewNext, clearPreview);
  $('#prev').hover(previewPrev, clearPreview);

  $('#next').click(nextSlide);
  $('#prev').click(prevSlide);
  $('.dot').click(jumpTo);
  $('#play').click(startSlideShow);
});
