var header = "<header><h1>Marie's Liquors & Pizza</h1></header>";

var nav = "<nav>" +
            "<ul>" +
              "<li id='about'>About Marie's</li>" +
              "<li id='menu'>Our Menu</li>" +
              "<li id='contact'>Contact Us</li>" +
            "</ul>" +
          "</nav>";
              

var about = "<div id='about-content' class='content'>" +
                "<p>For over 75 years, Marie's Liquors & Pizza has been a cornerstone of the neighbourhod.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas, dolor nec scelerisque maximus, quam nibh ullamcorper nisi, quis egestas diam mi ac lorem. Donec eleifend dictum magna. Donec facilisis, urna vitae gravida dapibus, nisl neque laoreet nunc, sed dictum nunc sem sit amet lorem.</p><p>Aenean vestibulum aliquam dolor eu condimentum. Donec eget vulputate eros. Aliquam efficitur, elit ullamcorper fringilla iaculis, lacus dolor finibus ex, eget cursus arcu ante id augue. Aliquam bibendum finibus fringilla.</p>" +
              "</div>";
var menu =  "<div id='menu-content' class='content'>" +
                "<p><strong>Pizza</strong> ~ Pepperoni $12  ~ Margerita $10 ~ Kale & Bacon $14</p><p><strong>Pasta</strong> ~Spaghetti Bolognese $11 ~ Macaroni & Cheese $8</p><p><strong>Insalata</strong> ~ Caesar $7 ~ Caprese $10</p" +
              "</div>"; 
            
var contact =  "<div id='contact-content' class='content'>" +
                "<p>1650 Main Street E, at College St.</p><p>Open late 7 days a week.</p><p>Call 555-555-1234 for pickup or delivery.</p>" +
              "</div>";

$(document).ready(function(){
  $("#content").append($( header ));
  $("#content").append($( nav ));
  $("#about").addClass( "active" );
  $("#content").append($( "<div id='container'>" + about + "</div>" ));
  
  navSelect("#menu", menu, "url('images/restaurant3.jpg')");
  navSelect("#contact", contact, "url('images/restaurant2.jpg')");
  navSelect("#about", about, "url('images/restaurant1.jpg')");
  
  function navSelect(nav_item, content, background_img) {
    $(nav_item).click(function() {
      $("#container").empty();
      $("#container").html( content );
      $("#content").css("background-image", background_img);
      $("ul").children("li").removeClass("active");
      $(this).addClass("active");
    })
  }
});