var restaurant = "Marie's Pizza";

$(document).ready(function() {
    $("#content").append("<header><h1></h1></header>").append("<div class='main'></div>").append("<p class='imagecredit'><a href='https://flic.kr/p/79QfqZ'>Image credit: George Ruiz - Creative Commons Attribution 2.0</a></p>");
    $("h1").html( restaurant );
    $("h1").css({
        "font-family": "'Pacifico', cursive",
        "font-size": "80px",
        "margin": "40px auto",
        "width": "auto",
        "height": "auto",
        "text-align": "center",
        "color": "white"
    });

    $("body").css({
         "width": "100%",
         "height": "100%",
         "display": "block",
         "position": "relative",
         "margin": "0px"
    });
    
    $("#content").css({
        "width": "100%",
        "height": "100%",
        "display": "block",
        "position": "fixed",
        "background-image": "url('images/restaurant1.jpg')",
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "center center",
        "margin": "0"
    });

    $(".main").append($("<p>For over 40 years, Marie's Pizza has been a cornerstone of the neighbourhod.</p><p>Lorem ipsum21dolor sit amet, consectetur adipiscing elit. Maecenas egestas, dolor nec scelerisque maximus, quam nibh ullamcorper nisi, quis egestas diam mi ac lorem. Donec eleifend dictum magna. Donec facilisis, urna vitae gravida dapibus, nisl neque laoreet nunc, sed dictum nunc sem sit amet lorem. Aenean vestibulum aliquam dolor eu condimentum. Donec eget vulputate eros. Aliquam efficitur, elit ullamcorper fringilla iaculis, lacus dolor finibus ex, eget cursus arcu ante id augue. Aliquam bibendum finibus fringilla.</p><p>Suspendisse ac ornare enim, in lobortis nunc. Curabitur egestas pharetra nisl ut congue. In eu lacus nec metus consectetur tincidunt. Aliquam id pretium ligula. Mauris tempor, tellus at tristique lacinia, dolor sem aliquam massa, id pretium erat dui in odio. Nam congue, justo eu commodo molestie, libero neque ultrices quam, sit amet auctor velit orci vel tellus. Cras condimentum eu tortor non commodo.</p>"));
   
    $("p").css({
        "font-family": "'Open Sans', sans-serif",
        "font-size": "18px",
        "color": "black"
    });
    
    $(".main").css({
        "box-sizing": "border-box",
        "margin": "0 auto 100px auto",
        "width": "80%",         
        "height": "auto",
        "padding": "5%",
        "display": "block",
        "position": "relative",
        "background-color": "rgba(255, 255, 255, 0.5)",
        "display": "block",
        "position": "relative"
    });
    
    $(".imagecredit").css({
        "font-family": "'Open Sans', sans-serif",
        "font-size": "10px",
        "color": "white",
        "position": "absolute",
        "bottom": "10px",
        "left": "10px",
        "display": "block"
    });
    $(".imagecredit a").css({
        "color": "white",
        "text-decoration": "none"
    })
});

