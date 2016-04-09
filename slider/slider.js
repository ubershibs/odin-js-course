var slides = {
  position: 0,
  count: 5,
  delay: 5000
};

function updateDot() {
  $('.dot').removeClass('current');
  var dotPicker = '.dot[value="' + slides.position + '"]';
  $(dotPicker).addClass('current');
}

function nextSlide() {
  slides.position++
  if(slides.position > (slides.count-1)){
    slides.position = 0;
  }
  var left_offset = slides.position * 680;
  $('#slidereel').animate({left: "-"+left_offset+"px"})
  updateDot();
}

function previewNext() {
  var next_slide = slides.position + 2;
  if(next_slide >= slides.count) {
    next_slide = 1;
  }
  $('#preview-next').css({'background-image': "url('images/img" + next_slide+ ".jpg')"});
}

function previewPrev() {
  var prev_slide = slides.position;
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
  if(slides.position < 0) {
    slides.position = slides.count-1;
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
  setTimeout(function() {
    nextSlide();
    slideLoop();
  }, 5000);
}

$(document).ready(function() {
  $('#next').hover(previewNext, clearPreview);
  $('#prev').hover(previewPrev, clearPreview);

  $('#next').click(nextSlide);
  $('#prev').click(prevSlide);
  $('.dot').click(jumpTo);
  slideLoop();
});
